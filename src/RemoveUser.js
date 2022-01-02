import React from "react";
import { Modal, ModalBody, ModalHeader, ModalFooter, Form,Label,Input,Button ,FormGroup} from "reactstrap";

const RemoveUser=({onOpen,removeParentCallBack})=>{
    const handleModalClose = () => {
       removeParentCallBack(false);
      };
    return(
        <div>
           <Modal
        isOpen={onOpen}
        //  onRequestClose={() => setAddModal(false)}
      >
           <ModalHeader toggle={function noRefCheck() {}}>Remove User</ModalHeader>
           <ModalBody>
              <Form>
              <FormGroup>
              <Label for="exampleEmail">UserId</Label>
              <Input
                // id="exampleEmail"
                name="email"
                placeholder="with a placeholder"
                type="email"
              />
            </FormGroup>
              </Form>
            </ModalBody>
            <ModalFooter>
          <Button color="primary" onClick={function noRefCheck() {}}>
            Submit
          </Button>{" "}
          <Button onClick={handleModalClose} >Close</Button>
        </ModalFooter>
          </Modal>
        </div>
    )
}
export default RemoveUser