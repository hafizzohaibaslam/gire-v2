export const formatNumber = (number: number) => {
  return number <= 9 ? `0${number}` : number;
};
