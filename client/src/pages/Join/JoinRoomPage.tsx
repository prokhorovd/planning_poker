import React, { FC } from 'react';
import IconPicker from '../../components/IconPicker/IconPicker';
import {
  StyledJoinPage,
  StyledJoinPageHeading,
  StyledJoinPageLink,
} from './styled';
import JoinRoomForm from '../../components/JoinRoomForm/JoinRoomForm';
import store from '../../stores/store';

const JoinRoomPage: FC = () => {
  const socket = store.socket;
  socket.connect();
  return (
    <StyledJoinPage>
      <StyledJoinPageHeading>Join room</StyledJoinPageHeading>
      <IconPicker />
      <JoinRoomForm />
      <StyledJoinPageLink to="/">Create the new room</StyledJoinPageLink>
    </StyledJoinPage>
  );
};

export default JoinRoomPage;
