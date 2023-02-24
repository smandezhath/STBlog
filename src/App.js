import React, {useEffect} from 'react';

import './App.css';
import NewPost from './components/NewPost';
import Register from './components/Register';
import Viewpost from './components/Viewpost';

function App() {
  return(
    <>
    <h1>hiii</h1>
        <Register></Register>
        <Viewpost id={"63edd604db82459d946f09a1"}/>
        
       <NewPost />
    </>
    
  );
}

export default App;
