import BarChart from "../../components/barChart";
import DonutChart from "../../components/donutChart";
import FlexRow from "../../components/flexRow";
import GraphContainer from "../../components/graphContainer";
import ImageWithText from "../../components/imageWithText";
import LineChart from "../../components/lineChart";
import Table from "../../components/table";
import TableBody from "../../components/table/components/tableBody";
import TableBodyCell from "../../components/table/components/tableBodyCell";
import TableHead from "../../components/table/components/tableHead";
import TableHeadCell from "../../components/table/components/tableHeadCell";
import TableRow from "../../components/table/components/tableRow";
import Tag from "../../components/tag";
import { getUsedStorageData, getVisitorsGenderData } from "../../helpers/getBarChartData";
import { getVisitorsAnalyticsData } from "../../helpers/getDonutChartData";
import { getVisitorsPerYearData } from "../../helpers/getLineChartData";
import styles from "./index.module.scss";

function Screen3() {
  return (
    <div className={styles.container}>
      <FlexRow>
        <GraphContainer title="Visitors per year" width={60}>
          <LineChart
            id="smoothLineChart"
            data={getVisitorsPerYearData()}
            xValue="day"
            smooth={true}
            width={850}
            height={400}
          />
        </GraphContainer>
        <GraphContainer title="Visitors Gender" width={40}>
          <BarChart
            id="barChart"
            data={getVisitorsGenderData()}
            xValue="year"
            keys={["Male", "Female", "Unknown"]}
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
            data={getVisitorsAnalyticsData()}
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
            data={getUsedStorageData()}
            xValue="group"
            keys={["Mobile", "Tablet", "Phone", "Unknown"]}
            grouped={true}
            withLegend={true}
          />
        </GraphContainer>
      </FlexRow>
    </div>
  );
}

export default Screen3;
