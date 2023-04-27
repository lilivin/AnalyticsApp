import styles from "./index.module.scss";

function TableBodyCell(props: { children: JSX.Element | JSX.Element[] | string }) {
  const { children } = props;
  return <td className={styles.td}>{children}</td>;
}

export default TableBodyCell;
