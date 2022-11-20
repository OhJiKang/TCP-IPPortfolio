import CheckCircle from "../../Asset/check-circle.png";

function StyleBox({ index, img, chosen, onClick }) {
  return (
    <div onClick={onClick} className="relative" index={index}>
      <img src={img} className="cursor-pointer hover:brightness-75" />
      {chosen && (
        <img
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-9 h-9"
          src={CheckCircle}
        />
      )}
    </div>
  );
}

export default StyleBox;
