import { monthsEnum } from '../enums';

export const getMonthString = (month: number) => {
  switch (month) {
    case 0:
      return monthsEnum.JAN;
    case 1:
      return monthsEnum.FEB;
    case 2:
      return monthsEnum.MAR;
    case 3:
      return monthsEnum.APR;
    case 4:
      return monthsEnum.MAY;
    case 5:
      return monthsEnum.JUN;
    case 6:
      return monthsEnum.JUL;
    case 7:
      return monthsEnum.AUG;
    case 8:
      return monthsEnum.SEP;
    case 9:
      return monthsEnum.OCT;
    case 10:
      return monthsEnum.NOV;
    case 11:
      return monthsEnum.DEC;
  }
};
