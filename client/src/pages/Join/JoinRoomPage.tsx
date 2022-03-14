import React, { FC } from 'react';
import IconPicker from '../../components/IconPicker/IconPicker';
import {
  StyledJoinPage,
  StyledJoinPageHeading,
  StyledJoinPageLink,
} from './styled';
import JoinRoomForm from '../../components/JoinRoomForm/JoinRoomForm';

const JoinRoomPage: FC = () => {
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
