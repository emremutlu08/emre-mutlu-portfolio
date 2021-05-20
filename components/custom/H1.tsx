export const H1 = (props) => {
  const { externalClasses, children } = props;

  return (
    <h1
      className={
        "bg-clip-text text-transparent text-5xl bg-white  font-bold " +
        externalClasses
      }
    >
      {children}
    </h1>
  );
};
