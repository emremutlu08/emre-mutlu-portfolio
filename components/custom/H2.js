export const H2 = (props) => {
  const { externalClasses, children } = props;

  return (
    <h2
      className={
        "bg-clip-text text-transparent text-3xl bg-gradient-to-r from-blue-200 to-blue-800 font-semibold " +
        externalClasses
      }
    >
      {children}
    </h2>
  );
};
