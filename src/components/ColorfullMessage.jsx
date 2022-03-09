import React from "react";

const ColorhullMessage = (props) => {
  console.log('カラフル');
	const {color, children} = props;
  const contenStyle = {
    color,
    fontSize: '18px'
  };
	return (
		<p style={contenStyle}>{children}</p>
	);
}

export default ColorhullMessage;