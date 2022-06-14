import { useState } from 'react';
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import Main from './layouts/Main';
import { routes } from './routes';

function App() {
  const[a, setA] = useState(false)
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={ <Main /> } >
          {routes.map((item,index)=><Route key={index} path={item.path} element={item.element} />)}
        </Route>
        <Route
          path="*"
          element={a? <Navigate to="/" replace /> :null}
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
