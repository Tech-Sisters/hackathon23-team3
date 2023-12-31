/* eslint-disable react/prop-types */
import KeyboardBackspaceOutlinedIcon from "@mui/icons-material/KeyboardBackspaceOutlined";

const ButtonGroup = ({ next, previous }) => {
  return (
    <div className="flex items-center gap-2 mx-auto">
      <button
        aria-label="play_icon"
        className="hover:text-hover text-black-200 hover:bg-[#f3f3f3bc] rounded-full p-2"
        onClick={previous}
      >
        <KeyboardBackspaceOutlinedIcon className="text-3xl text-white" />
      </button>
      <button
        aria-label="play_icon"
        className="hover:text-rose-600 text-black-200 rotate-180  hover:bg-[#f3f3f3bc] rounded-full p-2"
        onClick={next}
      >
        <KeyboardBackspaceOutlinedIcon className="text-3xl text-white" />
      </button>
    </div>
  );
};

export default ButtonGroup;