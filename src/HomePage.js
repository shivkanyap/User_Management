import React from "react";
import { Link } from "react-router-dom";
import { Container, Table } from "reactstrap";
import { Button } from "reactstrap";
import styles from "./styles.css";
import AddUser from "./AddUser";
import RemoveUser from "./RemoveUser";

const HomePage = () => {
  const [addModal, setAddModal] = React.useState(false);
  const [removeModal, setRemoveModal] = React.useState(false);
  const value = 0;

  const [users, setUsers] = React.useState([]);

  console.log(users, "users");
  const addUserCallBack = (childData) => {
    // childData.id = users.length + 1;
    setUsers([...users, childData]);
  };

  const removeUserCallBack = (childData) => {
    let array = [...users];

    let filteredData = array.filter((item) => item.userid !== childData);

    setUsers(filteredData);
  };

  const parentCallBack = (childData) => {
    setAddModal(childData, "Cd");
  };

  const removeParentCallBack = (removeChildData) => {
    setRemoveModal(removeChildData);
  };

  return (
    <div>
      <div className="outer">
        <div className="inner">
          <Button
            type="submit"
            class="msgBtn"
            onClick={() => setAddModal(true)}
          >
            AddUser
          </Button>
          {addModal && (
            <AddUser
              onOpen={addModal}
              parentCallBack={parentCallBack}
              addUserCallback={addUserCallBack}
            />
          )}
        </div>
        <div className="inner">
          <Button
            type="submit"
            className="msgBtn2"
            onClick={() => setRemoveModal(true)}
          >
            Remove User
          </Button>
          {removeModal && (
            <RemoveUser
              onOpen={removeModal}
              removeParentCallBack={removeParentCallBack}
              removeUserCallBack={removeUserCallBack}
            />
          )}
        </div>
      </div>
      <Container className="bg-light border">
        <Table bordered align="center">
          <thead>
            <tr>
              <th>UserId</th>
              <th>Name</th>
              <th>Email</th>
              <th>Address</th>
              <th>Joining Date</th>
            </tr>
          </thead>
          <tbody>
            {users &&
              users.map((item, index) => (
                <tr>
                  <td>{item.userid}</td>
                  <td>{item.name}</td>
                  <td>{item.email}</td>
                  <td>{item.address}</td>
                  <td>{item.date}</td>
                </tr>
              ))}
          </tbody>
        </Table>
      </Container>
    </div>
  );
};
export default HomePage;
