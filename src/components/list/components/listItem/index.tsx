import styles from "./index.module.scss";

function ListItem(props: { children: JSX.Element | JSX.Element[] }) {
  const { children } = props;
  return <li className={styles.listItem}>{children}</li>;
}

export default ListItem;
