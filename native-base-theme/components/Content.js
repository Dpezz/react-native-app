import variable from "./../variables/platform";

export default (variables = variable) => {
  const contentTheme = {
    flex: 10,
    backgroundColor: "transparent",
    padding: 10,
    "NativeBase.Segment": {
      borderWidth: 0,
      backgroundColor: "transparent",
    }
  };

  return contentTheme;
};
