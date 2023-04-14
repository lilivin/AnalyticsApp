import * as d3 from "d3";
import { useEffect } from "react";

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
}) {
  const { id, data, xValue, keys, grouped } = props;
  const margin = { top: 20, right: 30, bottom: 30, left: 40 };
  const width = 600 - margin.left - margin.right;
  const height = 400 - margin.top - margin.bottom;

  const colors = ["#FF5733", "#F3FF00", "#42FF00", "#00FFF3", "#004DFF"];

  useEffect(() => {
    d3.select(`#${id}`).select("svg").remove();
    const svg = d3
      .select(`#${id}`)
      .append("svg")
      .attr("width", width + margin.left + margin.right)
      .attr("height", height + margin.top + margin.bottom)
      .append("g")
      .attr("transform", `translate(${margin.left},${margin.top})`);

    const xScale = d3
      .scaleBand()
      .range([0, width])
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
          : [
              0,
              d3.max(data, (d: BarChartData) => {
                let result = 0;
                keys.map((key: string) => (result += d[key] as number));
                return result;
              }),
            ] as number[]
      );

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
      .data((d: BarChartData) =>
        grouped
          ? keys.map((key: string) => ({
              name: key,
              value: d[key],
            }))
          : d as any
      )
      .join("rect")
      .attr("x", (d: any) =>
        grouped ? (x1Scale(d.name as string) as number) : xScale(d.data[xValue])!
      )
      .attr("y", height) // set initial y to bottom of SVG
      .attr("width", grouped ? x1Scale.bandwidth() : xScale.bandwidth())
      .attr("height", 0) // set initial height to 0
      .attr("fill", (_, index: number) => (grouped ? colors[index] : null))
      .transition() // add transition
      .duration(1000) // set duration of transition
      .attr(
        "y",
        (
          d: any // set final y based on data value
        ) => (grouped ? yScale(d.value) : yScale(d[1]))
      )
      .attr(
        "height",
        (
          d: any // set final height based on data value
        ) => (grouped ? height - yScale(d.value) : yScale(d[0]) - yScale(d[1]))
      );

    svg
      .append("g")
      .attr("transform", `translate(0, ${height})`)
      .transition() // add transition to x-axis
      .duration(1000) // set duration of transition
      .call(d3.axisBottom(xScale));

    svg
      .append("g")
      .attr("class", "y-axis")
      .transition() // add transition to y-axis
      .duration(1000) // set duration of transition
      .call(d3.axisLeft(yScale));
  }, []);

  return <div id={id}></div>;
}

export default BarChart;
