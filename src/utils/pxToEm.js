const pxToEm = (value) => {
  const conversion = value / 16;

  return `${conversion}em`;
};

export default pxToEm;
