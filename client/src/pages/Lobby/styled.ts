import styled from 'styled-components';
import { IconButton } from '@mui/material';
import {
  black,
  scorpion,
  white,
  silverChalice,
} from '../../utils/constants/colors';
import PlayArrow from '@mui/icons-material/PlayArrow';

export const StyledLobby = styled('div')`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const StyledDescription = styled('div')`
  color: ${silverChalice};
`;

export const StyledStartGameButton = styled(IconButton)`
  background-color: ${black};
  margin-top: 20px;
  width: 60px;
  height: 60px;
  align-self: center;

  :hover {
    background-color: ${scorpion};
`;

export const StyledStartGameIcon = styled(PlayArrow)`
  color: ${white};
`;
