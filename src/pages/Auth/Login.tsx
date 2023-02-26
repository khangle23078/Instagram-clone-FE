import React from 'react';
import { Link } from 'react-router-dom';
import { useForm, SubmitHandler } from 'react-hook-form';
import Hero from './../../assets/images/frames.png';
import LogoImg from './../../assets/images/LOGO.png';
import Google from './../../assets/images/google.png';
type Props = {};

const Login = (props: Props) => {
  const {
    register,
    handleSubmit,
    formState: { errors, isDirty },
  } = useForm({
    defaultValues: {
      email: '',
      password: '',
    },
  });

  const onSubmit: SubmitHandler<any> = (data: any) => {
    console.log(data);
  };

  return (
    <div className="flex items-center justify-center bg-[#F9F9F9] py-5">
      <div className="hidden md:block">
        <img src={Hero} alt="" />
      </div>
      <div className="flex flex-col gap-[10px]">
        <div className="form-main rounded-md border-[1px] bg-white">
          <form onSubmit={handleSubmit(onSubmit)}>
            <img src={LogoImg} className="py-[25px] px-[83px]" />
            <div className="mx-[41px] mb-[15px]">
              <input
                type="text"
                {...register('email')}
                className="input-text"
                placeholder="usename, of email"
              />
            </div>
            <div className="mx-[41px] mb-[15px]">
              <input
                type="text"
                {...register('password')}
                className="input-text"
                placeholder="password"
              />
            </div>
            <div className="mx-[41px] mb-[10px]">
              <button
                type="submit"
                disabled={!isDirty}
                className="rounded bg-[#0095F6] py-2 px-[116px] text-sm text-white disabled:opacity-50"
              >
                Login
              </button>
            </div>
          </form>
          <div className="mx-[41px] flex flex-col items-center justify-center">
            <span className="my-2 text-[9px] font-medium uppercase text-[#959595] before:h-[2px] before:w-1 before:bg-[#D9D9D9]">
              or
            </span>
            <button className="mb-[21px] flex items-center justify-items-center gap-x-[24px] rounded-[59px] bg-[#EFEFEF] py-2 px-[60px]">
              <img src={Google} alt="" />
              <p className="text-center text-[11px] font-medium">
                Continue with google
              </p>
            </button>
            <Link
              to={'/forgot-password'}
              className="mb-6 text-xs text-[#0095F6]"
            >
              You forgot the password?
            </Link>
          </div>
        </div>
        <div className="flex justify-center gap-2 rounded-md border-[1px] bg-white py-6 px-[79px]">
          <p className="text-sm">You don't an account?</p>
          <Link to={'/signup'} className="text-sm font-medium text-[#0095F6]">
            Sign up
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Login;
