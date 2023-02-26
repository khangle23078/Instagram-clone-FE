import React from 'react';
import Options from './../assets/svgs/options.svg';
import Like from './../assets/svgs/like.svg';
import Comment from './../assets/svgs/comments.svg';
import Share from './../assets/svgs/share.svg';
import Save from './../assets/svgs/save.svg';

type Props = {};

const Post = (props: Props) => {
  return (
    <div className="mb-6 rounded border-2 shadow-sm">
      <div className="flex items-center justify-between p-3">
        <div className="flex items-center gap-2">
          <div className="h-8 w-8 rounded-full bg-[#C4C4C4]"></div>
          <p>johndoe</p>
        </div>
        <img src={Options} alt="" />
      </div>
      <div className="h-[600px] w-[600px] bg-[#C4C4C4]"></div>
      <div className="border-b-2 bg-white px-[20px]">
        <div className="flex items-center justify-between py-[15px]">
          <div className="left-side flex items-center gap-x-2">
            <img src={Like} className="cursor-pointer" />
            <img src={Comment} className="cursor-pointer" />
            <img src={Share} className="cursor-pointer" />
          </div>
          <img src={Save} className="cursor-pointer" />
        </div>
        <p className="text-sm font-semibold">9.999 likes</p>
        <p className="my-2 max-w-[560px] truncate text-sm">
          <span className="mb-2 text-sm font-semibold">johndoe: </span>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam,
          purus sit amet luctus venenatis, lectus magna fringilla urna,
          porttitor
        </p>
        <p className="mb-3 text-xs uppercase text-[#8E8E8E]">9 hours ago</p>
      </div>
      <form>
        <div className="flex justify-between p-4">
          <input
            type="text"
            placeholder="Add comment..."
            className="max-w-full placeholder:text-xs focus-visible:ring-0"
          />
          <button className="text-sm text-[#0095F6] disabled:opacity-50">
            Post
          </button>
        </div>
      </form>
    </div>
  );
};

export default Post;
