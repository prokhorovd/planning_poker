import React, {FC} from 'react';
import {useFormik} from 'formik';
import * as Yup from 'yup';
import {TextField} from '@mui/material';
import {StyledSubmitButton, StyledSubmitButtonIcon, StyledCreateRoomForm, StyledCreateRoomFormError} from './styled';
import {useSearchParams} from 'react-router-dom';

const JoinRoomForm:FC = () => {
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
        .matches(/^[a-zA-Z0-9]+(([',. -][a-zA-Z 0-9])?[a-zA-Z0-9]*)*$/gi, 'Please don\'t use special characters'),
      roomID: Yup.string()
        .max(6, 'Room ID contain 6 digits')
        .required('Required')
        .matches(/^[0-9]*$/gi, 'Please use digits only'),
    }),
    onSubmit: values => {
      console.log(JSON.stringify(values, null, 2));
    }
  });
  return (
      <StyledCreateRoomForm onSubmit={formik.handleSubmit}>
      <TextField
        label="User name"
        variant="standard"
        id='userName'
        name='userName'
        type="text"
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        value={formik.values.userName}
        inputProps={{style: { textAlign: 'center' }}}
        error={formik.touched.userName && Boolean(formik.errors.userName)}
        required
      />
      {formik.touched.userName && formik.errors.userName ? <StyledCreateRoomFormError>{formik.errors.userName}</StyledCreateRoomFormError> : null}
      <TextField
        label="RoomID"
        variant="standard"
        id='roomID'
        name='roomID'
        type="text"
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        value={formik.values.roomID}
        inputProps={{style: { textAlign: 'center' }}}
        error={formik.touched.roomID && Boolean(formik.errors.roomID)}
        required
      />
      {formik.touched.roomID && formik.errors.roomID ? <StyledCreateRoomFormError>{formik.errors.roomID}</StyledCreateRoomFormError> : null}
      <StyledSubmitButton type='submit' size='large' aria-label="submit-button">
        <StyledSubmitButtonIcon />
      </StyledSubmitButton>
    </StyledCreateRoomForm>
  );
}

export default JoinRoomForm;
