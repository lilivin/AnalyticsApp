import styles from "./index.module.scss";

function Tag(props: { children: string, color?: string }) {
  const { children, color } = props;

  function tagColor(color: string | undefined){
    if(color === "red"){
        return styles.red;
    } else if (color === "green"){
        return styles.green;
    } else if (color === "blue"){
        return styles.blue;
    }
  }

  return <div className={`${styles.tag} ${tagColor(color)}`}>{children}</div>;
}

export default Tag;
