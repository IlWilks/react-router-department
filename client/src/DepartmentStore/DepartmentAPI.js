import Axios from "axios";
import {Button, Header} from "semantic-ui-react";
import {useState, useEffect} from "react";
import {Link} from 'react-router-dom';
import DepartmentForm from "../components/DepartmentForm";

let dummyDepartment = {
  name: "test",
}
let dummyItem = {
  name: "test",
  price: 100,
}


export default () => {
  const [departments, setDepartments] = useState([])


  useEffect(()=> {
    readDepartments();
  }, [])

  const readDepartments = async () => {
    try {
      let res = await Axios.get("/api/departments")
      setDepartments(res.data)
    } catch (err) {
      console.log(err)
    }
  }

  const readDepartment = async (id) => {
    try {
      let res = await Axios.get(`/api/departments/${id}`);
    } catch (err) {
      console.log(err);
    }
  }

  const createDepartment = async (department) => {
    try {
      let res = await Axios.post(`/api/departments`, department)
      setDepartments([...departments, department])
    } catch (err) {
      console.log(err);
    }
  }
  
  const updateDepartment = async (id, department) => {
    try {
      let res = await Axios.put(`/api/departments/${id}`, department);
      let newDepartment = departments.map((d) => (d.id !== id ? d : res.data));
      setDepartments(newDepartment);
    } catch (err) {
      console.log(err);
    }
  }

  const deleteDepartment = async (id) => {
    try {
      let res = await Axios.delete(`/api/departments/${id}`);
      let newDepartment = departments.filter((d) => d.id !== res.data.id);
      setDepartments(newDepartment);
    } catch (err) {
      console.log(err);
    }
  }

  return (
    <>
    <Header>Departments</Header>
    {/* <Button onClick={() => readDepartment(2)}>Read Department</Button> */}
    {/* <Button onClick={() => createDepartment(dummyDepartment)}>New Department</Button> */}
    {/* <Button onClick={() => deleteDepartment(5)}>Delete Department</Button> */}
    {/* <Button onClick={() => updateDepartment(1, dummyDepartment)}>Update Department</Button> */}
    <DepartmentForm addDepartment={createDepartment}/>
    {departments.map((d) => (
      <>
        <Link to={`/itemAPI/${d.id}`}>
          <p>{d.name}</p>
        </Link>
        <Button onClick={() => deleteDepartment(d.id)}>Delete Department</Button>
      </>
    ))}
    </>
  )
} 