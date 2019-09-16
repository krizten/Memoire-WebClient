import { monthsShortEnum, daysOfTheWeekEnum, monthsFullEnum } from '../enums';

export const getMonthShort = (month: number) => {
  switch (month) {
    case 0:
      return monthsShortEnum.JAN;
    case 1:
      return monthsShortEnum.FEB;
    case 2:
      return monthsShortEnum.MAR;
    case 3:
      return monthsShortEnum.APR;
    case 4:
      return monthsShortEnum.MAY;
    case 5:
      return monthsShortEnum.JUN;
    case 6:
      return monthsShortEnum.JUL;
    case 7:
      return monthsShortEnum.AUG;
    case 8:
      return monthsShortEnum.SEP;
    case 9:
      return monthsShortEnum.OCT;
    case 10:
      return monthsShortEnum.NOV;
    case 11:
      return monthsShortEnum.DEC;
  }
};

export const getMonthFull = (month: number) => {
  switch (month) {
    case 0:
      return monthsFullEnum.JAN;
    case 1:
      return monthsFullEnum.FEB;
    case 2:
      return monthsFullEnum.MAR;
    case 3:
      return monthsFullEnum.APR;
    case 4:
      return monthsFullEnum.MAY;
    case 5:
      return monthsFullEnum.JUN;
    case 6:
      return monthsFullEnum.JUL;
    case 7:
      return monthsFullEnum.AUG;
    case 8:
      return monthsFullEnum.SEP;
    case 9:
      return monthsFullEnum.OCT;
    case 10:
      return monthsFullEnum.NOV;
    case 11:
      return monthsFullEnum.DEC;
  }
};

export const getDayOfTheWeek = (day: number) => {
  switch (day) {
    case 0:
      return daysOfTheWeekEnum.SUN;
    case 1:
      return daysOfTheWeekEnum.MON;
    case 2:
      return daysOfTheWeekEnum.TUE;
    case 3:
      return daysOfTheWeekEnum.WED;
    case 4:
      return daysOfTheWeekEnum.THU;
    case 5:
      return daysOfTheWeekEnum.FRI;
    case 6:
      return daysOfTheWeekEnum.SAT;
  }
};

// Credits: https://stackoverflow.com/a/39466341/8910779
export const getOrdinalSuffix = (day: number) => {
  return `${day}${['st', 'nd', 'rd'][((((day + 90) % 100) - 10) % 10) - 1] || 'th'}`;
};
