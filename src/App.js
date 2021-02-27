import './App.css';
import {Container} from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css';

import Header from './Components/Header';
import Upload from './Components/Upload';
import SignIn from './Components/SignIn';
import Footer from './Components/Footer';
import Display from './Components/Display';
import { useState } from 'react';

function App() {
  const[text, setText] = useState('');
  return (
    <div className="App">
      <Header setText={setText}/>
      <Container className="container">
          <Upload/>
          <Display text={text}/>
      </Container>
      <Footer/>
    </div>
  );
}

export default App;
