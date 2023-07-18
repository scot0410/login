import './App.css';
import { useAuth0 } from "@auth0/auth0-react";
import { BrowserRouter as Router, Routes, Route} from "react-router-dom";
import { Container } from "reactstrap";
import Home from './home/Home';
import Profile from './profile/Profile';
import { createBrowserHistory } from 'history';
import Footer from './footer/Footer';
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
          <Routes>
            <Route path="/" exact element={<Home/>} />
            <Route path="/profile" element={<Profile/>} />
          </Routes>
        </Container>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
