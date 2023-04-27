import styles from "./index.module.scss";

function ImageWithText(props: { children: string; image: string }) {
  const { children, image } = props;

  return (
    <div className={styles.container}>
      <img className={styles.image} src={require(`../../assets/${image}.jpg`)} alt="Image" />
      <span className={styles.text}>{children}</span>
    </div>
  );
}

export default ImageWithText;
