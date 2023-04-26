import styles from "./index.module.scss";

function Table(props: { children: JSX.Element[] }) {
  const { children } = props;
  return (
    <div className={styles.container}>
      <table className={styles.table}>{children}</table>
    </div>
  );
}

export default Table;
