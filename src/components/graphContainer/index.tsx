import styles from "./index.module.scss";

function GraphContainer(props: {
  children: any;
  title: string;
  width: number;
}) {
  const { children, title, width } = props;
  return (
    <div
      className={styles.graphContainer}
      style={{ width: `calc(${width}% - 30px)` }}
    >
      <h3 className={styles.header}>{title}</h3>
      <div className={styles.content}>
      {children}
      </div>
    </div>
  );
}

export default GraphContainer;
