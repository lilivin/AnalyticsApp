import BarChart from "../../components/barChart";
import DonutChart from "../../components/donutChart";
import GraphContainer from "../../components/graphContainer";
import LineChart from "../../components/lineChart";
import OverviewStats from "../../components/overviewStats";
import { DataPoint, barChartData2, dataGrouped } from "../Homepage";
import styles from "./index.module.scss";

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

function Screen1() {
  return (
    <div className={styles.container}>
      <OverviewStats />
      <GraphContainer title="User Devices" width={60}>
        <LineChart
          id="lineChart"
          data={lineChartData1}
          xValue="month"
          smooth={false}
          width={850}
          height={400}
        />
      </GraphContainer>
      <GraphContainer title="User Devices" width={40}>
        <DonutChart
          id="testCompoentn2312"
          zoom={false}
          width={450}
          height={450}
          withTooltip={true}
          withLegend={true}
        />
      </GraphContainer>
      <GraphContainer title="User Devices" width={30}>
        <DonutChart
          id="testCompoentn2123123"
          zoom={false}
          width={400}
          height={400}
          withTooltip={true}
          withLegend={true}
        />
      </GraphContainer>
      <GraphContainer title="User Devices" width={70}>
        <BarChart
          id="groupedBarChart"
          data={barChartData2}
          xValue="year"
          keys={["apples"]}
        />
      </GraphContainer>
      <GraphContainer title="User Devices" width={70}>
        <BarChart
          id="groupedBarChart2"
          data={dataGrouped}
          xValue="group"
          keys={["value1", "value2", "value3", "value4"]}
          grouped={true}
        />
      </GraphContainer>
      <GraphContainer title="User Devices" width={30}>
        <LineChart
          id="lineChart2"
          data={lineChartData1}
          xValue="month"
          smooth={true}
          width={850}
          height={400}
        />
      </GraphContainer>
    </div>
  );
}

export default Screen1;
