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
const getInitialValues = (org) => {
  const newOrg = {
    nameEN: '',
    nameAR: '',
    printFreq: 'once',
    orgSize: '1-5',
    agencyCat: '',
    note: '',
    mobile: '',
    mobile2: '',
    landline: '',
    email: '',
    website: ''
  };

  if (org) {
    newOrg.name = org.name;
    newOrg.location = org.address;
    return _.merge({}, newOrg, org);
  }

  return newOrg;
};

// ==============================|| Org ADD / EDIT / DELETE ||============================== //
const StyledToggleButtonGroup = styled(ToggleButtonGroup)(({ theme }) => ({
  '& .MuiToggleButtonGroup-grouped': {
    margin: theme.spacing(1),
    '&.Mui-disabled': {
      border: 0
    },
    '&.MuiToggleButton-root': {
      border: `1px solid ${theme.palette.mode === 'dark' ? theme.palette.divider : theme.palette.grey.A800}`
    },
    '&.Mui-selected': {
      borderColor: theme.palette.mode === 'dark' ? theme.palette.primary.dark : theme.palette.primary.light
    },
    '&:not(:first-of-type)': {
      borderRadius: theme.shape.borderRadius
    },
    '&:first-of-type': {
      borderRadius: theme.shape.borderRadius
    }
  }
}));
const GenderToggleButtonGroup = styled(ToggleButtonGroup)(({ theme }) => ({
  '& .MuiToggleButtonGroup-grouped': {
    border: `1px solid ${theme.palette.mode === 'dark' ? theme.palette.divider : theme.palette.grey.A800}`,
    '&.Mui-disabled': {
      border: 0
    },
    '&.Mui-selected': {
      borderColor: theme.palette.mode === 'dark' ? theme.palette.primary.dark : theme.palette.primary.light
    }
  }
}));
function useInputRef() {
  return useOutletContext();
}
const AddOrg = ({ org, onCancel, title }) => {
  title = title || 'Organization';
  const dispatch = useDispatch();
  const isCreating = !org;
  const inputRef = useInputRef();

  const OrgSchema = Yup.object().shape({
    name: Yup.string().max(255).required('Name is required'),
    orderStatus: Yup.string().required('Name is required'),
    email: Yup.string().max(255).required('Email is required').email('Must be a valid email'),
    location: Yup.string().max(500)
  });

  const deleteHandler = () => {
    // dispatch(deleteOrg(Org?.id)); - delete
    dispatch(
      openSnackbar({
        open: true,
        message: 'Org deleted successfully.',
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
    initialValues: getInitialValues(org),
    validationSchema: OrgSchema,
    onSubmit: (values, { setSubmitting }) => {
      try {
        if (org) {
          // dispatch(updateOrg(Org.id, newOrg)); - update
          dispatch(
            openSnackbar({
              open: true,
              message: 'Organization update successfully.',
              variant: 'alert',
              alert: {
                color: 'success'
              },
              close: false
            })
          );
        } else {
          // dispatch(createOrg(newOrg)); - add
          dispatch(
            openSnackbar({
              open: true,
              message: 'Organization add successfully.',
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
  const [type, setType] = useState('Agency');
  const [gend, setGend] = useState('male');

  const employee = title == 'Employee';
  const [isEmp, setIsEmp] = useState(employee);

  const setChange = (event, newAlignment) => {
    setGend(newAlignment);
  };
  const handleType = (e, newType) => {
    setType(newType);
    if (newType == 'employee') {
      setIsEmp(true);
    } else {
      setIsEmp(false);
    }
  };
  return (
    <FormikProvider value={formik}>
      <LocalizationProvider dateAdapter={AdapterDateFns}>
        <Form autoComplete="off" noValidate onSubmit={handleSubmit}>
          <DialogTitle>{org ? `Edit ${title}` : `New ${title}`}</DialogTitle>
          <Divider />
          <DialogContent sx={{ p: 2.5 }}>
            <Grid container spacing={3}>
              <Grid item xs={12}>
                <Grid container spacing={3}>
                  {title != 'Customer' && title != 'Employee' && (
                    <Grid item xs={12}>
                      <Stack spacing={1.25}>
                        <MainCard title="Type" content={false} sx={{ '& .MuiInputLabel-root': { fontSize: '0.875rem' } }}>
                          <Box sx={{ p: 2 }}>
                            <StyledToggleButtonGroup value={type} exclusive onChange={handleType} aria-label="type" color="primary">
                              <ToggleButton size="large" value="Agency" aria-label="agency">
                                <Typography>
                                  <UserOutlined sx={{ pr: 3 }} /> Agency
                                </Typography>
                              </ToggleButton>
                              <ToggleButton size="large" value="Business" aria-label="business">
                                <Typography>
                                  <UserOutlined sx={{ pr: 3 }} /> Business
                                </Typography>
                              </ToggleButton>
                              <ToggleButton size="large" value="Supplier" aria-label="supplier">
                                <Typography>
                                  <UserOutlined sx={{ pr: 3 }} /> Supplier
                                </Typography>
                              </ToggleButton>
                              <ToggleButton size="large" value="Manufacturer" aria-label="manufacturer">
                                <Typography>
                                  <UserOutlined sx={{ pr: 3 }} /> Manufacturer
                                </Typography>
                              </ToggleButton>
                            </StyledToggleButtonGroup>
                          </Box>
                        </MainCard>
                      </Stack>
                    </Grid>
                  )}
                  <Grid item xs={12}>
                    <MainCard title={`${type} Details`} content={false} sx={{ '& .MuiInputLabel-root': { fontSize: '0.875rem' } }}>
                      <Box sx={{ p: 2.5 }}>
                        <Grid container spacing={3}>
                          {/*  name english */}
                          <Grid item xs={12} sm={6}>
                            <Stack spacing={1.25}>
                              <InputLabel htmlFor="name-eng">
                                <span style={style}>*</span> {type} Name (English)
                              </InputLabel>
                              <TextField
                                fullWidth
                                id="name-eng"
                                value={values.nameEN}
                                name="nameEN"
                                onBlur={handleBlur}
                                onChange={handleChange}
                                placeholder="Name Eng"
                                autoFocus
                                inputRef={inputRef}
                              />
                              {touched.nameEN && errors.nameEN && (
                                <FormHelperText error id="name-helper">
                                  {errors.nameEN}
                                </FormHelperText>
                              )}
                            </Stack>
                          </Grid>
                          {/*  name arabic */}
                          <Grid item xs={12} sm={6}>
                            <Stack spacing={1.25}>
                              <InputLabel htmlFor="name-ar">
                                <span style={style}>*</span> {type} Name (Arabic)
                              </InputLabel>
                              <TextField
                                fullWidth
                                id="nam-ar"
                                value={values.nameAR}
                                name="nameAR"
                                onBlur={handleBlur}
                                onChange={handleChange}
                                placeholder="First Name Arabic"
                              />
                              {touched.nameAR && errors.nameAR && (
                                <FormHelperText error id="personal-last-name-helper">
                                  {errors.nameAR}
                                </FormHelperText>
                              )}
                            </Stack>
                          </Grid>
                          {/* print frq */}
                          <Grid item xs={12} sm={6}>
                            <Stack spacing={1.25}>
                              <InputLabel htmlFor="printingFreq">Printing Frequency</InputLabel>
                              <Select id="printingFreq" value={values.printFreq} name="printingFreq" onChange={handleChange}>
                                <MenuItem value="once">Once a month</MenuItem>
                                <MenuItem value="twice">Twice a month</MenuItem>
                                <MenuItem value="triple">Triple a month</MenuItem>
                              </Select>
                            </Stack>
                          </Grid>
                          {/* org size*/}
                          <Grid item xs={12} sm={6}>
                            <Stack spacing={1.25}>
                              <InputLabel htmlFor="orgSize">Organization Size</InputLabel>
                              <Select id="orgSize" value={values.orgSize} name="emp" onChange={handleChange}>
                                <MenuItem value="1-5">1-5 Employees</MenuItem>
                                <MenuItem value="6-10">6-10 Employees</MenuItem>
                                <MenuItem value="11-15">11-15 Employees</MenuItem>
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
                  {isEmp && (
                    <Grid item xs={12}>
                      <MainCard title="Employment Details" content={false} sx={{ '& .MuiInputLabel-root': { fontSize: '0.875rem' } }}>
                        <Box sx={{ p: 2.5 }}>
                          <Grid container spacing={3}>
                            {/* id front */}
                            <Grid item xs={12} sm={6}>
                              <Stack spacing={1.25}>
                                <InputLabel htmlFor="personal-mobile">National Id (Front)</InputLabel>
                                <UploadSingleFile
                                  setFieldValue={setFieldValue}
                                  file={values.files}
                                  error={touched.files && !!errors.files}
                                />
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
                                <InputLabel htmlFor="personal-mobile">National Id (Back)</InputLabel>
                                <UploadSingleFile
                                  setFieldValue={setFieldValue}
                                  file={values.files}
                                  error={touched.files && !!errors.files}
                                />
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
                                <InputLabel htmlFor="personal-mobile">Photo</InputLabel>
                                <UploadSingleFile
                                  setFieldValue={setFieldValue}
                                  file={values.files}
                                  error={touched.files && !!errors.files}
                                />
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
                                <InputLabel htmlFor="personal-mobile">Contract</InputLabel>
                                <UploadSingleFile
                                  setFieldValue={setFieldValue}
                                  file={values.files}
                                  error={touched.files && !!errors.files}
                                />
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
                    </Grid>
                  )}
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
                    {org ? `Edit ${title}` : `Add ${title}`}
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

AddOrg.propTypes = {
  org: PropTypes.object,
  onCancel: PropTypes.func,
  title: PropTypes.string
};

export default AddOrg;
