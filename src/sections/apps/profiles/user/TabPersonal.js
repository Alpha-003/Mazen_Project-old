/* eslint-disable no-unused-vars */
// material-ui
import { useOutletContext } from 'react-router';

import { useDispatch } from 'react-redux';
import { styled } from '@mui/material/styles';

// material-ui
import {
  Box,
  Button,
  FormHelperText,
  Grid,
  InputLabel,
  MenuItem,
  Select,
  Stack,
  TextField,
  ToggleButtonGroup,
  ToggleButton
} from '@mui/material';

// third party
import * as Yup from 'yup';
import { Formik } from 'formik';

// project import
import { openSnackbar } from 'store/reducers/snackbar';
import MainCard from 'components/MainCard';

// assets
import React from 'react';

const style = {
  color: 'red'
};
function useInputRef() {
  return useOutletContext();
}

// ==============================|| TAB - PERSONAL ||============================== //
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
const TabPersonal = () => {
  const maxDate = new Date();
  maxDate.setFullYear(maxDate.getFullYear() - 18);

  const dispatch = useDispatch();
  const inputRef = useInputRef();

  const [gend, setGend] = React.useState('male');
  const setChange = (event, newAlignment) => {
    setGend(newAlignment);
  };

  return (
    <Formik
      initialValues={{
        firstname: 'Stebin',
        lastname: 'Ben',
        email: 'stebin.ben@gmail.com',
        dob: new Date('03-10-1993'),
        countryCode: '+91',
        jobTitle: 'owner',
        lang: 'arabic',
        contact: 9652364852,
        designation: 'Full Stack Developer',
        address: '3801 Chalk Butte Rd, Cut Bank, MT 59427, United States',
        address1: '301 Chalk Butte Rd, Cut Bank, NY 96572, New York',
        country: 'US',
        gender: 'female',
        state: 'California',
        skill: [
          'Adobe XD',
          'Angular',
          'Corel Draw',
          'Figma',
          'HTML',
          'Illustrator',
          'Javascript',
          'Logo Design',
          'Material UI',
          'NodeJS',
          'npm',
          'Photoshop',
          'React',
          'Reduxjs & tooltit',
          'SASS'
        ],
        note: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.`,
        submit: null
      }}
      validationSchema={Yup.object().shape({
        firstname: Yup.string().max(255).required('First Name is required.'),
        lastname: Yup.string().max(255).required('Last Name is required.'),
        email: Yup.string().email('Invalid email address.').max(255).required('Email is required.'),
        dob: Yup.date().max(maxDate, 'Age should be 18+ years.').required('Date of birth is requird.'),
        contact: Yup.number()
          .test('len', 'Contact should be exactly 10 digit', (val) => val?.toString().length === 10)
          .required('Phone number is required'),
        designation: Yup.string().required('Designation is required'),
        address: Yup.string().min(50, 'Address to short.').required('Address is required'),
        country: Yup.string().required('Country is required'),
        state: Yup.string().required('State is required'),
        note: Yup.string().min(150, 'Not shoulde be more then 150 char.')
      })}
      onSubmit={(values, { setErrors, setStatus, setSubmitting }) => {
        try {
          dispatch(
            openSnackbar({
              open: true,
              message: 'Personal profile updated successfully.',
              variant: 'alert',
              alert: {
                color: 'success'
              },
              close: false
            })
          );
          setStatus({ success: false });
          setSubmitting(false);
        } catch (err) {
          setStatus({ success: false });
          setErrors({ submit: err.message });
          setSubmitting(false);
        }
      }}
    >
      {({ errors, handleBlur, handleChange, handleSubmit, isSubmitting, setFieldValue, touched, values }) => (
        <form noValidate onSubmit={handleSubmit}>
          <Grid container rowSpacing={2} justifyContent="end">
            <Grid item xs={12}>
              <MainCard title="Select" content={false} sx={{ '& .MuiInputLabel-root': { fontSize: '0.875rem' } }}>
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
                          // value={values.firstname}
                          name="firstname"
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
                          // value={values.lastname}
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
                          // value={values.lastname}
                          name="lastnameEng"
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
                          // value={values.lastname}
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

                    {/* date of birth */}
                    {/* <Grid item xs={12} sm={6}>
                  <Stack spacing={1.25}>
                    <InputLabel htmlFor="personal-date">Date of Birth (+18)</InputLabel>
                    <Stack direction="row" justifyContent="space-between" alignItems="center" spacing={2}>
                      <Select
                        fullWidth
                        value={values.dob.getMonth().toString()}
                        name="dob-month"
                        onChange={(e) => handleChangeMonth(e, values.dob, setFieldValue)}
                      >
                        <MenuItem value="0">January</MenuItem>
                        <MenuItem value="1">February</MenuItem>
                        <MenuItem value="2">March</MenuItem>
                        <MenuItem value="3">April</MenuItem>
                        <MenuItem value="4">May</MenuItem>
                        <MenuItem value="5">June</MenuItem>
                        <MenuItem value="6">July</MenuItem>
                        <MenuItem value="7">August</MenuItem>
                        <MenuItem value="8">September</MenuItem>
                        <MenuItem value="9">October</MenuItem>
                        <MenuItem value="10">November</MenuItem>
                        <MenuItem value="11">December</MenuItem>
                      </Select>
                      <Select
                        fullWidth
                        value={values.dob.getDate().toString()}
                        name="dob-date"
                        onBlur={handleBlur}
                        onChange={(e) => handleChangeDay(e, values.dob, setFieldValue)}
                        MenuProps={MenuProps}
                      >
                        {[
                          1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31
                        ].map((i) => (
                          <MenuItem
                            key={i}
                            value={i}
                            disabled={
                              (values.dob.getMonth() === 1 && i > (values.dob.getFullYear() % 4 === 0 ? 29 : 28)) ||
                              (values.dob.getMonth() % 2 !== 0 && values.dob.getMonth() < 7 && i > 30) ||
                              (values.dob.getMonth() % 2 === 0 && values.dob.getMonth() > 7 && i > 30)
                            }
                          >
                            {i}
                          </MenuItem>
                        ))}
                      </Select>
                      <LocalizationProvider dateAdapter={AdapterDateFns}>
                        <DatePicker
                          views={['year']}
                          value={values.dob}
                          maxDate={maxDate}
                          onChange={(newValue) => {
                            setFieldValue('dob', newValue);
                          }}
                          renderInput={(params) => <TextField fullWidth {...params} helperText={null} />}
                        />
                      </LocalizationProvider>
                    </Stack>
                    {touched.dob && errors.dob && (
                      <FormHelperText error id="personal-dob-helper">
                        {errors.dob}
                      </FormHelperText>
                    )}
                  </Stack>
                </Grid> */}

                    {/* default mobile number */}
                    {/* <Grid item xs={12} sm={6}>
                  <Stack spacing={1.25}>
                    <InputLabel htmlFor="personal-phone">Phon</InputLabel>
                    <Stack direction="row" justifyContent="space-between" alignItems="center" spacing={2}>
                      <Select value={values.countryCode} name="countryCode" onBlur={handleBlur} onChange={handleChange}>
                        <MenuItem value="+91">+91</MenuItem>
                        <MenuItem value="1-671">1-671</MenuItem>
                        <MenuItem value="+36">+36</MenuItem>
                        <MenuItem value="(225)">(255)</MenuItem>
                        <MenuItem value="+39">+39</MenuItem>
                        <MenuItem value="1-876">1-876</MenuItem>
                        <MenuItem value="+7">+7</MenuItem>
                        <MenuItem value="(254)">(254)</MenuItem>
                        <MenuItem value="(373)">(373)</MenuItem>
                        <MenuItem value="1-664">1-664</MenuItem>
                        <MenuItem value="+95">+95</MenuItem>
                        <MenuItem value="(264)">(264)</MenuItem>
                      </Select>
                      <TextField
                        fullWidth
                        id="personal-contact"
                        value={values.contact}
                        name="contact"
                        onBlur={handleBlur}
                        onChange={handleChange}
                        placeholder="Contact Number"
                      />
                    </Stack>
                    {touched.contact && errors.contact && (
                      <FormHelperText error id="personal-contact-helper">
                        {errors.contact}
                      </FormHelperText>
                    )}
                  </Stack>
                </Grid> */}

                    {/* job title */}
                    <Grid item xs={12} sm={6}>
                      <Stack spacing={1.25}>
                        <InputLabel htmlFor="job-title">Job Title</InputLabel>
                        <Select id="job-title" value={values.jobTitle} name="jobTitle" onChange={handleChange} label="Select Role">
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
                        <Select id="lang" value={values.lang} name="lang" onChange={handleChange} label="Select Role">
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
                          // value={values.email}
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
                        <InputLabel htmlFor="personal-email">Email Address</InputLabel>
                        <TextField
                          type="email"
                          fullWidth
                          value={values.email}
                          name="email"
                          onBlur={handleBlur}
                          onChange={handleChange}
                          id="personal-email"
                          placeholder="Email Address"
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
                          // value={values.lastname}
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
                          // value={values.lastname}
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
            <Box>
              <Stack direction="row" justifyContent="flex-end" alignItems="center" spacing={2} sx={{ mt: 2 }}>
                <Button variant="outlined" color="secondary">
                  Cancel
                </Button>
                <Button disabled={isSubmitting || Object.keys(errors).length !== 0} type="submit" variant="contained">
                  Save
                </Button>
              </Stack>
            </Box>
          </Grid>
        </form>
      )}
    </Formik>
  );
};

export default TabPersonal;
