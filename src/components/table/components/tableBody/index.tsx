import styles from "./index.module.scss";

function TableBody(props: { children: JSX.Element | JSX.Element[] }) {
  const { children } = props;
  return <tbody className={styles.tbody}>{children}</tbody>;
}

export default TableBody;
