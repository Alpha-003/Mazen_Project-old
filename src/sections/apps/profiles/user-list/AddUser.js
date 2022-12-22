import PropTypes from 'prop-types';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useOutletContext } from 'react-router';

// material-ui
import { styled } from '@mui/material/styles';
import {
  Box,
  Button,
  DialogActions,
  DialogContent,
  DialogTitle,
  Divider,
  Grid,
  FormHelperText,
  InputLabel,
  MenuItem,
  Select,
  Stack,
  TextField,
  Tooltip,
  ToggleButton,
  ToggleButtonGroup,
  Typography
} from '@mui/material';
import { LocalizationProvider } from '@mui/x-date-pickers';

import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';

// third-party
import _ from 'lodash';
import * as Yup from 'yup';
import { useFormik, Form, FormikProvider } from 'formik';
import UploadSingleFile from 'components/third-party/dropzone/SingleFile';

// project imports
import IconButton from 'components/@extended/IconButton';
import { openSnackbar } from 'store/reducers/snackbar';
import MainCard from 'components/MainCard';
// assets
import { DeleteFilled, UserOutlined } from '@ant-design/icons';


// constant
const getInitialValues = (user) => {
  const newUser = {
    firstNameEN: '',
    lastNameEN: '',
    firstNameAR: '',
    lastNameAR: '',
    email: '',
    mobileNumber: '',
    ph1: '',
    ph2: '',
    jobTitle: 'owner',
    lang: 'arabic',
  };

  if (user) {
    newUser.name = user.fatherName;
    newUser.location = user.address;
    return _.merge({}, newUser, user);
  }

  return newUser;
};


// ==============================|| USER ADD / EDIT / DELETE ||============================== //
const StyledToggleButtonGroup = styled(ToggleButtonGroup)(({ theme }) => ({
  '& .MuiToggleButtonGroup-grouped': {
    margin: theme.spacing(1),
    '&.Mui-disabled': {
      border: 0,
    },
    '&.MuiToggleButton-root': {
      border: `1px solid ${theme.palette.mode === 'dark' ? theme.palette.divider : theme.palette.grey.A800}`
    },
    '&.Mui-selected': {
      borderColor: theme.palette.mode === 'dark' ? theme.palette.primary.dark : theme.palette.primary.light
    },
    '&:not(:first-of-type)': {
      borderRadius: theme.shape.borderRadius,
    },
    '&:first-of-type': {
      borderRadius: theme.shape.borderRadius,
    },
  },
}));
const GenderToggleButtonGroup = styled(ToggleButtonGroup)(({ theme }) => ({
  '& .MuiToggleButtonGroup-grouped': {
    border: `1px solid ${theme.palette.mode === 'dark' ? theme.palette.divider : theme.palette.grey.A800}`,
    '&.Mui-disabled': {
      border: 0,
    },
    '&.Mui-selected': {
      borderColor: theme.palette.mode === 'dark' ? theme.palette.primary.dark : theme.palette.primary.light
    },
  },
}));
function useInputRef() {
  return useOutletContext();
}
const AddUser = ({ user, onCancel }) => {
  const dispatch = useDispatch();
  const isCreating = !user;
  const inputRef = useInputRef();


  const UserSchema = Yup.object().shape({
    name: Yup.string().max(255).required('Name is required'),
    orderStatus: Yup.string().required('Name is required'),
    email: Yup.string().max(255).required('Email is required').email('Must be a valid email'),
    location: Yup.string().max(500)
  });

  const deleteHandler = () => {
    // dispatch(deleteUser(user?.id)); - delete
    dispatch(
      openSnackbar({
        open: true,
        message: 'User deleted successfully.',
        variant: 'alert',
        alert: {
          color: 'success'
        },
        close: false
      })
    );
    onCancel();
  };

  const formik = useFormik({
    initialValues: getInitialValues(user),
    validationSchema: UserSchema,
    onSubmit: (values, { setSubmitting }) => {
      try {
        if (user) {
          // dispatch(updateUser(user.id, newUser)); - update
          dispatch(
            openSnackbar({
              open: true,
              message: 'User update successfully.',
              variant: 'alert',
              alert: {
                color: 'success'
              },
              close: false
            })
          );
        } else {
          // dispatch(createUser(newUser)); - add
          dispatch(
            openSnackbar({
              open: true,
              message: 'User add successfully.',
              variant: 'alert',
              alert: {
                color: 'success'
              },
              close: false
            })
          );
        }

        setSubmitting(false);
        onCancel();
      } catch (error) {
        console.error(error);
      }
    }
  });
  const style = {
    color: 'red'
  };
  const { errors, touched, handleBlur, handleSubmit, handleChange, isSubmitting, values, setFieldValue } = formik;
  const [type, setType] = useState('customer');
  const [gend, setGend] = useState('male');
  const [isEmp, setIsEmp] = useState(false)

  const setChange = (event, newAlignment) => {
    setGend(newAlignment);
  };
  const handleType = (e, newType) => {
    setType(newType);
    if (newType == 'employee') {
      setIsEmp(true)
    } else {
      setIsEmp(false)
    }
  };
  return (
    <FormikProvider value={formik}>
      <LocalizationProvider dateAdapter={AdapterDateFns}>
        <Form autoComplete="off" noValidate onSubmit={handleSubmit}>
          <DialogTitle>{user ? 'Edit User' : 'New User'}</DialogTitle>
          <Divider />
          <DialogContent sx={{ p: 2.5 }}>
            <Grid container spacing={3}>
              {/* <Grid item xs={12} md={3}>
                <Stack direction="row" justifyContent="center" sx={{ mt: 3 }}>
                  <FormLabel
                    htmlFor="change-avtar"
                    sx={{
                      position: 'relative',
                      borderRadius: '50%',
                      overflow: 'hidden',
                      '&:hover .MuiBox-root': { opacity: 1 },
                      cursor: 'pointer'
                    }}
                  >
                    <Avatar alt="Avatar 1" src={avatar} sx={{ width: 72, height: 72, border: '1px dashed' }} />
                    <Box
                      sx={{
                        position: 'absolute',
                        top: 0,
                        left: 0,
                        backgroundColor: theme.palette.mode === 'dark' ? 'rgba(255, 255, 255, .75)' : 'rgba(0,0,0,.65)',
                        width: '100%',
                        height: '100%',
                        opacity: 0,
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center'
                      }}
                    >
                      <Stack spacing={0.5} alignItems="center">
                        <CameraOutlined style={{ color: theme.palette.secondary.lighter, fontSize: '2rem' }} />
                        <Typography sx={{ color: 'secondary.lighter' }}>Upload</Typography>
                      </Stack>
                    </Box>
                  </FormLabel>
                  <TextField
                    type="file"
                    id="change-avtar"
                    label="Outlined"
                    variant="outlined"
                    sx={{ display: 'none' }}
                    onChange={(e) => setSelectedImage(e.target.files?.[0])}
                  />
                </Stack>
              </Grid> */}
              <Grid item xs={12} >
                <Grid container spacing={3}>
                  <Grid item xs={12}>
                    <Stack spacing={1.25}>
                      <MainCard title="Type" content={false} sx={{ '& .MuiInputLabel-root': { fontSize: '0.875rem' } }}>
                        <Box sx={{ p: 2 }}>
                          <StyledToggleButtonGroup
                            value={type}
                            exclusive
                            onChange={handleType}
                            aria-label="type"
                            color="primary"
                          >
                            <ToggleButton size='large' value="customer" aria-label="customer">
                              <Typography><UserOutlined sx={{ pr: 3 }} /> Customer</Typography>
                            </ToggleButton>
                            <ToggleButton size='large' value="employee" aria-label="employee">
                              <Typography><UserOutlined sx={{ pr: 3 }} /> Employee</Typography>
                            </ToggleButton>
                          </StyledToggleButtonGroup>
                        </Box>
                      </MainCard>
                    </Stack>
                  </Grid>
                  <Grid item xs={12}>
                    <MainCard title="Personal Details" content={false} sx={{ '& .MuiInputLabel-root': { fontSize: '0.875rem' } }}>
                      <Box sx={{ p: 2.5 }}>
                        <Grid container spacing={3}>
                          {/* first namee english */}
                          <Grid item xs={12} sm={6}>
                            <Stack spacing={1.25}>
                              <InputLabel htmlFor="personal-first-name-eng">
                                <span style={style}>*</span> First Name (English)
                              </InputLabel>
                              <TextField
                                fullWidth
                                id="personal-first-name-eng"
                                value={values.firstNameEN}
                                name="firstNameEN"
                                onBlur={handleBlur}
                                onChange={handleChange}
                                placeholder="First Name Eng"
                                autoFocus
                                inputRef={inputRef}
                              />
                              {touched.firstname && errors.firstname && (
                                <FormHelperText error id="personal-first-name-helper">
                                  {errors.firstname}
                                </FormHelperText>
                              )}
                            </Stack>
                          </Grid>
                          {/* first name arabic */}
                          <Grid item xs={12} sm={6}>
                            <Stack spacing={1.25}>
                              <InputLabel htmlFor="personal-first-name-ar">
                                <span style={style}>*</span> First Name (Arabic)
                              </InputLabel>
                              <TextField
                                fullWidth
                                id="personal-first-nam-ar"
                                value={values.firstNameAR}
                                name="lastname"
                                onBlur={handleBlur}
                                onChange={handleChange}
                                placeholder="First Name Arabic"
                              />
                              {touched.lastname && errors.lastname && (
                                <FormHelperText error id="personal-last-name-helper">
                                  {errors.lastname}
                                </FormHelperText>
                              )}
                            </Stack>
                          </Grid>
                          {/* last name english */}
                          <Grid item xs={12} sm={6}>
                            <Stack spacing={1.25}>
                              <InputLabel htmlFor="personal-last-name-eng">Last Name (English)</InputLabel>
                              <TextField
                                fullWidth
                                id="personal-last-name-eng"
                                value={values.lastNameEN}
                                name="lastNameEN"
                                onBlur={handleBlur}
                                onChange={handleChange}
                                placeholder="Last Name English"
                              />
                              {touched.lastname && errors.lastname && (
                                <FormHelperText error id="personal-last-name-helper">
                                  {errors.lastname}
                                </FormHelperText>
                              )}
                            </Stack>
                          </Grid>
                          {/* last name arabic */}
                          <Grid item xs={12} sm={6}>
                            <Stack spacing={1.25}>
                              <InputLabel htmlFor="personal-last-name-ar">Last Name (Arabic)</InputLabel>
                              <TextField
                                fullWidth
                                id="personal-last-name-ar"
                                value={values.lastNameAR}
                                name="lastname"
                                onBlur={handleBlur}
                                onChange={handleChange}
                                placeholder="Last Name Arabic"
                              />
                              {touched.lastname && errors.lastname && (
                                <FormHelperText error id="personal-last-name-helper">
                                  {errors.lastname}
                                </FormHelperText>
                              )}
                            </Stack>
                          </Grid>
                          {/* job title */}
                          <Grid item xs={12} sm={6}>
                            <Stack spacing={1.25}>
                              <InputLabel htmlFor="job-title">Job Title</InputLabel>
                              <Select id="job-title" value={values.jobTitle} name="jobTitle" onChange={handleChange}>
                                <MenuItem value="owner">Owner</MenuItem>
                                <MenuItem value="regulator">Regulator</MenuItem>
                                <MenuItem value="client">Client</MenuItem>
                              </Select>
                            </Stack>
                          </Grid>
                          {/* Preferred Language */}
                          <Grid item xs={12} sm={6}>
                            <Stack spacing={1.25}>
                              <InputLabel htmlFor="lang">Preferred Language</InputLabel>
                              <Select id="lang" value={values.lang} name="lang" onChange={handleChange}>
                                <MenuItem value="english">English</MenuItem>
                                <MenuItem value="arabic">Arabic</MenuItem>
                                <MenuItem value="spanish">Spanish</MenuItem>
                              </Select>
                            </Stack>
                          </Grid>
                          {/* genders */}
                          <Grid item xs={12} sm={6}>
                            <Stack spaceing={1.25}>
                              <GenderToggleButtonGroup color="primary" value={gend} exclusive onChange={setChange} aria-label="Platform">
                                <ToggleButton sx={{ width: '93px' }} value="male">
                                  Male
                                </ToggleButton>
                                <ToggleButton sx={{ width: '93px' }} value="female">
                                  Female
                                </ToggleButton>
                              </GenderToggleButtonGroup>
                            </Stack>
                          </Grid>
                        </Grid>
                      </Box>
                    </MainCard>
                  </Grid>
                  <Grid item xs={12}>
                    <MainCard title="Contact Details" content={false} sx={{ '& .MuiInputLabel-root': { fontSize: '0.875rem' } }}>
                      <Box sx={{ p: 2.5 }}>
                        <Grid container spacing={3}>
                          {/* Mobile Number */}
                          <Grid item xs={12} sm={6}>
                            <Stack spacing={1.25}>
                              <InputLabel htmlFor="personal-mobile">
                                <span style={style}>*</span> Mobile Number
                              </InputLabel>
                              <TextField
                                type="number"
                                fullWidth
                                value={values.mobileNumber}
                                name="mobile"
                                onBlur={handleBlur}
                                onChange={handleChange}
                                id="personal-mobile"
                                placeholder="example"
                              />
                            </Stack>
                          </Grid>
                          {/* email */}
                          <Grid item xs={12} sm={6}>
                            <Stack spacing={1.25}>
                              <InputLabel htmlFor="personal-email">Email</InputLabel>
                              <TextField
                                type="email"
                                fullWidth
                                value={values.email}
                                name="email"
                                onBlur={handleBlur}
                                onChange={handleChange}
                                id="personal-email"
                                placeholder="Email"
                              />
                              {touched.email && errors.email && (
                                <FormHelperText error id="personal-email-helper">
                                  {errors.email}
                                </FormHelperText>
                              )}
                            </Stack>
                          </Grid>
                          {/* Phone 1 */}
                          <Grid item xs={12} sm={6}>
                            <Stack spacing={1.25}>
                              <InputLabel htmlFor="phone-1">Phone 1</InputLabel>
                              <TextField
                                fullWidth
                                id="phone-1"
                                value={values.ph1}
                                name="phone1"
                                onBlur={handleBlur}
                                onChange={handleChange}
                                placeholder="example"
                              />
                              {touched.lastname && errors.lastname && (
                                <FormHelperText error id="personal-last-name-helper">
                                  {errors.lastname}
                                </FormHelperText>
                              )}
                            </Stack>
                          </Grid>
                          {/* Phone 2 */}
                          <Grid item xs={12} sm={6}>
                            <Stack spacing={1.25}>
                              <InputLabel htmlFor="phone-2">Phone 1</InputLabel>
                              <TextField
                                fullWidth
                                id="phone-2"
                                value={values.ph2}
                                name="phone2"
                                onBlur={handleBlur}
                                onChange={handleChange}
                                placeholder="example"
                              />
                              {touched.lastname && errors.lastname && (
                                <FormHelperText error id="personal-last-name-helper">
                                  {errors.lastname}
                                </FormHelperText>
                              )}
                            </Stack>
                          </Grid>
                        </Grid>
                      </Box>
                    </MainCard>
                  </Grid>
                  {isEmp && <Grid item xs={12}>
                    <MainCard title="Employment Details" content={false} sx={{ '& .MuiInputLabel-root': { fontSize: '0.875rem' } }}>
                      <Box sx={{ p: 2.5 }}>
                        <Grid container spacing={3}>
                          {/* id front */}
                          <Grid item xs={12} sm={6}>
                            <Stack spacing={1.25}>
                              <InputLabel htmlFor="personal-mobile">
                                National Id (Front)
                              </InputLabel>
                              <UploadSingleFile setFieldValue={setFieldValue} file={values.files} error={touched.files && !!errors.files} />
                              {touched.files && errors.files && (
                                <FormHelperText error id="standard-weight-helper-text-password-login">
                                  {errors.files}
                                </FormHelperText>
                              )}
                            </Stack>
                          </Grid>
                          {/* id back */}
                          <Grid item xs={12} sm={6}>
                            <Stack spacing={1.25}>
                              <InputLabel htmlFor="personal-mobile">
                                National Id (Back)
                              </InputLabel>
                              <UploadSingleFile setFieldValue={setFieldValue} file={values.files} error={touched.files && !!errors.files} />
                              {touched.files && errors.files && (
                                <FormHelperText error id="standard-weight-helper-text-password-login">
                                  {errors.files}
                                </FormHelperText>
                              )}
                            </Stack>
                          </Grid>
                          {/* photo */}
                          <Grid item xs={12} sm={6}>
                            <Stack spacing={1.25}>
                              <InputLabel htmlFor="personal-mobile">
                                Photo
                              </InputLabel>
                              <UploadSingleFile setFieldValue={setFieldValue} file={values.files} error={touched.files && !!errors.files} />
                              {touched.files && errors.files && (
                                <FormHelperText error id="standard-weight-helper-text-password-login">
                                  {errors.files}
                                </FormHelperText>
                              )}
                            </Stack>
                          </Grid>
                          {/* contract*/}
                          <Grid item xs={12} sm={6}>
                            <Stack spacing={1.25}>
                              <InputLabel htmlFor="personal-mobile">
                                Contract
                              </InputLabel>
                              <UploadSingleFile setFieldValue={setFieldValue} file={values.files} error={touched.files && !!errors.files} />
                              {touched.files && errors.files && (
                                <FormHelperText error id="standard-weight-helper-text-password-login">
                                  {errors.files}
                                </FormHelperText>
                              )}
                            </Stack>
                          </Grid>
                        </Grid>
                      </Box>
                    </MainCard>
                  </Grid>}
                </Grid>
              </Grid>
            </Grid>
          </DialogContent>
          <Divider />
          <DialogActions sx={{ p: 2.5 }}>
            <Grid container justifyContent="space-between" alignItems="center">
              <Grid item>
                {!isCreating && (
                  <Tooltip title="Delete User" placement="top">
                    <IconButton onClick={deleteHandler} size="large" color="error">
                      <DeleteFilled />
                    </IconButton>
                  </Tooltip>
                )}
              </Grid>
              <Grid item>
                <Stack direction="row" spacing={2} alignItems="center">
                  <Button color="error" onClick={onCancel}>
                    Cancel
                  </Button>
                  <Button type="submit" variant="contained" disabled={isSubmitting}>
                    {user ? 'Edit User' : 'Add User'}
                  </Button>
                </Stack>
              </Grid>
            </Grid>
          </DialogActions>
        </Form>
      </LocalizationProvider>
    </FormikProvider>
  );
};

AddUser.propTypes = {
  user: PropTypes.object,
  onCancel: PropTypes.func
};

export default AddUser;
