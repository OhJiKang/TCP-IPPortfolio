function RoundedIconWrapper({ children, className = "", onClickfunc }) {
  return (
    <div
      onClick={onClickfunc}
      className={` ${className} hover:bg-[#bbbbbb] cursor-pointer w-[40px] min-h-[40px]  flex flex-col justify-center items-center bg-white rounded-t-full rounded-b-full`}
    >
      {children}
    </div>
  );
}

export default RoundedIconWrapper;
