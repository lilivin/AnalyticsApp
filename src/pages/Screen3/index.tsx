import BarChart from "../../components/barChart";
import DonutChart from "../../components/donutChart";
import FlexRow from "../../components/flexRow";
import GraphContainer from "../../components/graphContainer";
import ImageWithText from "../../components/imageWithText";
import LineChart from "../../components/lineChart";
import List from "../../components/list";
import ListItem from "../../components/list/components/listItem";
import FileItem from "../../components/list/components/listItem/components/fileItem";
import StorageItem from "../../components/list/components/listItem/components/storageItem";
import ProgressBar from "../../components/progressBar";
import Table from "../../components/table";
import TableBody from "../../components/table/components/tableBody";
import TableBodyCell from "../../components/table/components/tableBodyCell";
import TableHead from "../../components/table/components/tableHead";
import TableHeadCell from "../../components/table/components/tableHeadCell";
import TableRow from "../../components/table/components/tableRow";
import Tag from "../../components/tag";
import {
  DataPoint,
  barChartData1,
  barChartData2,
  dataGrouped,
  lineChartData2,
} from "../Homepage";
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

function Screen3() {
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
            withLegend={true}
          />
        </GraphContainer>
      </FlexRow>
      <GraphContainer title="User Devices" width={100}>
        <Table maxHeight={300}>
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
                <ImageWithText roundedImage={true} image="user-image-1.jpg">
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
                <ImageWithText roundedImage={true} image="user-image-2.jpg">
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
                <ImageWithText roundedImage={true} image="user-image-3.jpg">
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
                <ImageWithText roundedImage={true} image="user-image-1.jpg">
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
                <ImageWithText roundedImage={true} image="user-image-2.jpg">
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
                <ImageWithText roundedImage={true} image="user-image-3.jpg">
                  John Smith
                </ImageWithText>
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
        <GraphContainer title="User Devices" width={40}>
          <DonutChart
            id="testCompoentn2"
            zoom={true}
            width={600}
            height={360}
            withTooltip={false}
            withLegend={true}
          />
        </GraphContainer>
        <GraphContainer title="Used Storage" width={60}>
          <BarChart
            id="groupedBarChart23"
            data={dataGrouped}
            xValue="group"
            keys={["value1", "value2", "value3", "value4"]}
            grouped={true}
            withLegend={true}
          />
        </GraphContainer>
      </FlexRow>
    </div>
  );
}

export default Screen3;
