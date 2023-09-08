import "../../App.css";
import { Link, Outlet, Route, Routes } from "react-router-dom";
import { useEffect, useState } from "react";
import CreateUser from "../../components/user/CreateUser.jsx";
import UserList from "../../components/user/UserList";
import UpdateUser from "../../components/user/UpdateUser";
import FindUser from "../../components/user/FindUser";
import DeleteUser from "../../components/user/DeleteUser";

const navBar = [
  {
    name: "All Users",
    path: "users",
  },
  {
    name: "User Create",
    path: "user/create",
  },
  {
    name: "Find User",
    path: "user/find",
  },
  {
    name: "Update User",
    path: "user/update",
  },
  {
    name: "Delete User",
    path: "user/delete",
  },
];

const Layout = () => (
  <>
    <body>
      <div class="sidenav">
        {navBar.map((ele) => (
          <Link to={ele.path}>{ele.name}</Link>
        ))}
      </div>

      <div class="main">
        <Outlet />
      </div>
    </body>
  </>
);

const UserWrapper = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    const storedUsers = JSON.parse(localStorage.getItem("users"));
    if (storedUsers) {
      setUsers(storedUsers);
    }
  }, []);

  const addUser = (newUser) => {
    // Update the state with the newTodo
    const updatedUsers = [...users, newUser];
    setUsers(updatedUsers);

    // Save the updatedUsers to local storage
    localStorage.setItem("users", JSON.stringify(updatedUsers));
  };

  const deleteHistory = () => {
    localStorage.setItem("users", JSON.stringify([]));
    setUsers([]);
    alert("History Cleared!");
  };

  const deleteOne = (id) => {
    const indexToDelete = users.findIndex((user) => user.id === id);
    users.splice(indexToDelete, 1);
    const updatedUsers = [...users];
    localStorage.setItem("users", JSON.stringify(updatedUsers));
    setUsers(updatedUsers);
  };

  const findUser = (id) => {
    const indexToFind = users.findIndex((user) => user.id === id);
    if (indexToFind !== -1) return users[indexToFind];
    return null;
  };

  const updateUser = (userToBeUpdated) => {
    const indexToUpdate = users.findIndex(
      (user) => user.id === userToBeUpdated.id
    );

    if (indexToUpdate !== -1) {
      users[indexToUpdate] = userToBeUpdated;
      const updatedUsers = [...users];

      localStorage.setItem("users", JSON.stringify(updatedUsers));
      console.log(updatedUsers);
      setUsers(updatedUsers);
    }
  };

  const layoutRoutes = [
    {
      path: "/",
      element: (
        <>
          <div className="header-container">
            <h2 className="header">Welcome to User CRUD App</h2>
          </div>
          <div className="header-container">
            <button onClick={deleteHistory}>Delete Everythig</button>
          </div>
        </>
      ),
    },
    {
      path: "/users",
      element: <UserList users={users} />,
    },
    {
      path: "user/create",
      element: <CreateUser onCreateUser={addUser} />,
    },
    {
      path: "user/update",
      element: <UpdateUser onUpdateUser={updateUser} findUser={findUser} />,
    },
    {
      path: "user/find",
      element: <FindUser findUser={findUser} />,
    },
    {
      path: "user/delete",
      element: <DeleteUser onDeleteUser={deleteOne} findUser={findUser} />,
    },
  ];

  return (
    <Routes>
      <Route path="*" element={<h1>404</h1>} />

      <Route element={<Layout />}>
        {layoutRoutes.map((ele) => (
          <Route path={ele.path} element={ele.element} />
        ))}
      </Route>
    </Routes>
  );
};

export default UserWrapper;
