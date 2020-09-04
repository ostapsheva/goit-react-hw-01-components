import React, { Fragment } from 'react';
import Profile from './Profile/Profile';
import Statistics from './Statistics/Statistics';
import FriendList from './FriendList/FriendList';
import TransactionHistory from './TransactionHistory/TransactionHistory';
import user from '../assets/user.json';
import statisticalData from '../assets/statistical-data.json';
import friends from '../assets/friends.json';
import transactions from '../assets/transactions.json';

export default function App() {
  return (
    <Fragment>
      <Profile {...user} />
      <Statistics title="Upload stats" stats={statisticalData} />
      <FriendList friends={friends} />
      <TransactionHistory items={transactions} />
    </Fragment>
  );
}
