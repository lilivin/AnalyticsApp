import styles from "./index.module.scss";

function TableHeadCell(props: { children: string }) {
  const { children } = props;
  return <th className={styles.th}>{children}</th>;
}

export default TableHeadCell;
