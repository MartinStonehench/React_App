export function Paragraph(props) {
  const style = {
    "color": props.color !== null ? props.color : "black",
    "font-size": props.fontsize,
    "text-align": props.alignment
  };
  return /*#__PURE__*/React.createElement("p", {
    style: style
  }, " ", props.text, " ");
}