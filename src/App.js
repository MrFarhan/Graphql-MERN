import 'semantic-ui-css/semantic.min.css'
import './App.css';
import { BrowserRouter as Router, Route } from "react-router-dom"
import { Home } from './Pages/Home';
import { Login } from './Pages/Login';
import { Register } from './Pages/Register';
import MenuBar from './Components/MenuBar';
import { Container } from 'semantic-ui-react';


function App() {
  return (
    <Container>
      <MenuBar />
      <Router>
        {/* <Switch> */}
        <Route exact path="/" component={Home} />
        <Route exact path="/login" component={Login} />
        <Route exact path="/register" component={Register} />
        {/* </Switch> */}
      </Router>
    </Container>

  );
}

export default App;
