import React from "react";
import { Link } from "react-router-dom";
import { Container, Table } from "reactstrap";
import { Button } from "reactstrap";
import styles from "./styles.css";
import AddUser from "./AddUser";
import { Form, FormGroup } from "reactstrap";
import { Label, Input } from "reactstrap";
import { Modal, ModalBody, ModalHeader, ModalFooter } from "reactstrap";
import RemoveUser  from "./RemoveUser";

const HomePage = () => {
  const [addModal, setAddModal] = React.useState(false);
  const [removeModal,setRemoveModal] =React.useState(false)
  const [users,setUsers]=React.useState([])

  const parentCallBack=(childData)=>{
    setAddModal(childData)
  }

  const removeParentCallBack=(removeChildData)=>{
    setRemoveModal(removeChildData)
  }
  const addUserdata=()=>{

  }
  const handleRemoveUser = () => {};
  return (
    <div>
      <div className="outer">
        <div className="inner">
          <Button type="submit" class="msgBtn" onClick={() => setAddModal(true)}>
            AddUser
          </Button>
          {addModal && <AddUser onOpen={addModal} parentCallBack={parentCallBack} addUserdata={addUserdata} />}
          
        </div>
        <div className="inner">
          <Button type="submit" className="msgBtn2" onClick={()=>setRemoveModal(true)}>
            Remove User
          </Button>
          {removeModal &&  <RemoveUser onOpen={removeModal} removeParentCallBack={removeParentCallBack}/>}
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
            <tr>
              <th scope="row">1</th>
              <td>Mark</td>
              <td>Otto</td>
              <td>@mdo</td>
            </tr>
            <tr>
              <th scope="row">2</th>
              <td>Jacob</td>
              <td>Thornton</td>
              <td>@fat</td>
            </tr>
            <tr>
              <th scope="row">3</th>
              <td>Larry</td>
              <td>the Bird</td>
              <td>@twitter</td>
            </tr>
          </tbody>
        </Table>
      </Container>
    </div>
  );
};
export default HomePage;
