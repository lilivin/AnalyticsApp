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
import { getUserDevicesData } from "../../helpers/getBarChartData";
import { getVisitorsAnalyticsData } from "../../helpers/getDonutChartData";
import { getYearlyIncomesData } from "../../helpers/getLineChartData";
import styles from "./index.module.scss";

function Screen1() {
  return (
    <div className={styles.container}>
      <OverviewStats />
      <FlexRow>
        <GraphContainer title="Yearly incomes" width={60}>
          <LineChart
            id="lineChart"
            data={getYearlyIncomesData()}
            xValue="month"
            smooth={false}
            width={850}
            height={360}
          />
        </GraphContainer>
        <GraphContainer title="Visitors Analytics" width={40}>
          <DonutChart
            id="testCompoentn2312"
            data={getVisitorsAnalyticsData()}
            zoom={false}
            width={450}
            height={350}
            withTooltip={true}
            withLegend={true}
          />
        </GraphContainer>
      </FlexRow>
      <GraphContainer title="Leads Report" width={100}>
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
                  Cheyenne Levis
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
                <ImageWithText roundedImage={true} image="user-image-3.jpg">John Smith</ImageWithText>
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
            data={getUserDevicesData()}
            xValue="group"
            keys={["Mobile", "Tablet", "Phone", "Unknown"]}
            grouped={true}
            withLegend={true}
          />
        </GraphContainer>
        <GraphContainer title="User Devices" width={50}>
          <Table maxHeight={350}>
            <TableHead>
              <TableHeadCell>Source</TableHeadCell>
              <TableHeadCell>Visitors</TableHeadCell>
              <TableHeadCell>Revenues</TableHeadCell>
              <TableHeadCell>Conversion</TableHeadCell>
            </TableHead>
            <TableBody>
              <TableRow>
                <TableBodyCell>Youtube</TableBodyCell>
                <TableBodyCell>5.5K</TableBodyCell>
                <TableBodyCell>$7.290</TableBodyCell>
                <TableBodyCell>3.5%</TableBodyCell>
              </TableRow>
              <TableRow>
                <TableBodyCell>Google</TableBodyCell>
                <TableBodyCell>2.5K</TableBodyCell>
                <TableBodyCell>$4.770</TableBodyCell>
                <TableBodyCell>2.5%</TableBodyCell>
              </TableRow>
              <TableRow>
                <TableBodyCell>Twitter</TableBodyCell>
                <TableBodyCell>3.4K</TableBodyCell>
                <TableBodyCell>$3.120</TableBodyCell>
                <TableBodyCell>7.5%</TableBodyCell>
              </TableRow>
              <TableRow>
                <TableBodyCell>Instagram</TableBodyCell>
                <TableBodyCell>4.6K</TableBodyCell>
                <TableBodyCell>$7.110</TableBodyCell>
                <TableBodyCell>1.5%</TableBodyCell>
              </TableRow>
              <TableRow>
                <TableBodyCell>Facebook</TableBodyCell>
                <TableBodyCell>8.7K</TableBodyCell>
                <TableBodyCell>$12.290</TableBodyCell>
                <TableBodyCell>7.5%</TableBodyCell>
              </TableRow>
              <TableRow>
                <TableBodyCell>Tiktok</TableBodyCell>
                <TableBodyCell>18.1K</TableBodyCell>
                <TableBodyCell>$10.640</TableBodyCell>
                <TableBodyCell>10.5%</TableBodyCell>
              </TableRow>
              <TableRow>
                <TableBodyCell>Pinterest</TableBodyCell>
                <TableBodyCell>4.5K</TableBodyCell>
                <TableBodyCell>$1.390</TableBodyCell>
                <TableBodyCell>1.3%</TableBodyCell>
              </TableRow>
              <TableRow>
                <TableBodyCell>Snapchat</TableBodyCell>
                <TableBodyCell>6.5K</TableBodyCell>
                <TableBodyCell>$1.240</TableBodyCell>
                <TableBodyCell>2.5%</TableBodyCell>
              </TableRow>
              <TableRow>
                <TableBodyCell>Linkedin</TableBodyCell>
                <TableBodyCell>7.6K</TableBodyCell>
                <TableBodyCell>$1.640</TableBodyCell>
                <TableBodyCell>7.1%</TableBodyCell>
              </TableRow>
            </TableBody>
          </Table>
        </GraphContainer>
      </FlexRow>
    </div>
  );
}

export default Screen1;
