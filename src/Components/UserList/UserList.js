import UserListItem from "./UserListItem";

import styles from "./UserList.module.css";

const UserList = (props) => {
  return (
    <div className={styles["user-list"]}>
      {props.allUserData.map((user) => {
        return <UserListItem key={user.id} name={user.name} age={user.age} />;
      })}
    </div>
  );
};

export default UserList;
