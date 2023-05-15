import BarChart from "../../components/barChart";
import DonutChart from "../../components/donutChart";
import FileManager from "../../components/fileManager";
import FlexRow from "../../components/flexRow";
import GraphContainer from "../../components/graphContainer";
import LineChart from "../../components/lineChart";
import List from "../../components/list";
import ListItem from "../../components/list/components/listItem";
import FileItem from "../../components/list/components/listItem/components/fileItem";
import StorageItem from "../../components/list/components/listItem/components/storageItem";
import ProgressBar from "../../components/progressBar";
import { DataPoint, barChartData1, barChartData2, lineChartData2 } from "../Homepage";
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
      <FileManager />
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
          <List>
            <ListItem>
              <FileItem
                fileName="Test"
                fileSize="55kB"
                uploadDate="25.09.2022"
              />
            </ListItem>
            <ListItem>
              <FileItem
                fileName="Test"
                fileSize="515kB"
                uploadDate="25.09.2022"
              />
            </ListItem>
            <ListItem>
              <FileItem
                fileName="Test"
                fileSize="55kB"
                uploadDate="25.09.2022"
              />
            </ListItem>
            <ListItem>
              <FileItem
                fileName="Test"
                fileSize="55kB"
                uploadDate="25.09.2022"
              />
            </ListItem>
            <ListItem>
              <FileItem
                fileName="Test"
                fileSize="55kB"
                uploadDate="25.09.2022"
              />
            </ListItem>
            <ListItem>
              <FileItem
                fileName="Test"
                fileSize="55kB"
                uploadDate="25.09.2022"
              />
            </ListItem>
            <ListItem>
              <FileItem
                fileName="Test Undefined2"
                fileSize="511kB"
                uploadDate="25.09.2022"
              />
            </ListItem>
            <ListItem>
              <FileItem
                fileName="Test"
                fileSize="55kB"
                uploadDate="25.09.2022"
              />
            </ListItem>
          </List>
        </GraphContainer>
      </FlexRow>
      <FlexRow>
        <GraphContainer title="Used Storage" width={60}>
          <BarChart
            id="groupedBarChart"
            data={barChartData2}
            xValue="year"
            keys={["apples"]}
          />
        </GraphContainer>
        <GraphContainer title="Test" width={40}>
          <List>
            <ListItem>
              <StorageItem
                progress={70}
                name="Video Storage"
                size="128GB"
                image="video-icon.svg"
              />
            </ListItem>
            <ListItem>
              <StorageItem
                progress={50}
                name="Docs Storage"
                size="50GB"
                image="folder-icon.svg"
              />
            </ListItem>
            <ListItem>
              <StorageItem
                progress={60}
                name="Music Storage"
                size="72GB"
                image="music-icon.svg"
              />
            </ListItem>
            <ListItem>
              <StorageItem
                progress={90}
                name="Photo Storage"
                size="80GB"
                image="photo-icon.svg"
              />
            </ListItem>
            <ListItem>
              <StorageItem
                progress={70}
                name="Video Storage"
                size="128GB"
                image="video-icon.svg"
              />
            </ListItem>
            <ListItem>
              <StorageItem
                progress={50}
                name="Docs Storage"
                size="50GB"
                image="folder-icon.svg"
              />
            </ListItem>
            <ListItem>
              <StorageItem
                progress={60}
                name="Music Storage"
                size="72GB"
                image="music-icon.svg"
              />
            </ListItem>
            <ListItem>
              <StorageItem
                progress={90}
                name="Photo Storage"
                size="80GB"
                image="photo-icon.svg"
              />
            </ListItem>
          </List>
        </GraphContainer>
      </FlexRow>
    </div>
  );
}

export default Screen2;
