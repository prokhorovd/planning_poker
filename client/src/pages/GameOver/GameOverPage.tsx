import React, { FC } from 'react';
import {
  StyledGameOverPage,
  StyledGameOverPageHeading,
  StyledLink,
} from './styled';
import { useNavigate } from 'react-router-dom';

const GameOverPage: FC = () => {
  const navigate = useNavigate();
  return (
    <StyledGameOverPage>
      <StyledGameOverPageHeading>Room was closed</StyledGameOverPageHeading>
      <div>Room admin has left the room</div>
      <StyledLink
        to="/"
        onClick={() => {
          navigate('/', { replace: true });
        }}
      >
        Go to the main page
      </StyledLink>
    </StyledGameOverPage>
  );
};

export default GameOverPage;
