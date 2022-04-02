import React, { FC } from 'react';
import IconPicker from '../../components/IconPicker/IconPicker';
import CreateRoomForm from '../../components/CreateRoomForm/CreateRoomForm';
import {
  StyledCreatePage,
  StyledCreatePageHeading,
  StyledCreatePageLink,
} from './styled';
import store from '../../stores/store';

const CreateRoomPage: FC = () => {
  const socket = store.socket;
  socket.connect();
  return (
    <StyledCreatePage>
      <StyledCreatePageHeading>Create room</StyledCreatePageHeading>
      <IconPicker />
      <CreateRoomForm />
      <StyledCreatePageLink to="/join">
        Join to the existing room
      </StyledCreatePageLink>
    </StyledCreatePage>
  );
};

export default CreateRoomPage;
