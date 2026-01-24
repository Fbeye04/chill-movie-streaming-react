import Logo from "./components/Logo";
import Button from "./components/Button";
import Input from "./components/Input";
import googleIcon from "./assets/google.png";
import { IoMdInformationCircleOutline } from "react-icons/io";

export default function App() {
  return (
    <div>
      <Logo className='text-3xl' />

      <Button variant='primary'>Mulai</Button>
      <Button variant='secondary'>Daftar</Button>
      <Button variant='transparent'>
        <img
          src={googleIcon}
          className='w-[12px] md:w-[18px]'
          alt='google icon'
        />
        <span>Daftar dengan Google</span>
      </Button>
      <Button variant='transparent'>
        <IoMdInformationCircleOutline className='text-[16px] md:text-[24px]' />
        <span>Selengkapnya</span>
      </Button>

      <Input
        labelInput='Username'
        type='text'
        id='username'
        placeholder='Masukkan username'
      />
      <Input
        labelInput='Kata Sandi'
        type='password'
        id='password'
        placeholder='Masukkan kata sandi'
      />
      <Input
        labelInput='Konfirmasi Kata Sandi'
        type='password'
        id='confirm-password'
        placeholder='Masukkan kata sandi'
      />
    </div>
  );
}
