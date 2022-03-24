import React, { FC, useState } from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { TextField } from '@mui/material';
import {
  StyledSubmitButton,
  StyledSubmitButtonIcon,
  StyledJoinRoomForm,
  StyledJoinRoomFormError,
} from './styled';
import { useNavigate, useSearchParams } from 'react-router-dom';
import store, { GameState, Room, User } from '../../stores/store';

const JoinRoomForm: FC = () => {
  const socket = store.socket;
  const [iconValidation, setIconValidation] = useState<null | boolean>(null);
  const [roomValidation, setRoomValidation] = useState<null | boolean>(null);
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
        setIconValidation(false);
        return;
      }
      const { userName } = values;
      const user: User = {
        userName,
        userEmoji,
        pickedCard: null,
        userSocket: socket.id,
      };
      socket.emit('try add user to the room', { roomID, user });
      socket.on(
        'join room event',
        (answer: { result: Room | null; error: string }) => {
          const { result, error } = answer;
          if (error) {
            setRoomValidation(false);
          } else if (result) {
            store.updateRoom(result);
            store.setCurrentUser(userName, false, socket.id);
            store.setGameState(GameState.Idle);
            navigate(`/room?id=${values.roomID}`, { replace: true });
          }
        },
      );
    },
  });
  return (
    <StyledJoinRoomForm onSubmit={formik.handleSubmit}>
      {iconValidation === false && (
        <StyledJoinRoomFormError>
          Please click above to select avatar
        </StyledJoinRoomFormError>
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
        <StyledJoinRoomFormError>
          {formik.errors.userName}
        </StyledJoinRoomFormError>
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
        <StyledJoinRoomFormError>
          {formik.errors.roomID}
        </StyledJoinRoomFormError>
      ) : null}
      {roomValidation === false && (
        <StyledJoinRoomFormError>
          Room with this id doesn't exist
        </StyledJoinRoomFormError>
      )}
      <StyledSubmitButton type="submit" size="large" aria-label="submit-button">
        <StyledSubmitButtonIcon />
      </StyledSubmitButton>
    </StyledJoinRoomForm>
  );
};

export default JoinRoomForm;
