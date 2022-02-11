import React from 'react';
import './CreateRoomForm.css';
import {useFormik} from 'formik';
import * as Yup from 'yup';
import {TextField, IconButton} from '@mui/material';
import ArrowRightAltIcon from '@mui/icons-material/ArrowRightAlt';

function CreateRoomForm () {
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
    <form className='create-room-form' onSubmit={formik.handleSubmit}>
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
      {formik.touched.userName && formik.errors.userName ? <div className='create-room-form__error'>{formik.errors.userName}</div> : null}
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
      {formik.touched.roomName && formik.errors.roomName ? <div className='create-room-form__error'>{formik.errors.roomName}</div> : null}
      <IconButton type='submit' size='large' aria-label="submit-button" sx={{ marginTop: '20px', width: 60, height: 60, backgroundColor: '#000', alignSelf: 'center'}}>
        <ArrowRightAltIcon sx={{color: '#FFF'}} />
      </IconButton>
    </form>
  );
}

export default CreateRoomForm;
