import React, { FC } from 'react';
import { Route, Routes, useSearchParams } from 'react-router-dom';
import App from '../../../App';
import CreateRoomPage from '../../../pages/Create/CreateRoomPage';
import JoinRoomPage from '../../../pages/Join/JoinRoomPage';
import NotFoundPage from '../../../pages/NotFoundPage/NotFoundPage';
import Lobby from '../../../pages/Lobby/Lobby';

const Routing: FC = () => {
  let [searchParams] = useSearchParams();
  const roomId = String(searchParams.get('id'));
  return (
    <Routes>
      <Route path="/" element={<App />}>
        <Route index element={<CreateRoomPage />} />
        <Route path="join/" element={<JoinRoomPage />} />
        <Route path="room/" element={<Lobby roomId={roomId} />} />
      </Route>
      <Route path="*" element={<NotFoundPage />} />
    </Routes>
  );
};

export default Routing;
