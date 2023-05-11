import styles from "./index.module.scss";

function List(props: {children: JSX.Element | JSX.Element[]}) {
  const {children} = props;
  return (
    <ul className={styles.list}>
      {children}
    </ul>
  );
}

export default List;
