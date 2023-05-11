import styles from "./index.module.scss";

function ImageWithText(props: {
  children: string;
  image: string;
  roundedImage?: boolean;
}) {
  const { children, image, roundedImage } = props;

  return (
    <div className={styles.container}>
      <img
        className={`${styles.image} ${roundedImage && styles.rounded}`}
        src={require(`../../assets/${image}`)}
        alt="Image"
      />
      <span className={styles.text}>{children}</span>
    </div>
  );
}

export default ImageWithText;
