/* eslint-disable no-unused-vars */
// material-ui
import { useOutletContext } from 'react-router';

import { useDispatch } from 'react-redux';
// icons
import { CloseOutlined } from '@ant-design/icons';

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
  ToggleButton,
  Autocomplete,
  Chip
} from '@mui/material';
// import { DatePicker, LocalizationProvider } from '@mui/x-date-pickers';
// import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';

// third party
import * as Yup from 'yup';
import { Formik } from 'formik';

// project import
import { openSnackbar } from 'store/reducers/snackbar';
// import { useInputRef } from './index';
// import countries from 'data/countries';
import MainCard from 'components/MainCard';

// style
import { useTheme } from '@mui/material/styles';
// assets
// import { CloseOutlined } from '@ant-design/icons';
import React from 'react';
function useInputRef() {
  return useOutletContext();
}

const TabDetails = () => {
  // theme
  const theme = useTheme();

  const maxDate = new Date();
  maxDate.setFullYear(maxDate.getFullYear() - 18);

  const dispatch = useDispatch();
  const inputRef = useInputRef();

  // custom code
  // const [role,setRole] = React.useState('')
  // const handleChange = (event) => {
  //   setRole(event.target.value)
  // }
  const [gend, setGend] = React.useState('male');
  const setChange = (event, newAlignment) => {
    setGend(newAlignment);
  };
  const skills = [
    'Adobe XD',
    'After Effect',
    'Angular',
    'Animation',
    'ASP.Net',
    'Bootstrap',
    'C#',
    'CC',
    'Corel Draw',
    'CSS',
    'DIV',
    'Dreamweaver',
    'Figma',
    'Graphics',
    'HTML',
    'Illustrator',
    'J2Ee',
    'Java',
    'Javascript',
    'JQuery',
    'Logo Design',
    'Material UI',
    'Motion',
    'MVC',
    'MySQL',
    'NodeJS',
    'npm',
    'Photoshop',
    'PHP',
    'React',
    'Redux',
    'Reduxjs & tooltit',
    'SASS',
    'SCSS',
    'SQL Server',
    'SVG',
    'UI/UX',
    'User Interface Designing',
    'Wordpress'
  ];

  return (
    <Formik
      initialValues={{
        firstname: 'Stebin',
        lastname: 'Ben',
        email: 'stebin.ben@gmail.com',
        dob: new Date('03-10-1993'),
        countryCode: '+91',
        printFrequency: 'val1',
        oraganizationsSize: 'val2',
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
          <Grid container columnSpacing={2} justifyContent="end">
            {/* right side  */}
            <Grid item md={7} xs={12}>
              <MainCard
                title="Organization Information"
                content={false}
                sx={{ '& .MuiInputLabel-root': { fontSize: '0.875rem', color: theme.palette.text.secondary } }}
              >
                <Box sx={{ p: 2.5 }}>
                  <Grid container spacing={3}>
                    {/* first namee english */}
                    <Grid item xs={12} sm={6}>
                      <Stack spacing={1.25}>
                        <InputLabel htmlFor="personal-first-name-eng">First Name (English)</InputLabel>
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
                        <InputLabel htmlFor="personal-first-name-ar">First Name (Arabic)</InputLabel>
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
                    {/* Printing Frequency */}
                    <Grid item xs={12} sm={6}>
                      <Stack spacing={1.25}>
                        <InputLabel htmlFor="printFrequency">Printing Frequency</InputLabel>
                        <Select id="printFrequency" value={values.printFrequency} name="printFrequency" onChange={handleChange}>
                          <MenuItem value="val1">Once a month</MenuItem>
                          <MenuItem value="val2">Value2</MenuItem>
                          <MenuItem value="val3">Client3</MenuItem>
                        </Select>
                      </Stack>
                    </Grid>
                    {/*Organization Size */}
                    <Grid item xs={12} sm={6}>
                      <Stack spacing={1.25}>
                        <InputLabel htmlFor="orgSize">Organization Size</InputLabel>
                        <Select id="orgSize" value={values.oraganizationsSize} name="oraganizationsSize" onChange={handleChange}>
                          <MenuItem value="val1">1-5 Employees</MenuItem>
                          <MenuItem value="val2">val2</MenuItem>
                          <MenuItem value="val3">val3</MenuItem>
                        </Select>
                      </Stack>
                    </Grid>
                    {/* Category  */}
                    <Grid item xs={12}>
                      <Box sx={{ display: 'flex', flexWrap: 'wrap', listStyle: 'none', m: 0 }} component="ul">
                        <Autocomplete
                          multiple
                          fullWidth
                          id="tags-outlined"
                          options={skills}
                          value={values.skill}
                          onBlur={handleBlur}
                          getOptionLabel={(label) => label}
                          onChange={(event, newValue) => {
                            setFieldValue('skill', newValue);
                          }}
                          renderInput={(params) => <TextField {...params} name="skill" placeholder="Add Skills" />}
                          renderTags={(value, getTagProps) =>
                            value.map((option, index) => (
                              <Chip
                                key={index}
                                {...getTagProps({ index })}
                                variant="combined"
                                label={option}
                                deleteIcon={<CloseOutlined style={{ fontSize: '0.75rem' }} />}
                                sx={{ color: 'text.primary' }}
                              />
                            ))
                          }
                          sx={{
                            '& .MuiOutlinedInput-root': {
                              p: 0,
                              '& .MuiAutocomplete-tag': {
                                m: 1
                              },
                              '& fieldset': {
                                display: 'none'
                              },
                              '& .MuiAutocomplete-endAdornment': {
                                display: 'none'
                              },
                              '& .MuiAutocomplete-popupIndicator': {
                                display: 'none'
                              }
                            }
                          }}
                        />
                      </Box>
                    </Grid>
                  </Grid>
                </Box>
              </MainCard>
            </Grid>
            {/* left side */}
            <Grid item md={5} xs={12}>
              <MainCard
                title="Contact Details"
                content={false}
                sx={{ '& .MuiInputLabel-root': { fontSize: '0.875rem', color: theme.palette.text.secondary } }}
              >
                <Box sx={{ p: 2.5 }}>
                  <Grid container spacing={3}>
                    {/* Mobile Number */}
                    <Grid item xs={12}>
                      <Stack spacing={1.25}>
                        <InputLabel htmlFor="personal-mobile">Mobile Number</InputLabel>
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
                        {/* {touched.email && errors.email && (
                      <FormHelperText error id="personal-email-helper">
                        {errors.email}
                      </FormHelperText>
                    )} */}
                      </Stack>
                    </Grid>
                    {/* Mobile Number 2 */}
                    <Grid item xs={12}>
                      <Stack spacing={1.25}>
                        <InputLabel htmlFor="personal-mobile-2">Mobile Number 2</InputLabel>
                        <TextField
                          type="number"
                          fullWidth
                          // value={values.email}
                          name="mobile2"
                          onBlur={handleBlur}
                          onChange={handleChange}
                          id="personal-mobile-2"
                          placeholder="example"
                        />
                        {/* {touched.email && errors.email && (
                      <FormHelperText error id="personal-email-helper">
                        {errors.email}
                      </FormHelperText>
                    )} */}
                      </Stack>
                    </Grid>
                    {/* landline */}
                    <Grid item xs={12}>
                      <Stack spacing={1.25}>
                        <InputLabel htmlFor="landline">Landline</InputLabel>
                        <TextField
                          type="number"
                          fullWidth
                          // value={values.email}
                          name="landline"
                          onBlur={handleBlur}
                          onChange={handleChange}
                          id="landline"
                          placeholder="example"
                        />
                        {/* {touched.email && errors.email && (
                      <FormHelperText error id="personal-email-helper">
                        {errors.email}
                      </FormHelperText>
                    )} */}
                      </Stack>
                    </Grid>
                    {/* email */}
                    <Grid item xs={12}>
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
                    {/* website */}
                    <Grid item xs={12}>
                      <Stack spacing={1.25}>
                        <InputLabel htmlFor="website">Website</InputLabel>
                        <TextField
                          type="text"
                          fullWidth
                          // value={values.email}
                          name="website"
                          onBlur={handleBlur}
                          onChange={handleChange}
                          id="website"
                          placeholder="example"
                        />
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

export default TabDetails;
