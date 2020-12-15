import './App.css';
import { Container } from 'semantic-ui-react';
import { Route, Switch } from 'react-router-dom';
import Home from './demo/Home';
import NoMatch from './components/NoMatch';
import Navbar from './components/Navbar';
import DepartmentAPI from './DepartmentStore/DepartmentAPI';
import ItemAPI from './DepartmentStore/ItemAPI';

function App() {
  return (
    <>
    <Navbar />
    <Container>
      <Switch>
      <Route exact path= "/" component={Home}/>
      <Route exact path= "/departments" component={DepartmentAPI}/>
      <Route exact path= "/itemAPI/:departmentId" component={ItemAPI}/>
      <Route component={NoMatch}/>
      </Switch>
    </Container>
    </>
  );
}

export default App;
