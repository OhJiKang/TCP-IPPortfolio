function ColorPalette({ style, onClick }) {
    return (
        <div onClick={onClick} className="grid grid-cols-[35%_35%_15%_15%] cursor-pointer hover:scale-105 transition-all ease-in-out duration-100">
            <div className={`${style.c1} rounded-l-lg `}></div>
            <div className={`${style.c2}`}></div>
            <div className={`${style.c3}`}></div>
            <div className={`${style.c4} rounded-r-lg`}></div>
        </div>
    )
}

export default ColorPalette;