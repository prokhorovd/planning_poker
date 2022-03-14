import React, { FC } from 'react';
import { Route, Routes } from 'react-router-dom';
import App from '../../../App';
import CreateRoomPage from '../../../pages/Create/CreateRoomPage';
import JoinRoomPage from '../../../pages/Join/JoinRoomPage';
import NotFoundPage from '../../../pages/NotFoundPage/NotFoundPage';

const Routing: FC = () => {
  return (
    <Routes>
      <Route path="/" element={<App />}>
        <Route index element={<CreateRoomPage />} />
        <Route path="join/" element={<JoinRoomPage />} />
      </Route>
      <Route path="*" element={<NotFoundPage />} />
    </Routes>
  );
};

export default Routing;
