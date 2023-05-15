import Button from "../../../../../button";
import ImageWithText from "../../../../../imageWithText";
import styles from "./index.module.scss";

function FileItem(props: { fileName: string, fileSize: string, uploadDate: string }) {
  const { fileName, fileSize, uploadDate } = props;
  return (
    <div className={styles.fileItem}>
      <ImageWithText image="file-icon.svg">{fileName}</ImageWithText>
      <div className={styles.size}>
        <span>{fileSize}</span>
      </div>
      <div className={styles.date}>{uploadDate}</div>
      <Button>Download</Button>
    </div>
  );
}

export default FileItem;
