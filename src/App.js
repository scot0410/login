import './App.css';
import { useAuth0 } from "@auth0/auth0-react";
import { BrowserRouter as Router, Routes, Route} from "react-router-dom";
import { Container } from "reactstrap";
import Profile from './profile/Profile';
import { createBrowserHistory } from 'history';
import Home from './blog/Home';
import Post from './posts/Post';
import Navbar from './blog/Navbar';
const history = createBrowserHistory();


const App = () => {

  const { isLoading, error } = useAuth0();

  if (error) {
    return <div>Oops... {error.message}</div>;
  }

  if (isLoading) {
    return "<Loading />";
  }
  return (
    <Router >
      <div id="app" >
        <Container >
        <Navbar title="Blog" />
          <Routes>
            <Route path="/" exact element={<Home/>} />
            <Route path="/post" element={<Post/>} />
          </Routes>
        </Container>
      </div>
    </Router>
  );
}

export default App;
