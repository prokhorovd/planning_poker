import styled from 'styled-components';
import { IconButton } from '@mui/material';
import {
  peppermint,
  pomegranate15,
  pomegranate,
  silverChalice15,
  black,
} from '../../utils/constants/colors';
import DeleteOutline from '@mui/icons-material/DeleteOutline';
import Save from '@mui/icons-material/Save';

export const StyledResult = styled('div')`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const StyledRestartButton = styled(IconButton)`
  background-color: ${pomegranate15};
  border-radius: 15px;
  width: 40px;
  height: 40px;
  align-self: center;

  :hover {
    background-color: ${peppermint};
`;

export const StyledRestartButtonIcon = styled(DeleteOutline)`
  color: ${pomegranate};
`;

export const StyledSaveButton = styled(IconButton)`
  background-color: ${silverChalice15};
  border-radius: 15px;
  width: 40px;
  height: 40px;
  align-self: center;

  :hover {
    background-color: ${peppermint};
`;

export const StyledSaveButtonIcon = styled(Save)`
  color: ${black};
`;

export const StyledButtonsWrapper = styled('div')`
  width: 90px;
  display: flex;
  justify-content: space-between;
`;
