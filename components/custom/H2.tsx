export const H2 = (props) => {
  const { externalClasses, children } = props;

  return (
    <h2 className={"text-2xl md:text-4xl  font-black " + externalClasses}>
      {children}
    </h2>
  );
};
