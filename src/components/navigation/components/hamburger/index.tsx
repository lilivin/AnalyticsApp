import styles from "./index.module.scss";
import ArrowRight from "../../../../assets/arrow-right.svg";

function Hamburger(props: {setIsOpen: (arg: boolean) => void, isOpen: boolean}) {
  const {setIsOpen, isOpen} = props;
  return (
    <>
      <div className={`${styles.hamburger} ${isOpen && styles.open}`} onClick={() => setIsOpen(!isOpen)}>
        <img src={ArrowRight} alt="Arrow" />
      </div>
    </>
  );
}

export default Hamburger;
