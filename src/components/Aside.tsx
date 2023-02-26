import React from 'react';
import { Link } from 'react-router-dom';
import Suggestion from './Suggestion';

type Props = {};

const Aside = (props: Props) => {
  return (
    <div className="my-6 w-[300px]">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-x-2">
          <div className="h-[56px] w-[56px] rounded-full bg-[#C4C4C4]"></div>
          <div className="user-info">
            <p className="text-sm font-medium">Johndoe</p>
            <p className="text-sm text-[#8E8E8E]">John Doe</p>
          </div>
        </div>
        <Link to={'/settings'} className="text-xs font-medium text-[#0095F6]">
          Change
        </Link>
      </div>
      <div className="flex justify-between py-5">
        <p className="text-sm text-[#8E8E8E]">Suggestions for you</p>
        <Link
          to={'/suggestions'}
          className="text-xs font-medium text-[#262626]"
        >
          See all
        </Link>
      </div>
      <Suggestion />
      <Suggestion />
      <Suggestion />
      <Suggestion />
    </div>
  );
};

export default Aside;
