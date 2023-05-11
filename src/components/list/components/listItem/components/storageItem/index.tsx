import Button from "../../../../../button";
import ImageWithText from "../../../../../imageWithText";
import ProgressBar from "../../../../../progressBar";
import styles from "./index.module.scss";

function StorageItem(props: {
  progress: number;
  name: string;
  size: string;
  image: string;
}) {
  const { progress, name, size, image } = props;
  return (
    <div className={styles.storageItem}>
      <img src={require(`../../../../../../assets/${image}`)} alt="icon" />
      <div className={styles.content}>
        <div className={styles.data}>
          <span className={styles.name}>{name}</span>
          <span>{size}</span>
        </div>
        <ProgressBar id="progressbar-1" progress={progress} />
      </div>
    </div>
  );
}

export default StorageItem;
