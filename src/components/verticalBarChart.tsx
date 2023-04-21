import * as d3 from "d3";
import { useEffect } from "react";

type BarChartData = {
  [key: string]: number | string;
};

type StackDataType =
  | BarChartData[]
  | Iterable<BarChartData>
  | d3.ValueFn<SVGGElement, unknown, BarChartData[] | Iterable<BarChartData>>;

function VerticalBarChart() {
  const data = [
    { label: "Category 1", value: 30 },
    { label: "Category 2", value: 50 },
    { label: "Category 3", value: 20 },
    // Add more data points as needed
  ];
  const margin = { top: 20, right: 30, bottom: 30, left: 40 };
  const width = 600 - margin.left - margin.right;
  const height = 400 - margin.top - margin.bottom;

  // Set up the SVG container
  useEffect(() => {
    d3.select(`#graph`).select("svg").remove();
    const svg = d3
      .select("#graph")
      .append("svg")
      .style("overflow", "visible")
      .attr("width", width + margin.left + margin.right)
      .attr("height", height + margin.top + margin.bottom)
      .append("g")
      .attr("transform", `translate(${margin.left},${margin.top})`);

    // Set up scales for the graph
    const xScale = d3
      .scaleLinear()
      .domain([0, d3.max(data, (d) => d.value)] as any)
      .range([0, 400]); // Set the width of the graph

    const yScale = d3
      .scaleBand()
      .domain(data.map((d) => d.label))
      .range([0, 300]) // Set the height of the graph
      .padding(0.1); // Set the padding between bars

    // Draw the bars
    svg
      .selectAll("rect")
      .data(data)
      .enter()
      .append("rect")
      .attr("x", 0) // Start the bars from the left edge of the graph
      .attr("y", (d) => yScale(d.label) as any)
      .attr("width", (d) => xScale(d.value))
      .attr("height", yScale.bandwidth())
      .attr("fill", "steelblue"); // Set the color of the bars

    // Add labels to the bars
    svg
      .selectAll("text")
      .data(data)
      .enter()
      .append("text")
      .text((d) => d.value)
      .attr("x", (d) => xScale(d.value) + 10) // Position the labels to the right of the bars
      .attr("y", (d) => (yScale(d.label) as any) + yScale.bandwidth() / 2)
      .attr("text-anchor", "start") // Set the text-anchor to start for left alignment
      .attr("alignment-baseline", "middle")
      .attr("fill", "white"); // Set the color of the labels

    // Add the x-axis
    const xAxis = svg
      .append("g")
      .attr("transform", `translate(0, ${height})`)
      .call(d3.axisBottom(xScale));

    // Add the y-axis
    const yAxis = svg.append("g").call(d3.axisLeft(yScale));
  }, []);

  return <div id="graph"></div>;
}

export default VerticalBarChart;
