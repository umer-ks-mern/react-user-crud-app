import { useState } from "react";

const DeleteUser = ({ onDeleteUser, findUser }) => {
  const [userId, setUserId] = useState("");
  const [userFound, setUserFound] = useState(false);

  const handleDelete = () => {
    const resultentUser = findUser(userId);
    if (resultentUser != null) {
      onDeleteUser(userId);
      setUserFound(!userFound);
      alert("User Deteled!");
    } else alert("User Not Found");
  };
  return userFound ? (
    <div>User Deleted!</div>
  ) : (
    <>
      <div className="header-container">
        <h2 className="header">Find User with ID to be Deleted</h2>
      </div>
      <div className="form-container">
        <div className="form-card">
          <label htmlFor="userId">Enter User ID: </label>
          <input
            type="text"
            name="userId"
            onChange={(e) => setUserId(e.target.value)}
          />
          <button onClick={handleDelete}>Delete</button>
        </div>
      </div>
    </>
  );
};

export default DeleteUser;
