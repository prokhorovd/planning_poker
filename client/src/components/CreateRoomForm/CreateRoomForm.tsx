import React, {FC} from 'react';
import {useFormik} from 'formik';
import * as Yup from 'yup';
import {TextField} from '@mui/material';
import {StyledSubmitButton, StyledSubmitButtonIcon, StyledCreateRoomForm, StyledCreateRoomFormError} from './styled';

const CreateRoomForm:FC = () => {
  const formik = useFormik({
    initialValues: {
      userName: '',
      roomName: '',
    },
    validationSchema: Yup.object({
      userName: Yup.string()
        .max(15, 'Must be 15 characters or less')
        .required('Required')
        .matches(/^[a-zA-Z0-9]+(([',. -][a-zA-Z 0-9])?[a-zA-Z0-9]*)*$/gi, 'Please don\'t use special characters'),
      roomName: Yup.string()
        .max(15, 'Must be 15 characters or less')
        .required('Required')
        .matches(/^[a-zA-Z0-9]+(([',. -][a-zA-Z 0-9])?[a-zA-Z0-9]*)*$/gi, 'Please don\'t use special characters'),
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
        label="Room name"
        variant="standard"
        id='roomName'
        name='roomName'
        type="text"
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        value={formik.values.roomName}
        inputProps={{style: { textAlign: 'center' }}}
        error={formik.touched.roomName && Boolean(formik.errors.roomName)}
        required
      />
      {formik.touched.roomName && formik.errors.roomName ? <StyledCreateRoomFormError>{formik.errors.roomName}</StyledCreateRoomFormError> : null}
      <StyledSubmitButton type='submit' size='large' aria-label="submit-button">
        <StyledSubmitButtonIcon />
      </StyledSubmitButton>
    </StyledCreateRoomForm>
  );
}

export default CreateRoomForm;
