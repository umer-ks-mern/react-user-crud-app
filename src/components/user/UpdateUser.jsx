import { useState } from "react";

const CreateUser = ({ onUpdateUser, findUser }) => {
  const [userData, setuserData] = useState({
    id: "",
    name: "",
    age: 0,
    email: "",
  });
  const [userId, setUserId] = useState("");
  const [userFound, setUserFound] = useState(false);

  const handleFind = () => {
    const resultentUser = findUser(userId);
    if (resultentUser != null) {
      setUserFound(!userFound);
      setuserData({
        id: resultentUser.id,
        name: resultentUser.name,
        age: resultentUser.age,
        email: resultentUser.email,
      });
    } else alert("User Not Found");
  };
  const updateClick = () => {
    if (userData.name === "" || isNaN(userData.age) || userData.email === "") {
      alert("All Feilds are Required!!");
      return;
    }
    onUpdateUser(userData);
    setUserFound(!userFound);
    setuserData({
      id: "",
      name: "",
      age: 0,
      email: "",
    });
    alert("User Details Updated");
  };

  return userFound ? (
    <div>
      <div className="header-container">
        <h2 className="header">Update User</h2>
      </div>
      <div className="form-container">
        <div className="form-card">
          <label htmlFor="name">Name:</label>
          <input
            onChange={(e) => {
              setuserData({ ...userData, name: e.target.value });
            }}
            type="text"
            id="userName"
            name="name"
            value={userData.name}
          />
          <label htmlFor="age">Age:</label>
          <input
            onChange={(e) => {
              setuserData({ ...userData, age: e.target.value });
            }}
            type="number"
            name="age"
            id="UserAge"
            value={userData.age}
          ></input>
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            name="userEmail"
            value={userData.email}
            onChange={(e) => {
              setuserData({ ...userData, email: e.target.value });
            }}
          />
          <button onClick={updateClick}>Update</button>
        </div>
      </div>
    </div>
  ) : (
    <>
      <div className="header-container">
        <h2 className="header">Find User with ID to be Updated</h2>
      </div>
      <div className="form-container">
        <div className="form-card">
          <label htmlFor="userId">Enter User ID: </label>
          <input
            type="text"
            name="userId"
            onChange={(e) => setUserId(e.target.value)}
          />
          <button onClick={handleFind}>Find</button>
        </div>
      </div>
    </>
  );
};

export default CreateUser;
