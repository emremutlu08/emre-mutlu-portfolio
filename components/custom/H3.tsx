export const H3 = (props) => {
  const { externalClasses, children } = props;

  return (
    <h3 className={"text-lg md:text-2xl  font-black " + externalClasses}>
      {children}
    </h3>
  );
};
