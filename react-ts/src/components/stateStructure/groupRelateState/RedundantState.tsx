import React, { useState } from 'react';

export const Form: React.FC = () => {
  const [firstName, setFirstName] = useState<string>('');
  const [lastName, setLastName] = useState<string>('');
  const [fullName, setFullName] = useState<string>('');

  const handleFirstNameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newFirstName = e.target.value;
    setFirstName(newFirstName);
    setFullName(newFirstName + ' ' + lastName);
  };

  const handleLastNameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newLastName = e.target.value;
    setLastName(newLastName);
    setFullName(firstName + ' ' + newLastName);
  };

  return (
    <>
      <h2>Let’s check you in</h2>
      <label>
        First name:{' '}
        <input
          value={firstName}
          onChange={handleFirstNameChange}
        />
      </label>
      <br />
      <label>
        Last name:{' '}
        <input
          value={lastName}
          onChange={handleLastNameChange}
        />
      </label>
      <p>
        Your ticket will be issued to: <b>{fullName}</b>
      </p>
    </>
  );
};
