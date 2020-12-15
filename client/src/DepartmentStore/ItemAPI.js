import Axios from "axios";
import {Button, Header} from "semantic-ui-react";
import {useParams} from "react-router-dom"
import {Link} from 'react-router-dom';

let dummyItem = {
  name: "banana",
  price: 3.50,
};

let i = {
  name: "not a banana",
  price: 100,
};

export default () => {
  let { departmentId } = useParams();

  const readItems = async () => {
    try {
      let res = await Axios.get(`/api/departments/${departmentId}/items`)
      console.log(res.data)
    } catch (err) {
      console.log(err)
    }
  };
  
  const readItem = async (itemId) => {
    try{
      let res = await Axios.get(
        `/api/departments/${departmentId}/items/${itemId}`
      );
      console.log(res.data);
    } catch(err) {}
  };
  
  const createItem = async (item) => {
    try {
      let res = await Axios.post(
        `/api/departments/${departmentId}/items/`,
        item
        );
        console.log(res.data);
    }catch (err) {}
  };
  const updateItem = async (id, item) => {
    try {
      let res = await Axios.put(`/api/departments/${departmentId}/items/${id}`, item)
      console.log(res.data)
    } catch (err) {
      console.log(err)
    }
  };
  const deleteItem = async (id) => {
    try {
      let res = await Axios.delete(`/api/departments/${departmentId}/items/${id}`);
      console.log(res.data);
    }catch (err) {}
  };

  return (
    <>
      <Button onClick={readItems}>Read Items</Button>
      <Button onClick={() => readItem(7)}>Read Item 7</Button>
      <Button onClick={() => createItem(dummyItem)}>Create Item</Button>
      <Button onClick={() => updateItem(6, i)}>Update Item 6</Button>
      <Button onClick={() => deleteItem(8)}>Delete item 8</Button>
    </>
  )
}