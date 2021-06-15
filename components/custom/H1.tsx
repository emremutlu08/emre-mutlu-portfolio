export const H1 = (props) => {
  const { externalClasses, children } = props;

  return (
    <h1 className={"text-4xl md:text-7xl font-black " + externalClasses}>
      {children}
    </h1>
  );
};
