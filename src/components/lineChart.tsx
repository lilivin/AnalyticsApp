import * as d3 from "d3";
import { useEffect } from "react";
import "./styles.css";
import { DataPoint } from "../App";

function LineChart(props: {
  id: string;
  data: DataPoint[];
  xValue: string;
  smooth: boolean;
}) {
  const { id, data, xValue, smooth } = props;

  const margin = { top: 20, right: 30, bottom: 30, left: 40 };
  const width = 600 - margin.left - margin.right;
  const height = 400 - margin.top - margin.bottom;

  useEffect(() => {
    d3.select(`#${id}`).select("svg").remove();
    var div = d3
      .select("body")
      .append("div")
      .attr("class", "tooltipLineChart")
      .style("opacity", 0);

    const svg = d3
      .select(`#${id}`)
      .append("svg")
      .style("overflow", "visible")
      .attr("width", width + margin.left + margin.right)
      .attr("height", height + margin.top + margin.bottom)
      .append("g")
      .attr("transform", `translate(${margin.left},${margin.top})`);
    const xScale = d3
      .scaleBand()
      .domain(data.map((d) => d[xValue] as string))
      .range([0, width])
      .padding(0.1);

    const yScale = d3
      .scaleLinear()
      .domain([
        0,
        d3.max(data, (d) => Math.max(d.line1, d.line2) * 1.05),
      ] as Iterable<d3.NumberValue>)
      .range([height, 0]);

    const yAxisTicks = yScale.ticks();
    svg
      .selectAll(".y-axis-line")
      .data(yAxisTicks)
      .enter()
      .append("line")
      .attr("class", "y-axis-line")
      .attr("x1", 0)
      .attr("x2", width)
      .attr("y1", (d) => yScale(d))
      .attr("y2", (d) => yScale(d))
      .attr("stroke", "#F3F3F3")
      .attr("stroke-width", 1);

    const xAxis = svg
      .append("g")
      .attr("transform", `translate(0, ${height})`)
      .call(d3.axisBottom(xScale));

    const yAxis = svg
      .append("g")
      .attr("class", "y-axis")
      .call(d3.axisLeft(yScale));

    xAxis.select(".domain").remove();
    xAxis.selectAll(".tick line").remove();

    yAxis.select(".domain").remove();
    yAxis.selectAll(".tick line").remove();

    xAxis
      .selectAll(".tick text")
      .attr("fill", "#637382")
      .attr("font-weight", 700);

    yAxis.selectAll(".tick text").attr("fill", "#637382");

    const line1 = svg
      .append("path")
      .datum(data)
      .attr("fill", "none")
      .attr("stroke", "steelblue")
      .attr("stroke-width", 4)
      .attr(
        "d",
        smooth
          ? d3
              .line<DataPoint>()
              .x((d) => xScale(d[xValue] as string)! + xScale.bandwidth() / 2)
              .y((d) => yScale(d.line1)!)
              .curve(d3.curveCatmullRom)
          : d3
              .line<DataPoint>()
              .x((d) => xScale(d[xValue] as string)! + xScale.bandwidth() / 2)
              .y((d) => yScale(d.line1)!)
      );

    const line2 = svg
      .append("path")
      .datum(data)
      .attr("fill", "none")
      .attr("stroke", "orange")
      .attr("stroke-width", 4)
      .attr(
        "d",
        smooth
          ? d3
              .line<DataPoint>()
              .x((d) => xScale(d[xValue] as string)! + xScale.bandwidth() / 2)
              .y((d) => yScale(d.line2)!)
              .curve(d3.curveCatmullRom)
          : d3
              .line<DataPoint>()
              .x((d) => xScale(d[xValue] as string)! + xScale.bandwidth() / 2)
              .y((d) => yScale(d.line2)!)
      );

    line1
      .attr(
        "stroke-dasharray",
        line1.node()!.getTotalLength() + " " + line1.node()!.getTotalLength()
      )
      .attr("stroke-dashoffset", line1.node()!.getTotalLength())
      .transition()
      .duration(1500)
      .attr("stroke-dashoffset", 0);

    line2
      .attr(
        "stroke-dasharray",
        line2.node()!.getTotalLength() + " " + line2.node()!.getTotalLength()
      )
      .attr("stroke-dashoffset", line2.node()!.getTotalLength())
      .transition()
      .duration(1500)
      .attr("stroke-dashoffset", 0);

    svg
      .selectAll(".dotsLine1")
      .data(data)
      .enter()
      .append("circle")
      .attr("class", "dot")
      .attr("opacity", 0)
      .attr("cx", (d) => xScale(d[xValue] as string)! + xScale.bandwidth() / 2)
      .attr("cy", (d) => yScale(d.line1))
      .attr("r", 5)
      .attr("fill", "steelblue")
      .transition()
      .duration(1000)
      .delay((d, i) => i * 100) // Delay for entry animation
      .attr("opacity", 1);

    svg
      .selectAll(".dotsLine2")
      .data(data)
      .enter()
      .append("circle")
      .attr("class", "dot")
      .attr("opacity", 0)
      .attr("cx", (d) => xScale(d[xValue] as string)! + xScale.bandwidth() / 2)
      .attr("cy", (d) => yScale(d.line2))
      .attr("r", 5)
      .attr("fill", "orange")
      .transition()
      .duration(1000)
      .delay((d, i) => i * 100) // Delay for entry animation
      .attr("opacity", 1);

    svg
      .selectAll(".hover-rect")
      .data(data)
      .enter()
      .append("rect")
      .attr("class", "hover-rect")
      .attr("x", (d) => xScale(d[xValue] as string)!)
      .attr("y", 0)
      .attr("width", xScale.bandwidth() + 5)
      .attr("height", height)
      .attr("opacity", 0)
      .on("mouseover", (event, d) => {
        d3.select(event.target).attr("opacity", 0.01);
        div.transition().duration(200).style("opacity", 0.9);
        div.html(
          "<h3>" +
            d[xValue] +
            "</h3><p>Value1: <span>" +
            d.line1 +
            "</span></p><p>Value2: <span>" +
            d.line2 +
            "</span></p>"
        );
      })
      .on("mousemove", (event, d) => {
        div.style("left", event.pageX + "px").style("top", event.pageY + "px");
      })
      .on("mouseout", (event, d) => {
        d3.select(event.target).attr("opacity", 0);
        div.transition().duration(100).style("opacity", 0);
        svg.select(".hover-text").remove();
      });
  }, []);

  return <div id={id}></div>;
}

export default LineChart;
