import React from 'react'

const CustomButton = ({
  text,
  bgColor,
  hoverCorlor,
  textColor,
  size,
}) => {
  return (
    <button
      style={{
        backgroundColor: bgColor,
        color: textColor,
        fontSize: size,
      }}
      className={`hover:bg-[${hoverCorlor}] font-bold py-3.5 px-2 rounded-xl flex-1 shadow-sm transition-all active:scale-95 hover:opacity-90`}
    >
      {text}
    </button>
  );
};
export default CustomButton
