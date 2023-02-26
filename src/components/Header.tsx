import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import Logo from './../assets/images/LOGO2.png';
import Home from './../assets/svgs/home-active.svg';
import Add from './../assets/svgs/add.svg';
import Message from './../assets/svgs/msg.svg';
import Likes from './../assets/svgs/likes.svg';
import Search from './../assets/svgs/search.svg';

type Props = {};

const Header = (props: Props) => {
  return (
    <div className="shadow-sm">
      <div className="flex items-center justify-around py-3">
        <img src={Logo} alt="" />
        <form className="relative">
          <img src={Search} alt="" className="absolute bottom-2.5 left-4" />
          <input
            type="text"
            className="h-[36px] w-[252px] rounded-md bg-[#EFEFEF] p-2 text-xs placeholder:pl-[40px]"
            placeholder="Search"
          />
        </form>
        <nav className="flex gap-x-[25px]">
          <NavLink to={'/'}>
            <img src={Home} alt="" />
          </NavLink>
          <NavLink to={'/message'}>
            <img src={Message} alt="" />
          </NavLink>
          <NavLink to={'/add'}>
            <img src={Add} alt="" />
          </NavLink>
          <NavLink to={'/likes'}>
            <img src={Likes} alt="" />
          </NavLink>
          <div className="relative h-6 w-6 cursor-pointer rounded-full bg-[#C4C4C4]"></div>
        </nav>
      </div>
    </div>
  );
};

export default Header;
