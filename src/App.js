import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './app.scss';
import Routes from './routes';
import store from './store';

function App() {

  return (
    <Provider store={ store }>
      <BrowserRouter>
        <Routes />
        <ToastContainer />
      </BrowserRouter>
    </Provider>
  );
}

export default App;
