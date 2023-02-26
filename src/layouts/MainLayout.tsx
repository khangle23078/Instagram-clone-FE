import React from 'react';
import { Outlet } from 'react-router-dom';
import Header from '../components/Header';
type Props = {};

const FeedLayout = (props: Props) => {
  return (
    <div>
      <Header />
      <Outlet />
    </div>
  );
};

export default FeedLayout;
