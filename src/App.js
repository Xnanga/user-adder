import { useState } from "react";
import "./App.css";

import Body from "./Components/StyledContainers/Body";
import Card from "./Components/StyledContainers/Card";
import Form from "./Components/Form/Form";
import UserList from "./Components/UserList/UserList";
import Modal from "./Components/StyledContainers/Modal";
import BlurFilter from "./Components/StyledContainers/BlurFilter";

function App() {
  const [allUserData, setAllUserData] = useState([]);
  const [userDataAvailable, setUserDataAvailable] = useState(false);
  const [modalVisible, setModalVisible] = useState(false);
  const [errorTitle, setErrorTitle] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const newUserHandler = (newUserData) => {
    setAllUserData((prevState) => {
      return [...prevState, newUserData];
    });
    setUserDataAvailable(true);
  };

  const errorHandler = (e) => {
    if (!e.target[0].value || !e.target[1].value) {
      setErrorTitle("Fields Not Filled In");
      setErrorMessage(
        'Please ensure all fields contain a valid value before clicking the "Add User" button.'
      );
      setModalVisible(true);
    }
  };

  const closeModal = () => setModalVisible(false);

  return (
    <>
      <BlurFilter modalVisible={modalVisible}>
        <Body>
          <Card>
            <Form newUserHandler={newUserHandler} errorHandler={errorHandler} />
          </Card>
          {userDataAvailable && (
            <Card>
              <UserList allUserData={allUserData} />
            </Card>
          )}
        </Body>
      </BlurFilter>
      <Modal
        modalVisible={modalVisible}
        closeModal={closeModal}
        errorTitle={errorTitle}
        errorMessage={errorMessage}
      />
    </>
  );
}

export default App;
