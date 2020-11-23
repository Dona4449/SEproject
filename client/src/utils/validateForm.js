export default function validateInfo(values) {
  const errors = {};

  if (!values.name.trim()) {
    errors.name = 'Username required';
  }
  // else if (!/^[A-Za-z]+/.test(values.name.trim())) {
  //   errors.name = 'Enter a valid name';
  // }

  if (!values.emailId) {
    errors.emailId = 'Email required';
  } else if (!/\S+@\S+\.\S+/.test(values.emailId)) {
    errors.emailId = 'Email address is invalid';
  }
  if (!values.password) {
    errors.password = 'Password is required';
  } else if (values.password.length < 7) {
    errors.password = 'Password needs to be 6 characters or more';
  }

  if (!values.confirmPassword) {
    errors.confirmPassword = 'Password is required';
  } else if (values.confirmPassword !== values.password) {
    errors.confirmPassword = 'Passwords do not match';
  }
  return errors;
}