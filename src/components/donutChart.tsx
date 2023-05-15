import * as d3 from "d3";
import { useEffect } from "react";
import "./styles.css";
import useWindowDimensions from "../helpers/useWindowDimenstions";

type DonutChartData = {
  label: string;
  value: number;
};

function DonutChart(props: {
  id: string;
  zoom: boolean;
  width: number;
  height: number;
  withTooltip: boolean;
  withLegend: boolean;
  percent?: number;
}) {
  const { id, zoom, width, height, withTooltip, withLegend, percent } = props;

  let data: DonutChartData[] = [
    { label: "Category 1", value: 40 },
    { label: "Category 2", value: 20 },
    { label: "Category 3", value: 20 },
    { label: "Category 4", value: 20 },
  ];

  if (percent) {
    data = [
      { label: "Value1", value: percent },
      { label: "Value2", value: 100 - percent },
    ];
  }

  const keys = data.map((item) => item.label);

  const itemsValue = data
    .map((item) => item.value)
    .reduce((prev, next) => prev + next);

  const margin = { top: 0, right: 30, bottom: 70, left: 40 };
  const parentHeight = height;

  const { width: parentWidth } = useWindowDimensions(id);

  const radius = Math.min(parentWidth, parentHeight) / 2;
  const color = d3
    .scaleOrdinal()
    .domain(data.map((d: DonutChartData) => d.label))
    .range(["#3B50DF", "#80CAEF", "#0FADD0", "#6577F3"]);

  useEffect(() => {
    d3.select(`#${id}`).select("svg").remove();

    const svg = d3
      .select(`#${id}`)
      .append("svg")
      .attr("width", parentWidth + margin.left + margin.right)
      .attr(
        "height",
        withLegend ? parentHeight + margin.top + margin.bottom : parentHeight
      )
      .append("g")
      .attr(
        "transform",
        `translate(${parentWidth / 2},${
          (withLegend
            ? parentHeight + margin.top + margin.bottom
            : parentHeight) / 2
        })`
      );

    const x = 0.5;
    const y = 0.8

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
        if (!zoom && withTooltip) {
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
            .duration(300)
            .attr("d", arc as unknown as string);
        } else if (withTooltip) {
          tooltip.transition().duration(600).style("opacity", 0);
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
        .style("font-size", "36px")
        .attr("dy", "0em")
        .text(itemsValue);

      svg
        .append("text")
        .attr("class", "donut-text")
        .attr("text-anchor", "middle")
        .style("font-size", "20px")
        .attr("dy", "1.8em")
        .text("Categories");
    }

    const tooltip = d3
      .select("body")
      .append("div")
      .attr("class", "tooltip")
      .style("opacity", 0);

    const legendWidth = 100;

    const itemsInRow =
      Math.floor(parentWidth / legendWidth) > keys.length
        ? keys.length
        : Math.floor(parentWidth / legendWidth);

    const legendContainerWidth = itemsInRow * legendWidth;

    function updateLegendItem(i: number) {
      const yTranslate = 0;
      const xTranslate = i * legendWidth;
      if (i < itemsInRow) {
        return { xTranslate: xTranslate, yTranslate: yTranslate };
      } else {
        return { xTranslate: (i - itemsInRow) * legendWidth, yTranslate: 20 };
      }
    }

    if (withLegend) {
      d3.select(".legend").node();
      const legend = svg
        .append("g")
        .attr("class", "legend")
        .attr(
          "transform",
          `translate(${-(legendContainerWidth / 2)}, ${parentHeight / 2})`
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
          (d, i) =>
            `translate(${updateLegendItem(i).xTranslate}, ${
              updateLegendItem(i).yTranslate
            })`
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
    }
  }, [parentWidth, parentHeight]);

  return <div id={id}></div>;
}

export default DonutChart;
