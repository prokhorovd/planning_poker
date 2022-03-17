import styled from 'styled-components';
import { IconButton } from '@mui/material';
import ArrowRightAltIcon from '@mui/icons-material/ArrowRightAlt';
import {
  chestnutRose,
  black,
  scorpion,
  white,
} from '../../utils/constants/colors';

export const StyledSubmitButton = styled(IconButton)`
  background-color: ${black};
  margin-top: 20px;
  width: 60px;
  height: 60px;
  align-self: center;

  :hover {
    background-color: ${scorpion};
`;

export const StyledSubmitButtonIcon = styled(ArrowRightAltIcon)`
  color: ${white};
`;

export const StyledCreateRoomForm = styled.form`
  display: flex;
  flex-direction: column;
  width: 200px;
`;

export const StyledCreateRoomFormError = styled.div`
  font-size: 11px;
  color: ${chestnutRose};
`;
