import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
// import Notification from './day0809/Notification';
import NotificationList from './day0809/NotificationList';
import Board from './day0809/tictactoe/Board';

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <React.StrictMode>
    {/* <Clock /> */}
    {/* <CommentList /> */}
    {/* <Notification /> */}
    {/* <NotificationList /> */}
    <Board />
  </React.StrictMode>
);