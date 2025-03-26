const today = new Date();
const birthday = new Date("December 17, 1995 03:24:00"); // 避けてください。すべてのランタイムで動作するとは限りません。
const birthday2 = new Date("1995-12-17T03:24:00"); // これは標準化されており、動作が信頼できます
const birthday3 = new Date(1995, 11, 17); // 月は 0 起点です
const birthday4 = new Date(1995, 11, 17, 3, 24, 0);
const birthday5 = new Date