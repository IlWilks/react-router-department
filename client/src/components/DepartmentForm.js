import { Form } from "semantic-ui-react";
import { useState } from "react";

export default (props) => {
  const [name, setName] = useState("");
  const handleSubmit = () => {
    props.addDepartment({ name });
    setName("");
  };
  return (
    <Form onSubmit={handleSubmit}>
      <Form.Input
        required
        label={"Department"}
        value={name}
        placeholder="Type Department Name here"
        onChange={(e) => {
          setName(e.target.value);
        }}
      />
      <Form.Button type="submit">Add Department</Form.Button>
    </Form>
  );
};
