import Button from "../../../../../button";
import ImageWithText from "../../../../../imageWithText";
import styles from "./index.module.scss";

function FileItem(props: { fileName: string, fileSize: string, uploadDate: string }) {
  const { fileName, fileSize, uploadDate } = props;
  return (
    <div className={styles.fileItem}>
      <ImageWithText image="file-icon.svg">{fileName}</ImageWithText>
      <span>{fileSize}</span>
      <span>{uploadDate}</span>
      <Button>Download</Button>
    </div>
  );
}

export default FileItem;
