import { useState } from "react"
import { Button, Card, Form } from "semantic-ui-react"

export default (props) => {
  const [name, setName] = useState("")
  const [price, setPrice] = useState("")
  const [showForm, setShowForm] = useState(false)
  const handleEditItem = () => {
    let updatedItem = {
      name: name,
      price: price
    }
    props.editItem(props.id, updatedItem)
    setShowForm(false)
  }

  const renderForm = () => {
    setShowForm(!showForm)
  }
  return (
    <Card>
      <Card.Content>
        <Card.Header>Name: {props.name}</Card.Header>
        <Card.Meta>Price: ${props.price}</Card.Meta>
        <Card.Description>
          {showForm &&
            <Form onSubmit={handleEditItem}>
              <Form.Input value={name} onChange={(e) => setName(e.target.value)}/>
              <Form.Input value={price} onChange={(e) => setPrice(e.target.value)}/>
              <Form.Button>Edit</Form.Button>
            </Form>
          }
        </Card.Description>
      </Card.Content>
      <Card.Content extra>
        <div className='ui two buttons'>
          <Button basic color='green' onClick={()=>renderForm()}>
            Edit
          </Button>
          <Button basic color='red' onClick={()=>props.deleteItem(props.id)}>
            Delete
          </Button>
        </div>
      </Card.Content>
    </Card>
  )
}