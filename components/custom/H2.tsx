export const H2 = (props) => {
  const { externalClasses, children } = props;

  return (
    <h2
      className={
        "bg-clip-text text-transparent text-2xl bg-gradient-to-r bg-white  font-semibold " +
        externalClasses
      }
    >
      {children}
    </h2>
  );
};
