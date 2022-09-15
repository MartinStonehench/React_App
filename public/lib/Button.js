export function Button(props) {
  const style = {
    "font-size": "24px",
    "background-color": "black",
    "color": "yellow",
    "width": "150px",
    "height": "50px"
  };
  return /*#__PURE__*/React.createElement("div", {
    style: {
      "text-align": "center"
    }
  }, /*#__PURE__*/React.createElement("button", {
    style: style,
    onClick: props.click
  }, " ", props.caption, " "));
}