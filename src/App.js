
import './App.css';
import { BrowserRouter as Router, Route} from "react-router-dom";
import MyLogin from './components/login.component';
import "bootstrap/dist/css/bootstrap.min.css";
import './fontawesome-free-5.15.2-web/css/all.min.css';
import {Provider} from 'react-redux';
import PrivateRoute from './components/HOC/PrivateRoute'
//style
import './style/animate.css';
import './style/select2.min.css';
import './style/style.css';
import { Switch } from 'react-router-dom/cjs/react-router-dom.min';
import store from './store';
import HomeContainer from './container/home/home.container';



window.store = store;
function App() {
 
  return (
  <Provider store={store}>
      <Router>
      <Switch>
      <Route path="/login" component={MyLogin}/>
      <PrivateRoute path="/" component={HomeContainer}/>

      </Switch>
  
    </Router>
   </Provider>
    
  );}
   
export default App;
