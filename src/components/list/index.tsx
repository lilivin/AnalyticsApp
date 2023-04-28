import Button from "../button";
import ImageWithText from "../imageWithText";
import styles from "./index.module.scss";

function List() {
  return (
    <ul className={styles.list}>
      <li className={styles.listItem}>
        <ImageWithText image="user-image-1">Charlie Donin</ImageWithText>
        <span>File size: 55kB</span>
        <span>Uploaded on: 25 Nov. 2025</span>
        <Button>Download</Button>
      </li>
      <li className={styles.listItem}>
        <ImageWithText image="user-image-1">Charlie Donin</ImageWithText>
        <span>File size: 55kB</span>
        <span>Uploaded on: 25 Nov. 2025</span>
        <Button>Download</Button>
      </li>
      <li className={styles.listItem}>
        <ImageWithText image="user-image-1">Charlie Donin</ImageWithText>
        <span>File size: 55kB</span>
        <span>Uploaded on: 25 Nov. 2025</span>
        <Button>Download</Button>
      </li>
      <li className={styles.listItem}>
        <ImageWithText image="user-image-1">Charlie Donin</ImageWithText>
        <span>File size: 55kB</span>
        <span>Uploaded on: 25 Nov. 2025</span>
        <Button>Download</Button>
      </li>
    </ul>
  );
}

export default List;
