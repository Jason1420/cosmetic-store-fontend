export function SampleNextArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{
        ...style, display: "block",
        background: "rgb(255 177 192)",
        color: "white",
        position: "absolute",
        right: "11px",
        top: "105px",
        zIndex: "100",
        borderRadius: "8px",
        border: "0px",

      }}
      onClick={onClick}
    />
  );
}

export function SamplePrevArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{
        ...style, display: "block",
        background: "rgb(255 177 192)",
        color: "white",
        position: "absolute",
        left: "11px",
        top: "105px",
        zIndex: "100",
        borderRadius: "8px",
        border: "0px",
      }}
      onClick={onClick}
    />
  );
}