import styled from 'styled-components';
import { IconButton } from '@mui/material';
import colors from '../../utils/constants/colors';
import PlayArrow from '@mui/icons-material/PlayArrow';

export const StyledLobby = styled('div')`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const StyledDescription = styled('div')`
  color: ${colors.silverChalice};
`;

export const StyledStartGameButton = styled(IconButton)`
  background-color: ${colors.black};
  margin-top: 20px;
  width: 60px;
  height: 60px;
  align-self: center;

  :hover {
    background-color: ${colors.scorpion};
`;

export const StyledStartGameIcon = styled(PlayArrow)`
  color: ${colors.white};
`;
