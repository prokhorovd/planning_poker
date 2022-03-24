import styled from 'styled-components';
import { IconButton } from '@mui/material';
import colors from '../../utils/constants/colors';
import DeleteOutline from '@mui/icons-material/DeleteOutline';
import Save from '@mui/icons-material/Save';

export const StyledResult = styled('div')`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const StyledRestartButton = styled(IconButton)`
  background-color: ${colors.pomegranate15};
  border-radius: 15px;
  width: 40px;
  height: 40px;
  align-self: center;

  :hover {
    background-color: ${colors.peppermint};
`;

export const StyledRestartButtonIcon = styled(DeleteOutline)`
  color: ${colors.pomegranate};
`;

export const StyledSaveButton = styled(IconButton)`
  background-color: ${colors.silverChalice15};
  border-radius: 15px;
  width: 40px;
  height: 40px;
  align-self: center;

  :hover {
    background-color: ${colors.peppermint};
`;

export const StyledSaveButtonIcon = styled(Save)`
  color: ${colors.black};
`;

export const StyledButtonsWrapper = styled('div')`
  width: 90px;
  display: flex;
  justify-content: space-between;
`;
