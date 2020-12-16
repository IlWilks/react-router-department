import { Form } from "semantic-ui-react";
import { useState } from "react";

export default (props) => {
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");

  const handleSubmit = () => {
    props.addItem({ name, price });
    setName("");
    setPrice("")
  };
  return (
    <Form onSubmit={handleSubmit}>
      <Form.Input label={"name"}
                  value={name}
                  onChange={(e) => {
                    setName(e.target.value);
                  }}
                  />
      <Form.Input label={"price"}
                  value={price}
                  onChange={(e) => {
                    setPrice(e.target.value);
                  }}
                  />
      <Form.Button type="submit">Add Item</Form.Button>
    </Form>
  );
};
