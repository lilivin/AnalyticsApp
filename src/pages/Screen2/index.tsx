import BarChart from "../../components/barChart";
import DonutChart from "../../components/donutChart";
import FlexRow from "../../components/flexRow";
import GraphContainer from "../../components/graphContainer";
import LineChart from "../../components/lineChart";
import List from "../../components/list";
import { DataPoint, barChartData1, lineChartData2 } from "../Homepage";
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

function Screen2() {
  return (
    <div className={styles.container}>
      <FlexRow>
        <GraphContainer title="User Devices" width={60}>
          <LineChart
            id="smoothLineChart"
            data={lineChartData2}
            xValue="day"
            smooth={true}
            width={850}
            height={400}
          />
        </GraphContainer>
        <GraphContainer title="User Devices" width={40}>
          <BarChart
            id="barChart"
            data={barChartData1}
            xValue="year"
            keys={["apples", "oranges", "grapes"]}
          />
        </GraphContainer>
      </FlexRow>
      <FlexRow>
        <GraphContainer title="User Devices" width={40}>
          <DonutChart
            id="testCompoentn2"
            zoom={true}
            width={600}
            height={400}
            withTooltip={false}
            withLegend={true}
          />
        </GraphContainer>
        <GraphContainer title="User Devices" width={60}>
          <List />
        </GraphContainer>
      </FlexRow>
    </div>
  );
}

export default Screen2;
