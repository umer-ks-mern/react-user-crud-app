import "../../App.css";
const User = ({ id, name, age, email }) => {
  return (
    <>
      <div className="user-card">
        <h3>ID: {id}</h3>
        <h3>Name: {name}</h3>
        <h3>Age: {age}</h3>
        <h3>Email: {email}</h3>
      </div>
    </>
  );
};
export default User;
