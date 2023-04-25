import DonutChart from "../../../donutChart";
import styles from "./index.module.scss";

function SingleStatistic(props: {
  id: string;
  amount: number;
  title: string;
  graphPercent: number;
  percent: number;
}) {
  const { id, amount, title, graphPercent, percent } = props;
  return (
    <div className={styles.container}>
      <div className={styles.info}>
        <span className={styles.amount}>{amount}</span>
        <span className={styles.title}>{title}</span>
        <div className={styles.comparison}>
          <span
            className={`${styles.percent} ${
              percent >= 0 ? styles.surplus : styles.shortage
            }`}
          >
            {percent >= 0 ? "+" : ""}
            {percent}%
          </span>
          <span className={styles.period}>Since last week</span>
        </div>
      </div>
      <div className={styles.graph}>
        <DonutChart
          id={id}
          zoom={false}
          width={100}
          height={100}
          withTooltip={false}
          withLegend={false}
          percent={graphPercent}
        />
      </div>
    </div>
  );
}

export default SingleStatistic;
