import { Button, Card, Form } from "semantic-ui-react";
import { useState } from "react";

export default ({ name: initName, id, editDepartment, deleteDepartment }) => {
  const [showForm, setShowForm] = useState(false);
  const [name, setName] = useState(initName);

  const handleEditDepartment = () => {
    editDepartment(id, {name});
    setShowForm(false);
  };

  const renderBody = () => {
    return (
      <>
        <span>
          <Button onClick={() => setShowForm(true)}>Update Department</Button>
        </span>
        <span>
          <Button onClick={() => deleteDepartment(id)}>Delete Department</Button> 
        </span>
      </>
    );
  };

  const renderForm = () => {
    return (
      <Form onSubmit={handleEditDepartment}>
        <Form.Input required value={name} onChange={(e) => setName(e.target.value)} />
        <Form.Button>Submit</Form.Button>
        <Button onClick={() => setShowForm(false)}>Cancel</Button>
      </Form>
    );
  };

  return (
    <>
      <Card.Description>
        {showForm ? renderForm() : renderBody()}
      </Card.Description>
    </>
  );
};

