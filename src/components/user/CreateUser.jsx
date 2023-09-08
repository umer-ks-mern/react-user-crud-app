import "../../App.css";
import { useState } from "react";

const CreateUser = ({ onCreateUser }) => {
  const [UserData, setUserData] = useState({
    id: "",
    name: "",
    age: 0,
    email: "",
  });

  const addClick = () => {
    if (
      UserData.name === "" ||
      UserData.id === "" ||
      isNaN(UserData.age) ||
      UserData.email === ""
    ) {
      alert("All Fields are Required!!");
      return;
    }
    onCreateUser(UserData);
    setUserData({
      id: "",
      name: "",
      age: 0,
      email: "",
    });
  };

  return (
    <div>
      <div className="header-container">
        <h2 className="header">Create User</h2>
      </div>
      <div className="form-container">
        <div className="form-card">
          <label htmlFor="id">ID:</label>
          <input
            onChange={(e) => {
              setUserData({ ...UserData, id: e.target.value });
            }}
            type="text"
            id="userId"
            name="name"
            value={UserData.id}
          />
          <label htmlFor="name">Name:</label>
          <input
            onChange={(e) => {
              setUserData({ ...UserData, name: e.target.value });
            }}
            type="text"
            id="userName"
            name="name"
            value={UserData.name}
          />
          <label htmlFor="age">Age:</label>
          <input
            onChange={(e) => {
              setUserData({ ...UserData, age: e.target.value });
            }}
            type="number"
            name="age"
            id="UserAge"
            value={UserData.age}
          ></input>
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            name="userEmail"
            value={UserData.email}
            onChange={(e) => {
              setUserData({ ...UserData, email: e.target.value });
            }}
          />
          <button onClick={addClick}>Create User</button>
        </div>
      </div>
    </div>
  );
};

export default CreateUser;
