import { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const DeleteUser = ({ onDeleteUser, findUser }) => {
  const [userId, setUserId] = useState("");

  const handleDelete = () => {
    const resultentUser = findUser(userId);
    if (resultentUser != null) {
      onDeleteUser(userId);
      setUserId("");
      toast.success("User Deleted!!", {
        position: toast.POSITION.TOP_RIGHT,
      });
    } else
      toast.error("User not Found!!", {
        position: toast.POSITION.TOP_RIGHT,
      });
  };
  return (
    <>
      <ToastContainer />
      <div className="header-container">
        <h2 className="header">Find User with ID to be Deleted</h2>
      </div>
      <div className="form-container">
        <div className="form-card">
          <label htmlFor="userId">Enter User ID: </label>
          <input
            type="text"
            name="userId"
            value={userId}
            onChange={(e) => setUserId(e.target.value)}
          />
          <button onClick={handleDelete}>Delete</button>
        </div>
      </div>
    </>
  );
};

export default DeleteUser;
