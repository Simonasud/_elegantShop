import React from 'react';
import { Formik, FormikErrors } from 'formik';

type NewsletterFormValues = {
  email: string;
};

const NewsletterForm: React.FC = () => {
  const handleSubmit = (values: NewsletterFormValues): void => {
    console.log('Submitted with:', values.email);
  };

  return (
    <Formik
      initialValues={{ email: '' }}
      onSubmit={handleSubmit}
      validate={(
        values: NewsletterFormValues
      ): FormikErrors<NewsletterFormValues> => {
        const errors: FormikErrors<NewsletterFormValues> = {};
        if (!values.email) {
          errors.email = 'Required';
        } else if (
          !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
        ) {
          errors.email = 'Invalid email address';
        }
        return errors;
      }}
    >
      {({ handleSubmit }) => (
        <form onSubmit={handleSubmit}>
          <input type='email' name='email' placeholder='Email address' />
          <button type='submit'>Signup</button>
        </form>
      )}
    </Formik>
  );
};

export default NewsletterForm;
