import styles from "./BlurFilter.module.css";

const BlurFilter = (props) => {
  if (props.modalVisible) {
    return <div className={styles.blurfilter}>{props.children}</div>;
  } else {
    return <div>{props.children}</div>;
  }
};

export default BlurFilter;
