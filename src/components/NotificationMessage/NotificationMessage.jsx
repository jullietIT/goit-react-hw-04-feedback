import React from 'react';
import PropTypes from 'prop-types';
import { Message } from './NotificationMessage.styled';

export const Notification = ({ message }) => {
  return (
    <Message>
      <p>{message}</p>
    </Message>
  );
};

Notification.propTypes = {
  message: PropTypes.string,
};
export default Notification;
