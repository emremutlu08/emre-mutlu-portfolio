export const H1 = (props) => {
  const { externalClasses, children } = props;

  return (
    <h1
      className={
        "bg-clip-text text-transparent text-6xl bg-gradient-to-r from-blue-200 to-blue-800 font-bold " +
        externalClasses
      }
    >
      {children}
    </h1>
  );
};
