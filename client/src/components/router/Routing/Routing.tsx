import React, { FC } from 'react';
import { Route, Routes } from 'react-router-dom';
import App from '../../../App';
import CreatePage from '../../../pages/Create/CreatePage';
import JoinPage from '../../../pages/Join/JoinPage';
import NotFoundPage from '../../../pages/NotFoundPage/NotFoundPage';

const Routing: FC = () => {
  return (
    <Routes>
      <Route path="/" element={<App />}>
        <Route index element={<CreatePage />} />
        <Route path="join/" element={<JoinPage />} />
      </Route>
      <Route path="*" element={<NotFoundPage />} />
    </Routes>
  );
};

export default Routing;
