import "./Braces.css";

const Braces = ({ children }) => {
  return (
    <div className="Braces">
        <div className="left"></div>
        <div className="top"></div>
      <div className="content">{children}</div>
      <div className="right"></div>
    </div>
  );
};

export default Braces;
