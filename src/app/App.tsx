import './App.scss';
import MainPage from './MainPage';
import { Route, Routes } from 'react-router-dom';
import { PagePath } from '../routes/Path';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import CustomScrollbars from '../components/CustomScrollbars/CustomScrollbars';
import Login from '../pages/login/Login';
import { useSelector } from 'react-redux';
import { RootState } from '../store/store';
import Payment from '../pages/payment/Payment';
import Register from '../pages/register/Register';

const App = () => {
  const isLogged = useSelector((state: RootState) => state.auth.logged)
  return (
    <div className="App">


      <CustomScrollbars style={{ height: "100vh" }}>
        <Routes>
          {!isLogged &&
            <>
              <Route path={PagePath.LOGIN} element={<Login />}></Route>
              <Route path={PagePath.REGISTER} element={<Register />}></Route></>}
          {/* Payment */}
          <Route path={PagePath.PAYMENT} element={<Payment />}></Route>
          <Route path='*' element={< MainPage />}></Route >
        </Routes>
      </CustomScrollbars>

      <ToastContainer
        position="top-right"
        autoClose={3000}
        hideProgressBar
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="colored"
      />
    </div>
  );
}

export default App;
