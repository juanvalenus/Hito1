export const formatNumber = (number) => {
  return new Intl.NumberFormat("es-CL").format(number);
};
