// import styles from "./App.module.scss";
import BarChart from "../../components/barChart";
import LineChart from "../../components/lineChart";
import DonutChart from "../../components/donutChart";
import Navigation from "../../components/navigation";

export interface DataPoint {
  [key: string]: string | number;
  line1: number;
  line2: number;
}

const barChartData1 = [
  { year: 2014, apples: 12, oranges: 18, grapes: 10 },
  { year: 2015, apples: 15, oranges: 20, grapes: 12 },
  { year: 2016, apples: 3, oranges: 5, grapes: 8 },
  { year: 2017, apples: 11, oranges: 12, grapes: 4 },
  { year: 2018, apples: 10, oranges: 15, grapes: 8 },
  { year: 2019, apples: 12, oranges: 18, grapes: 10 },
  { year: 2020, apples: 15, oranges: 20, grapes: 12 },
];

function Homepage() {
  const dataGrouped = [
    { group: "Group 1", value1: 10, value2: 20, value3: 20, value4: 20 },
    { group: "Group 2", value1: 15, value2: 15, value3: 25, value4: 35 },
    { group: "Group 3", value1: 20, value2: 10, value3: 20, value4: 30 },
  ];

  const lineChartData1: DataPoint[] = [
    { month: "Jan", line1: 10, line2: 20 },
    { month: "Feb", line1: 20, line2: 15 },
    { month: "Mar", line1: 15, line2: 25 },
    { month: "Apr", line1: 25, line2: 10 },
    { month: "May", line1: 30, line2: 15 },
    { month: "Jun", line1: 10, line2: 20 },
    { month: "Jul", line1: 20, line2: 15 },
    { month: "Aug", line1: 15, line2: 25 },
    { month: "Sep", line1: 25, line2: 10 },
    { month: "Oct", line1: 30, line2: 15 },
    { month: "Nov", line1: 25, line2: 10 },
    { month: "Dec", line1: 30, line2: 15 },
  ];

  const lineChartData2: DataPoint[] = [
    { day: "1", line1: 10, line2: 20 },
    { day: "2", line1: 20, line2: 15 },
    { day: "3", line1: 15, line2: 25 },
    { day: "4", line1: 25, line2: 10 },
    { day: "5", line1: 30, line2: 15 },
    { day: "6", line1: 10, line2: 20 },
    { day: "7", line1: 20, line2: 15 },
    { day: "8", line1: 15, line2: 25 },
    { day: "9", line1: 25, line2: 10 },
    { day: "10", line1: 30, line2: 15 },
    { day: "11", line1: 25, line2: 10 },
    { day: "12", line1: 30, line2: 15 },
  ];

  const barChartData2 = [
    { year: 2014, apples: 12 },
    { year: 2015, apples: 15 },
    { year: 2016, apples: 3 },
    { year: 2017, apples: 11 },
    { year: 2018, apples: 10 },
    { year: 2019, apples: 12 },
    { year: 2020, apples: 15 },
  ];

  return (
    <div>
      <DonutChart id="testCompoentn" zoom={true} width={600} height={700}/>
      <DonutChart id="testCompoentn2" zoom={false} width={600} height={700}/>
      <BarChart
        id="barChart"
        data={barChartData1}
        xValue="year"
        keys={["apples", "oranges", "grapes"]}
      />
      <BarChart
        id="groupedBarChart"
        data={barChartData2}
        xValue="year"
        keys={["apples"]}
      />
      <BarChart
        id="groupedBarChart2"
        data={dataGrouped}
        xValue="group"
        keys={["value1", "value2", "value3", "value4"]}
        grouped={true}
      />
      <LineChart
        id="lineChart"
        data={lineChartData1}
        xValue="month"
        smooth={false}
        width={850}
        height={400}
      />
      <LineChart
        id="smoothLineChart"
        data={lineChartData2}
        xValue="day"
        smooth={true}
        width={850}
        height={400}
      />
    </div>
  );
}

export default Homepage;
