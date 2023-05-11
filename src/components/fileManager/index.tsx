import styles from "./index.module.scss";
import Image from "../../assets/file-icon.svg";
import FileSection from "./components/fileSection";

function FileManager() {
  return (
    <div className={styles.container}>
      <FileSection
        title="Design"
        subtitle="17 files"
        size="241MB"
        image="folder-icon.svg"
      />
      <FileSection
        title="Image"
        subtitle="12 files"
        size="120MB"
        image="music-icon.svg"
      />
      <FileSection
        title="Music"
        subtitle="39 files"
        size="374MB"
        image="photo-icon.svg"
      />
      <FileSection
        title="Docs"
        subtitle="78 files"
        size="237MB"
        image="video-icon.svg"
      />
    </div>
  );
}

export default FileManager;
