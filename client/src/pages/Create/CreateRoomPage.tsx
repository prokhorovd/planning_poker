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
  return (
    <StyledCreatePage>
      <StyledCreatePageHeading>Create room</StyledCreatePageHeading>
      <IconPicker />
      <CreateRoomForm />
      <StyledCreatePageLink to="/join">
        Join to the existing room
      </StyledCreatePageLink>
      {/* remove development block below on production */}
      <div
        style={{
          marginTop: '80px',
          display: 'flex',
          flexDirection: 'column',
          color: 'gray',
        }}
      >
        <p>development info:</p>
        {`gameState: ${store.gameState}`}
        <StyledCreatePageLink to="/join?roomId=sdUGShS_2p">
          Invite link to Join Room with id:sdUGShS_2p
        </StyledCreatePageLink>
      </div>
    </StyledCreatePage>
  );
};

export default CreateRoomPage;
