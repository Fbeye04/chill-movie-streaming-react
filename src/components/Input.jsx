import { IoMdEyeOff } from "react-icons/io";
import { IoMdEye } from "react-icons/io";
import { useState } from "react";

const Input = ({ labelInput, type, name, id, placeholder }) => {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <div className='flex flex-col gap-1 md:gap-1.5 mb-7'>
      <label className='text-xs md:text-lg text-white'>{labelInput}</label>
      <div className='border border-border-subtle rounded-xl md:rounded-3xl bg-transparent flex items-center px-3.5 md:px-5 transition-all focus-within:border-brand-primary focus-within:ring-1 focus-within:ring-brand-primary'>
        <input
          type={type === "password" && showPassword ? "text" : type}
          name={name}
          id={id}
          placeholder={placeholder}
          required
          className='bg-transparent border-none text-white outline-none flex-1 w-full md:py-3.5 py-2.5 text-xxs md:text-base'
        />
        {type === "password" && (
          <button
            type='button'
            className='text-secondary'
            onClick={() => setShowPassword(!showPassword)}>
            {showPassword ? <IoMdEye /> : <IoMdEyeOff />}
          </button>
        )}
      </div>
    </div>
  );
};

export default Input;
