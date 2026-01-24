import movieOpen from "../assets/movie-open.svg";

const Logo = ({ className }) => {
  return (
    <div className='flex items-center gap-[4px] text-white'>
      <img src={movieOpen} alt='chill logo' />
      <span className={`font-londrina uppercase ${className}`}>chill</span>
    </div>
  );
};

export default Logo;
