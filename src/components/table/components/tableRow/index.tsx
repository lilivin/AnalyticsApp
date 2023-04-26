import styles from "./index.module.scss";

function TableRow(props: { children: JSX.Element | JSX.Element[] }) {
  const { children } = props;
  return <tr className={styles.tr}>{children}</tr>;
}

export default TableRow;
