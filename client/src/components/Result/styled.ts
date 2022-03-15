import styled from 'styled-components';
import { IconButton } from '@mui/material';
import {
  BUTTON_HOVER_COLOR,
  RESTART_BUTTON_BACKGROUND_COLOR,
  RESTART_BUTTON_ICON_COLOR,
  SAVE_BUTTON_BACKGROUND_COLOR,
  SAVE_BUTTON_ICON_COLOR,
} from '../../utils/constants/colors';
import DeleteOutline from '@mui/icons-material/DeleteOutline';
import Save from '@mui/icons-material/Save';

export const StyledResult = styled('div')`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const StyledRestartButton = styled(IconButton)`
  background-color: ${RESTART_BUTTON_BACKGROUND_COLOR};
  border-radius: 15px;
  width: 40px;
  height: 40px;
  align-self: center;

  :hover {
    background-color: ${BUTTON_HOVER_COLOR};
`;

export const StyledRestartButtonIcon = styled(DeleteOutline)`
  color: ${RESTART_BUTTON_ICON_COLOR};
`;

export const StyledSaveButton = styled(IconButton)`
  background-color: ${SAVE_BUTTON_BACKGROUND_COLOR};
  border-radius: 15px;
  width: 40px;
  height: 40px;
  align-self: center;

  :hover {
    background-color: ${BUTTON_HOVER_COLOR};
`;

export const StyledSaveButtonIcon = styled(Save)`
  color: ${SAVE_BUTTON_ICON_COLOR};
`;

export const StyledButtonsWrapper = styled('div')`
  width: 90px;
  display: flex;
  justify-content: space-between;
`;
