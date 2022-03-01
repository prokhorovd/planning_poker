import styled from 'styled-components';
import { IconButton } from '@mui/material';
import ArrowRightAltIcon from '@mui/icons-material/ArrowRightAlt';
import {
  ERROR_COLOR,
  SUBMIT_BUTTON_BACKGROUND,
  SUBMIT_BUTTON_BACKGROUND_HOVER,
  SUBMIT_BUTTON_ICON,
} from '../../utils/constants/colors';

export const StyledSubmitButton = styled(IconButton)`
  background-color: ${SUBMIT_BUTTON_BACKGROUND};
  margin-top: 20px;
  width: 60px;
  height: 60px;
  align-self: center;

  :hover {
    background-color: ${SUBMIT_BUTTON_BACKGROUND_HOVER};
`;

export const StyledSubmitButtonIcon = styled(ArrowRightAltIcon)`
  color: ${SUBMIT_BUTTON_ICON};
`;

export const StyledCreateRoomForm = styled.form`
  display: flex;
  flex-direction: column;
  width: 200px;
`;

export const StyledCreateRoomFormError = styled.div`
  font-size: 11px;
  color: ${ERROR_COLOR};
`;
