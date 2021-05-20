export const H1 = (props) => {
  const { externalClasses, children } = props;

  return (
    <h1
      className={
        "bg-clip-text text-transparent text-7xl bg-white font-black " +
        externalClasses
      }
    >
      {children}
    </h1>
  );
};
