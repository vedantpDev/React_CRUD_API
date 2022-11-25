import axios from "axios";
import React, { useState } from "react";
import { Modal, Form, Button } from "react-bootstrap";

const UpdateData = (props) => {
  const handleUpdate = () => {
    axios
      .put(`/update/${props.obj.id}`, props.obj)
      .then((res) => {
        let index = props.getdata.findIndex((obj) => obj.id === props.obj.id);
        props.getdata[index] = { ...props.obj };
        props.setGetdata([...props.getdata]);
      })
      .catch((err) => console.log(err));
    props.handleCloseUpdate();
  };

  const UpdateDataCh = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    props.setObj({ ...props.obj, [name]: value });
  };

  return (
    <div>
      <Modal show={props.showUpdate} onHide={props.handleCloseUpdate}>
        <Modal.Header closeButton>
          <Modal.Title>Update New Data</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group className="mb-3">
              <Form.Label>Name</Form.Label>
              <Form.Control
                type="name"
                value={props.obj.name}
                name="name"
                onChange={UpdateDataCh}
                placeholder="Enter Name"
              />
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label>Email address</Form.Label>
              <Form.Control
                type="email"
                value={props.obj.email}
                name="email"
                onChange={UpdateDataCh}
                placeholder="Enter email"
              />
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label>Phone</Form.Label>
              <Form.Control
                type="number"
                value={props.obj.phone}
                name="phone"
                onChange={UpdateDataCh}
                placeholder="Phone No."
              />
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="danger" onClick={props.handleCloseUpdate}>
            Close
          </Button>
          <Button variant="primary" onClick={handleUpdate}>
            Save
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};

export default UpdateData;
