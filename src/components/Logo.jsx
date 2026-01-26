import movieOpen from "../assets/movie-open.svg";

const Logo = ({ className }) => {
  return (
    <div className='flex items-center gap-2 text-white'>
      <img src={movieOpen} className='w-7 md:w-10' alt='chill logo' />
      <span
        className={`font-londrina uppercase text-3xl md:text-5xl ${className}`}>
        chill
      </span>
    </div>
  );
};

export default Logo;
