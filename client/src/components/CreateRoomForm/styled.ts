import styled from 'styled-components';
import {IconButton} from '@mui/material';
import ArrowRightAltIcon from '@mui/icons-material/ArrowRightAlt';

export const SubmitButton = styled(IconButton)`
  background-color: #000000;
  margin-top: 20px;
  width: 60px;
  height: 60px;
  align-self: center;

  :hover {
    background-color: #5f5f5f;
`

export const SubmitButtonIcon = styled(ArrowRightAltIcon)`
  color: #ffffff;
`

export const CreateRoomFormLayout = styled.form`
  display: flex;
  flex-direction: column;
  width: 200px;
`

export const CreateRoomFormError = styled.div`
  font-size: 11px;
  color: indianred;
`
