import React, { useState } from "react";
import { Container } from "reactstrap";
import { Form, FormGroup } from "reactstrap";
import { Button } from "reactstrap";
import { Label, Input } from "reactstrap";
import { Link } from "react-router-dom";
import { Modal, ModalBody, ModalHeader, ModalFooter } from "reactstrap";

const AddUser = ({ onOpen ,parentCallBack,addUserCallback,userArray}) => {
  const [userData, setUserData] = useState([{}]);
  const [userid,setUserId]=useState()

  const [name,setName] = useState('')
  const [email,setEmail]=useState('')
  const [address,setAddress]=useState('')
  const [date,setDate]=useState('')
  const handleSubmit=()=>{
    
    const data={
      name,
      email,
      address,
      date,
      userid
    }
    addUserCallback(data)
    parentCallBack(false);
    console.log(data,'in data')
  }
  const handleModalClose = () => {
    parentCallBack(false);
  };
  return (
    <div>
      <Modal
        isOpen={onOpen}
        //  onRequestClose={() => setAddModal(false)}
      >
        <ModalHeader toggle={function noRefCheck() {}}>Add User</ModalHeader>
        <ModalBody>
          <Form>
          <FormGroup>
              <Label >UserId</Label>
              <Input
                // id="exampleEmail"
                name="userId"
                placeholder="userid"
                type="number"
                onChange={(e)=>setUserId(e.target.value)}
              />
            </FormGroup>
            <FormGroup>
              <Label >Username</Label>
              <Input
                // id="exampleEmail"
                name="Username"
                placeholder="Username"
                type="username"
                onChange={(e)=>setName(e.target.value)}
              />
            </FormGroup>
            <FormGroup>
              <Label >Email</Label>
              <Input
                id="Email"
                name="email"
                placeholder="Email"
                type="email"
                onChange={(e)=>setEmail(e.target.value)}
              />
            </FormGroup>
            <FormGroup>
              <Label for="address">Address</Label>
              <Input id="address" name="text" type="textarea"  onChange={(e)=>setAddress(e.target.value)}/>
            </FormGroup>
            <FormGroup>
              <Label for="examplePassword">JoiningDate</Label>
              <Input
                // id="examplePassword"
                name="date"
                placeholder="Joining date"
                type="date"
                onChange={(e)=>setDate(e.target.value)}
              />
            </FormGroup>
          </Form>
        </ModalBody>
        <ModalFooter>
          <Button color="primary" onClick={handleSubmit}>
            Submit
          </Button>{" "}
          <Button onClick={handleModalClose}>Close</Button>
        </ModalFooter>
      </Modal>
      {/* <Container>
      <Form>
        <FormGroup>
          <Label for="exampleEmail">Username</Label>
          <Input
            // id="exampleEmail"
            name="email"
            placeholder="with a placeholder"
            type="email"
          />
        </FormGroup>
        <FormGroup>
          <Label for="examplePassword">Email</Label>
          <Input
            id="examplePassword"
            name="password"
            placeholder="password placeholder"
            type="password"
          />
        </FormGroup>
        <FormGroup>
    <Label for="exampleText">
      Address
    </Label>
    <Input
      id="exampleText"
      name="text"
      type="textarea"
    />
    </FormGroup>
        <FormGroup>
          <Label for="examplePassword">JoiningDate</Label>
          <Input
            id="examplePassword"
            name="password"
            placeholder="password placeholder"
            type="password"
          />
        </FormGroup>

        <Button>Submit</Button>
        <Link to ="/"> <Button>Back</Button></Link>
        
      </Form>
      </Container> */}
    </div>
  );
};
export default AddUser;
