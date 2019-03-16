
export const commaNum = n => n < 1000 ? n
  : commaNum(~~(n / 1000)) + ','
  + (n % 1000 + '').padStart(3, '0');
