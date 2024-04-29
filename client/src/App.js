// client/src/App.js

import React from 'react';
import { BrowserRouter as Router, Route, Routes} from 'react-router-dom';
// import Navbar from './components/Navbar';
import Home from './components/Home';
// import Login from './components/Auth/Login';
// import Register from './components/Auth/Register';

function App() {
  return (
    <Router>
      
      <div className="App">
        {/* <Navbar /> */}
        {/* <Switch> */}
        <Routes>
          <Route exact path="/" element={<Home />} />
         
          {/* <Route path="/login" component={Login} /> */}
          {/* <Route path="/register" component={Register} /> */}
        {/* </Switch> */}
        </Routes>
      </div>
      
    </Router>
  );
}

export default App;
