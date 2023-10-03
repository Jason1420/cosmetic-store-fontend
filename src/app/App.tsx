import React from 'react';
import './App.scss';
import MainPage from './MainPage';
import { Route, Routes } from 'react-router-dom';
import { PagePath } from '../routes/Path';
import UploadItem from '../pages/upload_item/UploadItem';

const App = () => {
  return (
    <div className="App">
      <Routes>
        <Route path={PagePath.NEW_ITEM} element={<UploadItem />} ></Route>
        <Route path='*' element={< MainPage />}></Route >
      </Routes>
    </div>
  );
}

export default App;
