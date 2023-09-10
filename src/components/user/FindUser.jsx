import { useState } from "react";
import "../../App.css";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const FindUser = ({ findUser }) => {
  const [userData, setUserData] = useState({
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
      setUserData({
        id: resultentUser.id,
        name: resultentUser.name,
        age: resultentUser.age,
        email: resultentUser.email,
      });
    } else
      toast.error("User not Found!!", {
        position: toast.POSITION.TOP_RIGHT,
      });
  };

  return userFound ? (
    <div className="user-card">
      <h3>ID: {userData.id}</h3>
      <h3>Name: {userData.name}</h3>
      <h3>Age: {userData.age}</h3>
      <h3>Email: {userData.email}</h3>
    </div>
  ) : (
    <>
      <ToastContainer />
      <div className="header-container">
        <h2 className="header">Find User with ID</h2>
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

export default FindUser;
