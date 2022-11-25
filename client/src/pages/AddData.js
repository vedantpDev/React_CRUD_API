import React, { useState } from "react";
import { Modal, Form, Button } from "react-bootstrap";
import axios from "axios";

const AddData = (props) => {
  const [insertData, setInsertData] = useState({
    name: "",
    email: "",
    phone: "",
  });

  const handleSave = () => {
    axios
      .post("/post", insertData)
      .then((res) => {
        props.setGetdata([
          ...props.getdata,
          { ...insertData, id: res.data.data.insertId },
        ]);
      })
      .catch((err) => console.log(err));
    props.handleClose();
  };

  const insertDataCh = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setInsertData({ ...insertData, [name]: value });
  };
  return (
    <div>
      <Modal show={props.show} onHide={props.handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Insert New Data</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group className="mb-3">
              <Form.Label>Name</Form.Label>
              <Form.Control
                type="name"
                name="name"
                onChange={insertDataCh}
                placeholder="Enter Name"
              />
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label>Email address</Form.Label>
              <Form.Control
                type="email"
                name="email"
                onChange={insertDataCh}
                placeholder="Enter email"
              />
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label>Phone</Form.Label>
              <Form.Control
                type="number"
                name="phone"
                onChange={insertDataCh}
                placeholder="Phone No."
              />
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="danger" onClick={props.handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleSave}>
            Save
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};

export default AddData;
