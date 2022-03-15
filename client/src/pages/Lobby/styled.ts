import styled from 'styled-components';
import { IconButton } from '@mui/material';
import {
  SUBMIT_BUTTON_BACKGROUND,
  SUBMIT_BUTTON_BACKGROUND_HOVER,
  SUBMIT_BUTTON_ICON,
  DESCRIPTION_TEXT_COLOR,
} from '../../utils/constants/colors';
import PlayArrow from '@mui/icons-material/PlayArrow';

export const StyledLobby = styled('div')`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const StyledDescription = styled('div')`
  color: ${DESCRIPTION_TEXT_COLOR};
`;

export const StyledStartGameButton = styled(IconButton)`
  background-color: ${SUBMIT_BUTTON_BACKGROUND};
  margin-top: 20px;
  width: 60px;
  height: 60px;
  align-self: center;

  :hover {
    background-color: ${SUBMIT_BUTTON_BACKGROUND_HOVER};
`;

export const StyledStartGameIcon = styled(PlayArrow)`
  color: ${SUBMIT_BUTTON_ICON};
`;
