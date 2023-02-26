import React from 'react';
import Instagram from './../assets/svgs/skill-icons_instagram.svg';
type Props = {};

const Loading = (props: Props) => {
  return (
    <div className="flex h-[655px] items-center  justify-center bg-[#F9F9F9]">
      <img src={Instagram} />
    </div>
  );
};

export default Loading;
