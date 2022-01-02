import React from "react";
import {
  Modal,
  ModalBody,
  ModalHeader,
  ModalFooter,
  Form,
  Label,
  Input,
  Button,
  FormGroup,
} from "reactstrap";

const RemoveUser = ({ onOpen, removeParentCallBack, removeUserCallBack }) => {
  const [id, setId] = React.useState();
  const handleModalClose = () => {
    removeParentCallBack(false);
  };

  const handleRemoveSubmit = () => {
    removeUserCallBack(id);
    removeParentCallBack(false);
  };
  return (
    <div>
      <Modal isOpen={onOpen}>
        <ModalHeader>Remove User</ModalHeader>
        <ModalBody>
          <Form>
            <FormGroup>
              <Label for="exampleEmail">UserId</Label>
              <Input
                // id="exampleEmail"
                name="id"
                placeholder="enter userid"
                type="number"
                onChange={(e) => setId(e.target.value)}
              />
            </FormGroup>
          </Form>
        </ModalBody>
        <ModalFooter>
          <Button color="primary" onClick={handleRemoveSubmit}>
            Submit
          </Button>{" "}
          <Button onClick={handleModalClose}>Close</Button>
        </ModalFooter>
      </Modal>
    </div>
  );
};
export default RemoveUser;
