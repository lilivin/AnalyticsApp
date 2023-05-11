import * as d3 from "d3";
import { useEffect } from "react";
import useWindowDimensions from "../helpers/useWindowDimenstions";

type BarChartData = {
  [key: string]: number | string;
};

type StackDataType =
  | BarChartData[]
  | Iterable<BarChartData>
  | d3.ValueFn<SVGGElement, unknown, BarChartData[] | Iterable<BarChartData>>;

function BarChart(props: {
  id: string;
  data: BarChartData[];
  xValue: string;
  keys: string[];
  grouped?: boolean;
  withLegend?: boolean;
}) {
  const { id, data, xValue, keys, grouped, withLegend } = props;
  const margin = { top: 50, right: 20, bottom: withLegend ? 60 : 0, left: 20 };
  const height = 400 - margin.top - margin.bottom;

  const { width: parentWidth } = useWindowDimensions(id);

  const colors = ["#3B50DF", "#80CAEF", "#0FADD0", "#6577F3"];

  useEffect(() => {
    d3.select(`#${id}`).select("svg").remove();
    const svg = d3
      .select(`#${id}`)
      .append("svg")
      .style("overflow", "visible")
      .attr("width", parentWidth! + margin.left + margin.right)
      .attr("height", height + margin.top + margin.bottom)
      .append("g")
      .attr("transform", `translate(${margin.left},${margin.top})`);

    const xScale = d3
      .scaleBand()
      .range([0, parentWidth! - margin.right])
      .domain(data.map((d) => d[xValue]) as Iterable<string>)
      .padding(0.1);

    const x1Scale = d3
      .scaleBand()
      .domain(keys)
      .range([0, xScale.bandwidth()])
      .padding(0.05);

    const getMaxValue = (data: BarChartData[], keys: string[]): number => {
      let maxVal: number = Number.MIN_VALUE;
      data.forEach((d: BarChartData) => {
        keys.forEach((key: string) => {
          if (typeof d[key] === "number" && (d[key] as number) > maxVal) {
            maxVal = d[key] as number;
          }
        });
      });
      return maxVal;
    };

    let yScale = d3
      .scaleLinear()
      .range([height, 0])
      .domain(
        grouped
          ? [0, getMaxValue(data, keys)]
          : ([
              0,
              d3.max(data, (d: BarChartData) => {
                let result = 0;
                keys.map((key: string) => (result += d[key] as number));
                return result;
              }),
            ] as number[])
      );

    const yAxisTicks = yScale.ticks();
    svg
      .selectAll(".y-axis-line")
      .data(yAxisTicks)
      .enter()
      .append("line")
      .attr("class", "y-axis-line")
      .attr("x1", 0)
      .attr("x2", parentWidth!)
      .attr("y1", (d) => yScale(d))
      .attr("y2", (d) => yScale(d))
      .attr("stroke", "#F3F3F3")
      .attr("stroke-width", 1);

    svg
      .append("g")
      .selectAll("g")
      .data(
        grouped
          ? data
          : (d3.stack().keys(keys)(
              data as Iterable<{ [key: string]: number }>
            ) as StackDataType)
      )
      .join("g")
      .attr("fill", (_, index: number) => colors[index])
      .attr("transform", (d: BarChartData) =>
        grouped ? `translate(${xScale(d.group as string)}, 0)` : 0
      )
      .selectAll("rect")
      // @ts-ignore
      .data((d: BarChartData) =>
        grouped ? keys.map((key: string) => ({ name: key, value: d[key] })) : d
      )
      .join("rect")
      .attr("x", (d) =>
        // @ts-ignore
        grouped? (x1Scale(d.name as string) as number): xScale(d.data[xValue])!
      )
      .attr("y", height)
      .attr("width", grouped ? x1Scale.bandwidth() : xScale.bandwidth())
      .attr("height", 0)
      .attr("fill", (_, index: number) => (grouped ? colors[index] : null))
      .attr("rx", 4)
      .attr("ry", 4)
      .transition()
      .duration(1000)
      .attr(
        "y",
        (
          d // @ts-ignore
        ) => (grouped ? yScale(d.value) : yScale(d[1]))
      )
      .attr(
        "height",
        (
          d // @ts-ignore
        ) => (grouped ? height - yScale(d.value) : yScale(d[0]) - yScale(d[1]))
      );

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

    const legendWidth = 100; // width of the legend
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
      // Append the legend container to the SVG
      const legend = svg
        .append("g")
        .attr("class", "legend")
        .attr("transform", `translate(0, ${height + 40})`); // adjust the value to control the vertical spacing between the chart and the legend

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

      // Append legend color rectangles
      legendItems
        .append("rect")
        .attr("x", 0)
        .attr("y", 0)
        .attr("width", 15) // width of the legend color rectangle
        .attr("height", 15) // height of the legend color rectangle
        .attr("rx", 50)
        .attr("fill", (d, i) => colors[i]) // assuming colors is an array of colors for each legend item
        .attr("stroke", "#000")
        .attr("stroke-width", "#000");

      // Append legend labels
      legendItems
        .append("text")
        .attr("x", 20) // adjust the value to control the horizontal spacing between the legend color rectangle and the legend label
        .attr("y", 12) // adjust the value to vertically center the legend label
        .text((d) => d) // assuming the legend labels are the keys in the data
        .attr("font-weight", 500)
        .attr("font-size", 14);
    }
  }, [parentWidth]);

  return <div id={id}></div>;
}

export default BarChart;
