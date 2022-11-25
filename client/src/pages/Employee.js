import React, { useState, useEffect } from "react";
import { Table, Button } from "react-bootstrap";
import axios from "axios";
import "../css/Employee.css";
import AddData from "./AddData";
import UpdateData from "./UpdateData";

const Employee = () => {
  const [getdata, setGetdata] = useState([]);

  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const [obj, setObj] = useState({
    id: "",
    name: "",
    email: "",
    phone: "",
  });

  const [showUpdate, setShowUpdate] = useState(false);
  const handleCloseUpdate = () => setShowUpdate(false);
  const handleShowUpdate = (id) => {
    setShowUpdate(true);
    let filterObj = getdata.filter((obj) => obj.id === id);
    setObj(filterObj[0]);
  };

  useEffect(() => {
    axios
      .get("/get")
      .then((res) => {
        setGetdata(res.data.data);
      })
      .catch((err) => console.log(err));
  }, []);

  const deleteData = (id) => {
    axios.delete(`/delete/${id}`).then((res) => {
      let filterData = getdata.filter((obj) => obj.id !== id);
      setGetdata(filterData);
    });
  };

  return (
    <div>
      <div className="btn-div">
        <Button className="float-end" variant="primary" onClick={handleShow}>
          Add
        </Button>
      </div>

      <Table striped bordered hover variant="dark">
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Email</th>
            <th>Phone No.</th>
            <th></th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {Array.from(getdata).map((data, id) => {
            return (
              <tr key={id}>
                <td>{data.id}</td>
                <td>{data.name}</td>
                <td>{data.email}</td>
                <td>{data.phone}</td>
                <td>
                  <Button
                    variant="outline-primary"
                    onClick={(e) => handleShowUpdate(data.id, e)}
                  >
                    Update Data
                  </Button>
                </td>
                <td>
                  <Button
                    variant="danger"
                    onClick={(e) => deleteData(data.id, e)}
                  >
                    Delete Data
                  </Button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </Table>
      <AddData
        show={show}
        handleClose={handleClose}
        setGetdata={setGetdata}
        getdata={getdata}
      />
      <UpdateData
        showUpdate={showUpdate}
        handleCloseUpdate={handleCloseUpdate}
        setGetdata={setGetdata}
        getdata={getdata}
        handleShowUpdate={handleShowUpdate}
        obj={obj}
        setObj={setObj}
      />
    </div>
  );
};

export default Employee;
