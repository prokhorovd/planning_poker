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
import store, { GameState, User } from '../../stores/store';

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
        .min(10, 'Room ID contain 10 characters')
        .max(10, 'Room ID contain 10 characters')
        .required('Required')
        .matches(
          /^[A-Za-z0-9_-]*$/gi,
          "Allowed characters are letters, numbers and symbols: '_' '-'",
        ),
    }),
    onSubmit: (values) => {
      const roomID = values.roomID;
      const { userEmoji } = store.currentUser;
      if (!userEmoji) {
        console.log('icon is not set');
        return;
      } else if (store.room?.roomID !== roomID) {
        console.log('room with this id is not exist');
        return;
      }
      // config user and add to room
      const { userName } = values;
      const user: User = {
        userName,
        userEmoji,
        pickedCard: null,
        admin: false,
      };
      store.setCurrentUser(userName, false);
      store.addUserToRoom(roomID, user);
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
