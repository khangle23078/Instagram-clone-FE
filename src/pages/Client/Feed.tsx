import React from 'react';
import Aside from '../../components/Aside';
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
        <Aside />
      </div>
    </div>
  );
};

export default Feed;
