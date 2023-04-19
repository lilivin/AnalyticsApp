import * as d3 from "d3";
import { useEffect } from "react";
import "./styles.css";

type DonutChartData = {
  label: string;
  value: number;
};

function DonutChart(props: { id: string; zoom: boolean }) {
  const { id, zoom } = props;

  const data: DonutChartData[] = [
    { label: "Category 1", value: 40 },
    { label: "Category 2", value: 20 },
    { label: "Category 3", value: 20 },
    { label: "Category 4", value: 20 },
  ];

  const keys = data.map((item) => item.label);

  const itemsValue = data
    .map((item) => item.value)
    .reduce((prev, next) => prev + next);

  const margin = { top: 20, right: 30, bottom: 60, left: 40 };
  const width = 700 - margin.left - margin.right;
  const height = 600 - margin.top - margin.bottom;
  const radius = Math.min(width, height) / 2;
  const color = d3
    .scaleOrdinal()
    .domain(data.map((d: DonutChartData) => d.label))
    .range(["#3B50DF", "#80CAEF", "#0FADD0", "#6577F3"]);

  useEffect(() => {
    d3.select(`#${id}`).select("svg").remove();

    const svg = d3
      .select(`#${id}`)
      .append("svg")
      .attr("width", width + margin.left + margin.right)
      .attr("height", height + margin.top + margin.bottom)
      .append("g")
      .attr("transform", `translate(${width / 2},${height / 2})`);

    const arc = d3
      .arc()
      .innerRadius(radius * 0.5)
      .outerRadius(radius * 0.8);

    const pie = d3
      .pie<DonutChartData>()
      .value((d: DonutChartData) => d.value)
      .sort(null);

    const arcTweenEnter = (d: d3.PieArcDatum<DonutChartData>) => {
      const i = d3.interpolate(d.startAngle, d.endAngle);
      return (t: number) => {
        d.endAngle = i(t);
        return arc(d as unknown as d3.DefaultArcObject);
      };
    };

    const arcs = svg.selectAll("path").data(pie(data)).enter();

    arcs
      .append("path")
      .attr("d", (d: d3.PieArcDatum<DonutChartData>) =>
        arc(d as unknown as d3.DefaultArcObject)
      )
      .attr(
        "fill",
        (d: d3.PieArcDatum<DonutChartData>) => color(d.data.label) as string
      )
      .attr("opacity", 0)
      .on("mouseover", function (_, d: d3.PieArcDatum<DonutChartData>) {
        if (zoom) {
          const newOuterRadius = radius * 0.9;
          const newArc = d3
            .arc<DonutChartData>()
            .innerRadius(radius * 0.5)
            .outerRadius(newOuterRadius);
          d3.select<SVGPathElement, DonutChartData>(this)
            .transition()
            .duration(200)
            .attr("d", function (d: DonutChartData) {
              const path = newArc(d);
              return path ? path.toString() : null;
            });
          svg.select(".donut-text-value").text(`${d.data.value}`);
          svg.select(".donut-text").text(`${d.data.label}`);
        }
      })
      .on("mousemove", function (event, d: d3.PieArcDatum<DonutChartData>) {
        if (!zoom) {
          tooltip.transition().duration(200).style("opacity", 0.9);
          tooltip.style("background", color(d.data.label) as string);
          tooltip
            .html(`<strong>${d.data.value}</strong>`)
            .style("left", `${event.pageX + 5}px`)
            .style("top", `${event.pageY - 40}px`);
        }
      })
      .on("mouseout", function () {
        if (zoom) {
          svg.select(".donut-text-value").text(`${itemsValue}`);
          svg.select(".donut-text").text(`Categories`);
          d3.select(this)
            .transition()
            .duration(200)
            .attr("d", arc as unknown as string);
        } else {
          tooltip.transition().duration(500).style("opacity", 0);
        }
      })
      .transition()
      .duration(1000)
      .delay((d, i) => i * 500) // Delay for entry animation
      .attr("opacity", 1)
      // @ts-ignore
      .attrTween("d", arcTweenEnter);

    if (zoom) {
      svg
        .append("text")
        .attr("class", "donut-text-value")
        .attr("text-anchor", "middle")
        .style("font-weight", "bold")
        .style("font-size", "34px")
        .attr("dy", "0em")
        .text(itemsValue);

      svg
        .append("text")
        .attr("class", "donut-text")
        .attr("text-anchor", "middle")
        .style("font-size", "18px")
        .attr("dy", "1.8em")
        .text("Categories");
    }

    const tooltip = d3
      .select("body")
      .append("div")
      .attr("class", "tooltip")
      .style("opacity", 0);

    const legendWidth = 100;
    const legendPadding = 10;

    const legend = svg
      .append("g")
      .attr("class", "legend")
      .attr(
        "transform",
        `translate(${-(keys.length * (legendWidth + legendPadding / 2)) / 2}, ${
          height / 2
        })`
      );

    // Append legend items
    const legendItems = legend
      .selectAll(".legend-item")
      .data(keys)
      .enter()
      .append("g")
      .attr("class", "legend-item")
      .attr(
        "transform",
        (d, i) => `translate(${i * (legendWidth + legendPadding)}, 0)`
      );

    legendItems
      .append("rect")
      .attr("x", 0)
      .attr("y", 0)
      .attr("width", 15)
      .attr("height", 15)
      .attr("rx", 50)
      .style("fill", function (d) {
        return color(d) as string;
      })
      .attr("stroke", "#000")
      .attr("stroke-width", "#000");

    // Append legend labels
    legendItems
      .append("text")
      .attr("x", 20)
      .attr("y", 12)
      .text((d) => d)
      .attr("font-weight", 500)
      .attr("font-size", 14);
  }, []);

  return <div id={id}></div>;
}

export default DonutChart;
