import styles from "./index.module.scss";

function Table(props: { children: JSX.Element[], maxHeight?: number }) {
  const { children, maxHeight } = props;
  return (
    <div className={styles.container} style={{height: maxHeight}}>
      <table className={styles.table}>{children}</table>
    </div>
  );
}

export default Table;
