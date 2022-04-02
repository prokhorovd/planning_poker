import React, { FC, useState } from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { TextField } from '@mui/material';
import {
  StyledSubmitButton,
  StyledSubmitButtonIcon,
  StyledCreateRoomForm,
  StyledCreateRoomFormError,
} from './styled';
import store, { GameState } from '../../stores/store';
import { useNavigate } from 'react-router-dom';
import { nanoid } from 'nanoid';

const CreateRoomForm: FC = () => {
  let navigate = useNavigate();
  const socket = store.socket;
  const [iconValidation, setIconValidation] = useState<null | boolean>(null);
  const formik = useFormik({
    initialValues: {
      userName: '',
      roomName: '',
    },
    validationSchema: Yup.object({
      userName: Yup.string()
        .max(15, 'Must be 15 characters or less')
        .required('Required')
        .matches(
          /^[a-zA-Z0-9]+(([',. -][a-zA-Z 0-9])?[a-zA-Z0-9]*)*$/gi,
          "Please don't use special characters",
        ),
      roomName: Yup.string()
        .max(15, 'Must be 15 characters or less')
        .required('Required')
        .matches(
          /^[a-zA-Z0-9]+(([',. -][a-zA-Z 0-9])?[a-zA-Z0-9]*)*$/gi,
          "Please don't use special characters",
        ),
    }),
    onSubmit: (values) => {
      const { userEmoji } = store.currentUser;
      // stop submit if user emoji is not set
      if (!userEmoji) {
        setIconValidation(false);
        return;
      }
      // create room with params
      const roomID = nanoid(10);
      const { roomName, userName } = values;
      const roomParams = {
        id: roomID,
        roomName,
        userName,
        userEmoji,
        userSocket: socket.id,
      };
      store.setCurrentUser(userName, true, socket.id);
      store.createRoom(roomParams);
      store.setGameState(GameState.Idle);
      socket.emit('create room', store.room);
      navigate(`/room?id=${roomID}`, { replace: true });
    },
  });
  return (
    <StyledCreateRoomForm onSubmit={formik.handleSubmit}>
      {iconValidation === false && (
        <StyledCreateRoomFormError>
          Please click above to select avatar
        </StyledCreateRoomFormError>
      )}
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
        label="Room name"
        variant="standard"
        id="roomName"
        name="roomName"
        type="text"
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        value={formik.values.roomName}
        inputProps={{ style: { textAlign: 'center' } }}
        error={formik.touched.roomName && Boolean(formik.errors.roomName)}
        required
      />
      {formik.touched.roomName && formik.errors.roomName ? (
        <StyledCreateRoomFormError>
          {formik.errors.roomName}
        </StyledCreateRoomFormError>
      ) : null}
      <StyledSubmitButton type="submit" size="large" aria-label="submit-button">
        <StyledSubmitButtonIcon />
      </StyledSubmitButton>
    </StyledCreateRoomForm>
  );
};

export default CreateRoomForm;
