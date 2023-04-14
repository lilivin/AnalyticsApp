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
    { label: "Category 1", value: 30 },
    { label: "Category 2", value: 20 },
    { label: "Category 3", value: 50 },
  ];

  const width = 500;
  const height = 500;
  const radius = Math.min(width, height) / 2;
  const color = d3
    .scaleOrdinal()
    .domain(data.map((d: DonutChartData) => d.label))
    .range(["#e41a1c", "#377eb8", "#4daf4a"]);

  useEffect(() => {
    d3.select(`#${id}`).select("svg").remove();

    const svg = d3
      .select(`#${id}`)
      .append("svg")
      .attr("width", width)
      .attr("height", width)
      .append("g")
      .attr("transform", `translate(${width / 2},${height / 2})`);

    const arc = d3
      .arc()
      .innerRadius(radius * 0.6)
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
            .innerRadius(radius * 0.6)
            .outerRadius(newOuterRadius);
          d3.select<SVGPathElement, DonutChartData>(this)
            .transition()
            .duration(200)
            .attr("d", function (d: DonutChartData) {
              const path = newArc(d);
              return path ? path.toString() : null;
            });
          svg.select(".donut-text").text(`${d.data.label}: ${d.data.value}`);
        }
      })
      .on("mousemove", function (event, d: d3.PieArcDatum<DonutChartData>) {
        if (!zoom) {
          tooltip.transition().duration(200).style("opacity", 0.9);
          tooltip
            .html(`<strong>${d.data.label}</strong><br>${d.data.value}`)
            .style("left", `${event.pageX + 5}px`)
            .style("top", `${event.pageY - 40}px`);
        }
      })
      .on("mouseout", function () {
        if (zoom) {
          svg.select(".donut-text").text("Test");
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
        .attr("class", "donut-text")
        .attr("text-anchor", "middle")
        .attr("dy", ".35em")
        .text("Test");
    }

    const tooltip = d3
      .select("body")
      .append("div")
      .attr("class", "tooltip")
      .style("opacity", 0);
  }, []);

  return <div id={id}></div>;
}

export default DonutChart;
