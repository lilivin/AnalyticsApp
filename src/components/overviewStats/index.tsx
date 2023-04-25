import SingleStatistic from "./components/singleStatistic";
import styles from "./index.module.scss";

function OverviewStats() {
  return (
    <div className={styles.container}>
        <SingleStatistic id="TEst21321" amount={140} title="Clients Added" percent={2.1} graphPercent={70} />
        <SingleStatistic id="TEst213221" amount={120} title="Contracts Signed" percent={-0.6} graphPercent={30} />
        <SingleStatistic id="TEst213231" amount={90} title="Invoice Sent" percent={1.1} graphPercent={50} />
    </div>
  );
}

export default OverviewStats;
