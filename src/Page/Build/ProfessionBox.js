function ProfessionBox({ name, img, onClick, chosen }) {
  return (
    <div
      onClick={onClick}
      className="relative w-[180px] h-[180px] group cursor-pointer"
    >
      {chosen ? (
        <>
          <img className="brightness-75" src={img} />
          <div className="h-[40px] opacity-100 transition-opacity ease-in-out bg-black absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-white flex justify-center items-center p-3 rounded-[10px]">
            {name}
          </div>
        </>
      ) : (
        <>
          <img className="group-hover:brightness-75" src={img} />
          <div className="h-[40px] group-hover:opacity-100 opacity-0 transition-opacity ease-in-out bg-black absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-white flex justify-center items-center p-3 rounded-[10px]">
            {name}
          </div>
        </>
      )}
    </div>
  );
}

export default ProfessionBox;