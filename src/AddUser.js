import React, { useState } from "react";
import { Container } from "reactstrap";
import { Form, FormGroup } from "reactstrap";
import { Button } from "reactstrap";
import { Label, Input } from "reactstrap";
import { Link } from "react-router-dom";
import { Modal, ModalBody, ModalHeader, ModalFooter } from "reactstrap";

const AddUser = ({ onOpen, parentCallBack, addUserCallback, userArray }) => {
  const [userid, setUserId] = useState();

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [address, setAddress] = useState("");
  const [date, setDate] = useState("");
  const handleSubmit = () => {
    const data = {
      name,
      email,
      address,
      date,
      userid,
    };
    addUserCallback(data);
    parentCallBack(false);
  };
  const handleModalClose = () => {
    parentCallBack(false);
  };
  return (
    <div>
      <Modal isOpen={onOpen}>
        <ModalHeader>Add User</ModalHeader>
        <ModalBody>
          <Form>
            <FormGroup>
              <Label>UserId</Label>
              <Input
                name="userId"
                placeholder="userid"
                type="number"
                onChange={(e) => setUserId(e.target.value)}
              />
            </FormGroup>
            <FormGroup>
              <Label>Username</Label>
              <Input
                name="Username"
                placeholder="Username"
                type="username"
                onChange={(e) => setName(e.target.value)}
              />
            </FormGroup>
            <FormGroup>
              <Label>Email</Label>
              <Input
                id="Email"
                name="email"
                placeholder="Email"
                type="email"
                onChange={(e) => setEmail(e.target.value)}
              />
            </FormGroup>
            <FormGroup>
              <Label for="address">Address</Label>
              <Input
                id="address"
                name="text"
                type="textarea"
                onChange={(e) => setAddress(e.target.value)}
              />
            </FormGroup>
            <FormGroup>
              <Label for="examplePassword">JoiningDate</Label>
              <Input
                name="date"
                placeholder="Joining date"
                type="date"
                onChange={(e) => setDate(e.target.value)}
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
    </div>
  );
};
export default AddUser;
