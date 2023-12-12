const pxToRem = (value) => {
  const conversion = value / 16;

  return `${conversion}rem`;
};

export default pxToRem;
