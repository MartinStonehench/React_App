export function Headline(props) {
  const style = {
    "color": props.color !== null ? props.color : "black",
    "font-size": props.fontsize,
    "background-color": props.showbackground == "true" ? "black" : "white",
    "text-align": props.centered == "true" ? "center" : "none"
  };
  return /*#__PURE__*/React.createElement("h1", {
    style: style
  }, " ", props.text, " ");
}