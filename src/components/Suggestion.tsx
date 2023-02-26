import React from 'react';
import { Link } from 'react-router-dom';

type Props = {};

const Suggestion = (props: Props) => {
  return (
    <div>
      <div className="mb-3 flex items-center justify-between">
        <div className="flex items-center gap-x-2">
          <div className="h-[32px] w-[32px] rounded-full bg-[#C4C4C4]"></div>
          <div className="user-info">
            <p className="text-sm font-medium">Johndoe</p>
            <p className="text-sm text-[#8E8E8E]">John Doe</p>
          </div>
        </div>
        <Link to={'/settings'} className="text-xs font-medium text-[#0095F6]">
          Change
        </Link>
      </div>
    </div>
  );
};

export default Suggestion;
