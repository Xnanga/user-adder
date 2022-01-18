import styles from "./UserListItem.module.css";

const UserListItem = (props) => {
  return (
    <div className={styles["user-list-item"]}>
      <span className={styles["user-list-item__data-block"]}>{props.name}</span>
      <span
        className={styles["user-list-item__data-block"]}
      >{`${props.age} Years Old`}</span>
    </div>
  );
};

export default UserListItem;
