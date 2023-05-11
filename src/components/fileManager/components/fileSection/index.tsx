import styles from "./index.module.scss";
import Image from "../../../../assets/file-icon.svg";

function FileSection(props: {
  title: string;
  subtitle: string;
  image: string;
  size: string
}) {
  const { title, subtitle, image, size } = props;
  return (
    <div className={styles.container}>
      <div className={styles.dataContainer}>
        <div className={styles.icon}>
          <img src={require(`../../../../assets/${image}`)} alt="icon" />
        </div>
        <div className={styles.data}>
          <span className={styles.name}>{title}</span>
          <span className={styles.files}>{subtitle}</span>
        </div>
      </div>
      <span className={styles.size}>{size}</span>
    </div>
  );
}

export default FileSection;
