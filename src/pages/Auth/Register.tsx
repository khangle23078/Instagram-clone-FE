import React from 'react';
import { Link } from 'react-router-dom';
import Logo from './../../assets/images/LOGO.png';
import Google from './../../assets/images/google.png';

type Props = {};

const Register = (props: Props) => {
  return (
    <div className=" bg-[#F9F9F9] py-5">
      <div className="flex flex-col items-center justify-center">
        <div className="my-2 rounded-md border-[1px] bg-white px-[41px]">
          <div className="flex flex-col justify-center">
            <img src={Logo} alt="logo" className="mt-[32px]" />
            <p className="my-3 max-w-[270px] text-center text-lg font-medium text-[#8E8E8E]">
              Sign up to see photos and videos of your friends.
            </p>
            <button className="flex items-center justify-items-center gap-x-[24px] rounded-[59px] bg-[#EFEFEF] py-2 px-[60px]">
              <img src={Google} alt="" />
              <p className="text-center text-[11px] font-medium">
                Continue with google
              </p>
            </button>
            <p className="py-3 text-center text-xs font-medium uppercase text-[#959595]">
              or
            </p>
          </div>

          <form>
            <div className="mb-2 ">
              <input type="text" className="input-text" placeholder="Email" />
            </div>
            <div className="mb-2">
              <input
                type="text"
                className="input-text"
                placeholder="Full name"
              />
            </div>
            <div className="mb-2">
              <input
                type="text"
                className="input-text"
                placeholder="User name"
              />
            </div>
            <div className="">
              <input
                type="text"
                className="input-text"
                placeholder="Password"
              />
            </div>
            <button
              type="submit"
              className="mt-4 mb-[23px] rounded bg-[#0095F6] py-2 px-[116px] text-sm text-white disabled:opacity-50"
            >
              Login
            </button>
          </form>

          <p className="max-w-[268px] pb-8 text-center text-xs text-[#8E8E8E]">
            By signing up, you agree to our Terms, Data Policy and Cookies
            Policy.
          </p>
        </div>
        <div className="flex justify-center rounded-md border-[1px] bg-white py-6 px-[79px]">
          <p className="text-sm">You don’t have an account?</p>
          <Link to={'/login'} className="text-sm font-medium text-[#0095F6]">
            Join
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Register;
