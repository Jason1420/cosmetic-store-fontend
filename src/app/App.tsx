import React from 'react';
import './App.scss';
import MainPage from './MainPage';
import { Route, Routes } from 'react-router-dom';
import { PagePath } from '../routes/Path';
import UploadItem from '../pages/upload_item/UploadItem';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import CustomScrollbars from '../components/CustomScrollbars/CustomScrollbars';

const App = () => {
  return (
    <div className="App">
      <CustomScrollbars style={{ height: "100vh" }}>
        <Routes>
          {/* <Route path={PagePath.UPLOAD} element={<UploadItem />} ></Route> */}
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
        theme="light"
      />
    </div>
  );
}

export default App;
