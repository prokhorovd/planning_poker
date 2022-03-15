import React, { FC } from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { TextField } from '@mui/material';
import {
  StyledSubmitButton,
  StyledSubmitButtonIcon,
  StyledCreateRoomForm,
  StyledCreateRoomFormError,
} from './styled';
import { useNavigate, useSearchParams } from 'react-router-dom';
import store, { GameState, UserData } from '../../stores/store';

const JoinRoomForm: FC = () => {
  let navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const formik = useFormik({
    initialValues: {
      userName: '',
      roomID: searchParams.get('roomId') || '',
    },
    validationSchema: Yup.object({
      userName: Yup.string()
        .max(15, 'Must be 15 characters or less')
        .required('Required')
        .matches(
          /^[a-zA-Z0-9]+(([',. -][a-zA-Z 0-9])?[a-zA-Z0-9]*)*$/gi,
          "Please don't use special characters",
        ),
      roomID: Yup.string()
        .max(6, 'Room ID contain 6 digits')
        .required('Required')
        .matches(/^[0-9]*$/gi, 'Please use digits only'),
    }),
    onSubmit: (values) => {
      const roomID = values.roomID;
      const userIcon = String(store.userIcon);
      if (!store.userIcon) {
        console.log('icon is not set');
        return;
      } else if (store.roomData[roomID] === undefined) {
        console.log('room with this id is not exist');
        return;
      }
      // config user and add to room
      const userData: UserData = {
        userName: values.userName,
        userEmoji: userIcon,
        pickedCard: null,
        isAdmin: false,
      };
      store.addUserToRoom(Number(roomID), userData);
      store.setGameState(GameState.Idle);
      navigate(`/room?id=${values.roomID}`, { replace: true });
    },
  });
  return (
    <StyledCreateRoomForm onSubmit={formik.handleSubmit}>
      <TextField
        label="User name"
        variant="standard"
        id="userName"
        name="userName"
        type="text"
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        value={formik.values.userName}
        inputProps={{ style: { textAlign: 'center' } }}
        error={formik.touched.userName && Boolean(formik.errors.userName)}
        required
      />
      {formik.touched.userName && formik.errors.userName ? (
        <StyledCreateRoomFormError>
          {formik.errors.userName}
        </StyledCreateRoomFormError>
      ) : null}
      <TextField
        label="RoomID"
        variant="standard"
        id="roomID"
        name="roomID"
        type="text"
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        value={formik.values.roomID}
        inputProps={{ style: { textAlign: 'center' } }}
        error={formik.touched.roomID && Boolean(formik.errors.roomID)}
        required
      />
      {formik.touched.roomID && formik.errors.roomID ? (
        <StyledCreateRoomFormError>
          {formik.errors.roomID}
        </StyledCreateRoomFormError>
      ) : null}
      <StyledSubmitButton type="submit" size="large" aria-label="submit-button">
        <StyledSubmitButtonIcon />
      </StyledSubmitButton>
    </StyledCreateRoomForm>
  );
};

export default JoinRoomForm;
