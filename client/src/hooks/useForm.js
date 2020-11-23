/* eslint-disable no-inner-declarations */
import { useState, useEffect } from 'react';
import axios from '../axios';

const useForm = (callback, validate) => {
  const [values, setValues] = useState({
    name: '',
    emailId: '',
    password: '',
    confirmPassword: ''
  });
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setValues({
      ...values,
      [name]: value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setErrors(validate(values));
    setIsSubmitting(true);
  };

  useEffect(() => {
    if (Object.keys(errors).length === 0 && isSubmitting) {
      // callback();
      if (values.name) {
        async function fetchData() {
          try {
            await axios({
              method: 'post',
              url: '/user/signup',
              data: values
            });
          } catch (err) {
            console.log(err);
          }
        }
        fetchData();
      }
    }
  }, [errors]);

  return { handleChange, handleSubmit, values, errors };
};

export default useForm;