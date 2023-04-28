import styles from "./index.module.scss";

function Button(props: { children: string }) {
  const { children } = props;
  return <button className={styles.button}>{children}</button>;
}

export default Button;
