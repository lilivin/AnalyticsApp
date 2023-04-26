import styles from "./index.module.scss";

function TableHead(props: {children: JSX.Element | JSX.Element[]}) {
  const {children} = props;
  return (
    <thead className={styles.thead}>
      <tr>
        {children}
      </tr>
    </thead>
  );
}

export default TableHead;
