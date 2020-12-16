import Axios from "axios";
import {Button, Card, Header} from "semantic-ui-react";
import {useParams} from "react-router-dom"
import {Link} from 'react-router-dom';
import { useAxiosOnMount } from "../Hooks/AxiosCallHooks";
import Item from "./Item";
import ItemForm from "../components/ItemForm";
import SpinnerBasic from "../components/SpinnerBasic";

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

  const [items, itemsLoading, setItems] = useAxiosOnMount(`/api/departments/${departmentId}/items`)

  
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
      setItems([...items,item])
      let res = await Axios.post(
        `/api/departments/${departmentId}/items/`,
        item);
    }catch (err) {}
  };
  const updateItem = async (id, item) => {
    try {
      let res = await Axios.put(`/api/departments/${departmentId}/items/${id}`, item)
      let newItem = items.map((i) => (i.id !== id ? i : res.data));
      setItems(newItem);
    } catch (err) {
      console.log(err)
    }
  };
  const deleteItem = async (id) => {
    try {
      let res = await Axios.delete(`/api/departments/${departmentId}/items/${id}`);
      console.log(res.data);
      let newItems = items.filter((i) => i.id !== res.data.id);
      setItems(newItems);
    }catch (err) {}
  };

  if (itemsLoading) {
    return <SpinnerBasic/>
  }

  return (
    <>
      <Header>Items</Header>
      <ItemForm addItem={createItem}/>
      {items && 
        <Card.Group>
          {items.map(i=> <Item key={i.id} {...i}
                                deleteItem={deleteItem}
                                editItem={updateItem}/>)}
        </Card.Group>
      }
    </>
  )
}