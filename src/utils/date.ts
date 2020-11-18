export const timeFormatOptions = {
  hour12: false,
  hour: '2-digit',
  minute: '2-digit',
};

export const dateFormatOptions = {
  weekday: 'short',
  year: 'numeric',
  month: 'short',
  day: '2-digit',
};

export const LOCALES = 'en-US';

export const getDateTimeFormattedString = (date: Date): string =>
  date.toLocaleTimeString(LOCALES, timeFormatOptions);

export const getDateFormattedString = (date: Date): string =>
  date.toLocaleDateString(LOCALES, dateFormatOptions);
