import BarChart from "../../components/barChart";
import DonutChart from "../../components/donutChart";
import FileManager from "../../components/fileManager";
import FlexRow from "../../components/flexRow";
import GraphContainer from "../../components/graphContainer";
import List from "../../components/list";
import ListItem from "../../components/list/components/listItem";
import FileItem from "../../components/list/components/listItem/components/fileItem";
import StorageItem from "../../components/list/components/listItem/components/storageItem";
import { getUserStorageData } from "../../helpers/getBarChartData";
import { getVisitorsAnalyticsData } from "../../helpers/getDonutChartData";
import styles from "./index.module.scss";

function Screen2() {
  return (
    <div className={styles.container}>
      <FileManager />
      <FlexRow>
        <GraphContainer title="User Devices" width={40}>
          <DonutChart
            id="testCompoentn2"
            data={getVisitorsAnalyticsData()}
            zoom={true}
            height={400}
            withTooltip={false}
            withLegend={true}
          />
        </GraphContainer>
        <GraphContainer title="Files" width={60}>
          <List>
            <ListItem>
              <FileItem
                fileName="Content-script.txt"
                fileSize="455kB"
                uploadDate="25.09.2022"
              />
            </ListItem>
            <ListItem>
              <FileItem
                fileName="E-commerce.apk"
                fileSize="515kB"
                uploadDate="15.09.2022"
              />
            </ListItem>
            <ListItem>
              <FileItem
                fileName="Random-text.doc"
                fileSize="215kB"
                uploadDate="19.07.2022"
              />
            </ListItem>
            <ListItem>
              <FileItem
                fileName="Graph-data.json"
                fileSize="155kB"
                uploadDate="12.12.2022"
              />
            </ListItem>
            <ListItem>
              <FileItem
                fileName="Script-bot.py"
                fileSize="525kB"
                uploadDate="12.11.2022"
              />
            </ListItem>
            <ListItem>
              <FileItem
                fileName="invoices.xlsx"
                fileSize="715kB"
                uploadDate="10.05.2022"
              />
            </ListItem>
            <ListItem>
              <FileItem
                fileName="Website-content.json"
                fileSize="851kB"
                uploadDate="05.01.2023"
              />
            </ListItem>
            <ListItem>
              <FileItem
                fileName="Note-01.txt"
                fileSize="575kB"
                uploadDate="26.01.2023"
              />
            </ListItem>
          </List>
        </GraphContainer>
      </FlexRow>
      <FlexRow>
        <GraphContainer title="Used Storage" width={60}>
          <BarChart
            id="groupedBarChart"
            data={getUserStorageData()}
            xValue="year"
            keys={["storage"]}
          />
        </GraphContainer>
        <GraphContainer title="Storage Types" width={40}>
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
