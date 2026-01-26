const Button = ({ children, variant, className, type = "button" }) => {
  const variants = {
    primary:
      "bg-brand-primary border-transparent font-bold py-1.5 px-3 hover:bg-blue-700 transition-colors",
    secondary:
      "w-full bg-surface-light border-border-subtle font-semibold py-2 px-3 md:py-3.5 md:px-5 hover:bg-gray-800 transition-colors",
    transparent:
      "w-full bg-transparent border-border-subtle font-semibold py-2 px-3 md:py-3.5 md:px-5 hover:bg-white/10 transition-colors",
  };

  return (
    <button
      type={type}
      className={`border text-white rounded-3xl text-xs md:text-lg cursor-pointer flex justify-center items-center gap-3 md:gap-5 transition-all duration-200 active:scale-95 ${variants[variant]} ${className}`}>
      {children}
    </button>
  );
};

export default Button;
