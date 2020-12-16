import Axios from "axios";
import {Button, Form, Header} from "semantic-ui-react";
import {useState, useEffect} from "react";
import {Link} from 'react-router-dom';
import DepartmentForm from "../components/DepartmentForm";
import SpinnerBasic from "../components/SpinnerBasic";

let dummyDepartment = {
  name: "test",
}
let dummyItem = {
  name: "test",
  price: 100,
}


export default () => {
  const [departments, setDepartments] = useState([])
  const [loading, setLoading] = useState(true)
  const [showForm, setShowForm] = useState(false)
  const [name, setName] = useState('')


  useEffect(()=> {
    readDepartments();
  }, [])

  const readDepartments = async () => {
    try {
      let res = await Axios.get("/api/departments")
      setDepartments(res.data)
      setLoading(false)
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

  if (loading) {
    return <SpinnerBasic/>
  }
  return (
    <>
    <Header>Departments</Header>
    <DepartmentForm addDepartment={createDepartment}/>
    {departments.map((d) => (
      <>
        <br/>
        <Link to={`/itemAPI/${d.id}`}>
          <h1>{d.name}</h1>
        </Link>
        {showForm &&
            <Form onSubmit={() => (setShowForm(false), updateDepartment(d.id, {name}))}>
              <Form.Input value={name} onChange={(e) => setName(e.target.value)} />
              <Form.Button>Edit</Form.Button>
            </Form>
        }
        <Button onClick={() => setShowForm(!showForm)}>Update Department</Button>
        <Button onClick={() => deleteDepartment(d.id)}>Delete Department</Button>
      </>
    ))}
    </>
  )
} 