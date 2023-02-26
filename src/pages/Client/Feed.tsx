import React from 'react';
import Aside from '../../components/Aside';
import Footer from '../../components/Footer';
import Post from '../../components/Post';

type Props = {};

const Feed = (props: Props) => {
  return (
    <div className="mx-auto max-w-5xl">
      <div className="flex gap-x-6">
        <div className="left-side">
          <div className="border-1 my-6 h-[119px] w-[600px] rounded-md shadow"></div>
          <Post />
          <Post />
        </div>
        <div className="flex flex-col">
          <Aside />
          <Footer />
        </div>
      </div>
    </div>
  );
};

export default Feed;
