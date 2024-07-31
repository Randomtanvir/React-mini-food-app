// eslint-disable-next-line react/prop-types
const Button = ({ children, onClick }) => {
  return (
    <div>
      <button
        onClick={onClick}
        className="px-[10px] py-[6px] text-base bg-[#FF4343] text-white rounded-md hover:bg-[#CB2121] ease-in duration-200"
      >
        {children}
      </button>
    </div>
  );
};

export default Button;
