const DecoratedHeader = ({ children, identifier }) => (
  <h2
    className={`${identifier} text-[28px] font-[700] mx-auto text-center w-max tracking-[0.4px] [background-image:_linear-gradient(90deg,_#1d78d9_30.12%,_rgba(210,_137,_50,_0.95)70%)] [-webkit-text-fill-color:_transparent] [-webkit-background-clip:_text] [background-clip:_text] [text-fill-color:_transparent]`}
  >
    {children}
  </h2>
);

export default DecoratedHeader;
