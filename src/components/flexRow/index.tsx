import styles from "./index.module.scss";

function FlexRow(props: { children: JSX.Element | JSX.Element[] }) {
  const { children } = props;

  return <div className={styles.container}>{children}</div>;
}

export default FlexRow;
