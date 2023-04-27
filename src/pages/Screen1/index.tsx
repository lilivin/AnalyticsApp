import BarChart from "../../components/barChart";
import DonutChart from "../../components/donutChart";
import FlexRow from "../../components/flexRow";
import GraphContainer from "../../components/graphContainer";
import ImageWithText from "../../components/imageWithText";
import LineChart from "../../components/lineChart";
import OverviewStats from "../../components/overviewStats";
import Table from "../../components/table";
import TableBody from "../../components/table/components/tableBody";
import TableBodyCell from "../../components/table/components/tableBodyCell";
import TableHead from "../../components/table/components/tableHead";
import TableHeadCell from "../../components/table/components/tableHeadCell";
import TableRow from "../../components/table/components/tableRow";
import Tag from "../../components/tag";
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
      <FlexRow>
        <GraphContainer title="User Devices" width={60}>
          <LineChart
            id="lineChart"
            data={lineChartData1}
            xValue="month"
            smooth={false}
            width={850}
            height={300}
          />
        </GraphContainer>
        <GraphContainer title="User Devices" width={40}>
          <DonutChart
            id="testCompoentn2312"
            zoom={false}
            width={450}
            height={350}
            withTooltip={true}
            withLegend={true}
          />
        </GraphContainer>
      </FlexRow>
      <GraphContainer title="User Devices" width={100}>
        <Table>
          <TableHead>
            <TableHeadCell>Name</TableHeadCell>
            <TableHeadCell>Email</TableHeadCell>
            <TableHeadCell>Project</TableHeadCell>
            <TableHeadCell>Duration</TableHeadCell>
            <TableHeadCell>Status</TableHeadCell>
          </TableHead>
          <TableBody>
            <TableRow>
              <TableBodyCell>
                <ImageWithText image="user-image-1">
                  Charlie Donin
                </ImageWithText>
              </TableBodyCell>
              <TableBodyCell>wdavis@aol.com</TableBodyCell>
              <TableBodyCell>Decathlon E-commerce</TableBodyCell>
              <TableBodyCell>2 months</TableBodyCell>
              <TableBodyCell>
                <Tag color="red">Lost Lead</Tag>
              </TableBodyCell>
            </TableRow>
            <TableRow>
              <TableBodyCell>
                <ImageWithText image="user-image-2">
                  Makenna Carder
                </ImageWithText>
              </TableBodyCell>
              <TableBodyCell>itorres@aol.com</TableBodyCell>
              <TableBodyCell>mBank System</TableBodyCell>
              <TableBodyCell>5 months</TableBodyCell>
              <TableBodyCell>
                <Tag color="green">Active</Tag>
              </TableBodyCell>
            </TableRow>
            <TableRow>
              <TableBodyCell>
                <ImageWithText image="user-image-3">
                  Talan Dokindis
                </ImageWithText>
              </TableBodyCell>
              <TableBodyCell>rtaylor@aol.com</TableBodyCell>
              <TableBodyCell>Lild Marketing</TableBodyCell>
              <TableBodyCell>2 years</TableBodyCell>
              <TableBodyCell>
                <Tag color="green">Active</Tag>
              </TableBodyCell>
            </TableRow>
            <TableRow>
              <TableBodyCell>
                <ImageWithText image="user-image-1">
                  ACheyenne Levis
                </ImageWithText>
              </TableBodyCell>
              <TableBodyCell>ebrown@outlook.com</TableBodyCell>
              <TableBodyCell>City Market E-commerce</TableBodyCell>
              <TableBodyCell>1 Year</TableBodyCell>
              <TableBodyCell>
                <Tag color="red">Closed</Tag>
              </TableBodyCell>
            </TableRow>
            <TableRow>
              <TableBodyCell>
                <ImageWithText image="user-image-2">
                  James Aminoff
                </ImageWithText>
              </TableBodyCell>
              <TableBodyCell>slee@aol.com</TableBodyCell>
              <TableBodyCell>YourBook.com Business</TableBodyCell>
              <TableBodyCell>8 months</TableBodyCell>
              <TableBodyCell>
                <Tag color="blue">Upcoming</Tag>
              </TableBodyCell>
            </TableRow>
            <TableRow>
              <TableBodyCell>
                <ImageWithText image="user-image-3">John Smith</ImageWithText>
              </TableBodyCell>
              <TableBodyCell>jsmith@gmail.com</TableBodyCell>
              <TableBodyCell>MyBank.com Services</TableBodyCell>
              <TableBodyCell>4 weeks</TableBodyCell>
              <TableBodyCell>
                <Tag color="green">Active</Tag>
              </TableBodyCell>
            </TableRow>
          </TableBody>
        </Table>
      </GraphContainer>
      <FlexRow>
        <GraphContainer title="User Devices" width={50}>
          <BarChart
            id="groupedBarChart2"
            data={dataGrouped}
            xValue="group"
            keys={["value1", "value2", "value3", "value4"]}
            grouped={true}
          />
        </GraphContainer>
        <GraphContainer title="User Devices" width={50}>
          <Table>
            <TableHead>
              <TableHeadCell>Source</TableHeadCell>
              <TableHeadCell>Visitors</TableHeadCell>
              <TableHeadCell>Revenues</TableHeadCell>
              <TableHeadCell>Conversion</TableHeadCell>
            </TableHead>
            <TableBody>
              <TableRow>
                <TableBodyCell>Google</TableBodyCell>
                <TableBodyCell>2.5K</TableBodyCell>
                <TableBodyCell>$4.290</TableBodyCell>
                <TableBodyCell>2.5%</TableBodyCell>
              </TableRow>
            </TableBody>
          </Table>
        </GraphContainer>
      </FlexRow>
      {/* <GraphContainer title="User Devices" width={30}>
        <DonutChart
          id="testCompoentn2123123"
          zoom={false}
          width={300}
          height={300}
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
      </GraphContainer> */}
    </div>
  );
}

export default Screen1;
