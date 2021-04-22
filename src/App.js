import React, {Suspense} from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Routes from './routes';

const App = ()=>(
  <Suspense fallback={"Loading..."}>
    <Routes />
  </Suspense>
)

export default App;
