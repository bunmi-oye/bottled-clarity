'use client';
import { useState } from 'react';
import Form from '../Form';
import toast from 'react-hot-toast';
import { Status } from '../Form/Form.type';

const WaitListForm = () => {
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState<Status>('idle');

  /**
   * Handles form submission by sending the email input value to a Google
   * Sheets API endpoint. The function sets the status to 'loading' during
   * the process, and updates it to 'success' or 'error' based on the result.
   * Shows a toast notification during the request lifecycle.
   *
   * @param {React.FormEvent<HTMLFormElement>} event - The form submit event
   */
  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    setStatus('loading');

    // Get the email input value from the form
    const target = event.target as typeof event.target & {
      email: { value: string };
    };
    const date = new Date();
    const inputValue: { [key: string]: string } = {
      Email: target.email.value,
      'Created At': date.toLocaleString(),
    };

    // Log the input values for debugging
    console.log(inputValue);

    // Construct the Google Sheets API endpoint URL
    const APP_ID = process.env.NEXT_PUBLIC_GOOGLE_WAITLIST_SHEET_ID;
    const baseURL = `https://script.google.com/macros/s/${APP_ID}/exec`;

    // Create a form data object from the input values
    const formData = new FormData();
    Object.keys(inputValue).forEach(key => {
      formData.append(key, inputValue[key]);
    });

    // POST the form data to the Google Sheets API
    try {
      const res = await toast.promise(
        fetch(baseURL, {
          method: 'POST',
          body: formData,
        }),
        {
          loading: 'Adding to waitlist...',
          success: 'Successfully added to waitlist!',
          error: 'Something went wrong! Please try again.',
        }
      );

      // Update the status based on the response status
      if (res.ok) {
        console.log('Request was successful:', res);
        setEmail('');
        setStatus('success');
      } else {
        console.log('Request Failed:', res);
        setStatus('error');
      }
    } catch (e) {
      console.error('Error during fetch:', e);
    } finally {
      // Reset the status to idle after the request is finished
      setStatus('idle');
    }
  };

  return (
    <Form
      formData={{ email }}
      onChange={e => setEmail(e.target.value)}
      onSubmit={handleSubmit}
      buttonLabel="Join waitlist"
      status={status}
    />
  );
};

export default WaitListForm;
