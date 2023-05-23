const crypto = require("crypto");

export const getRandomNumber = (length) =>
  Math.floor(Math.pow(10, length - 1) + Math.random() * (Math.pow(10, length) - Math.pow(10, length - 1) - 1));

export const getRandomString = (max = 2) => {
  return crypto.randomBytes(Math.max(max, 5)).toString("hex").substr(0, max).toUpperCase();
};

export const to2DP = (num = 0) => {
  return Math.round((parseFloat(num) + Number.EPSILON) * 100) / 100;
};

export const decimalInputHandler = (evt) => {
  const val = evt.target.value.replace(/[^0-9.]/g, "");
  evt.target.value = val.replace(/(\..*)\./g, "$1");

  return evt.target.value;
};

export const digitInputHandler = (evt, allowed = 10e10) => {
  const value = (evt.target.value = evt.target.value.replace(/[^0-9]/g, ""));
  evt.target.value = value.replace(/(\..*)\./g, "$1").substr(0, allowed);
  return evt.target.value;
};

export const compose =
  (...functions) =>
  (args) =>
    functions.reduceRight((arg, fn) => fn(arg), args);

export const queryString = (obj) =>
  "?" +
  Object.keys(obj)
    .filter((k) => !!obj[k])
    .map((k) => `${encodeURIComponent(k)}=${encodeURIComponent(obj[k])}`)
    .join("&");

export const noop = () => {};

export const throttle = (func, limit) => {
  let lastFunc;
  let lastRan;
  return function () {
    const context = this;
    const args = arguments;
    if (!lastRan) {
      func.apply(context, args);
      lastRan = Date.now();
    } else {
      clearTimeout(lastFunc);
      lastFunc = setTimeout(function () {
        if (Date.now() - lastRan >= limit) {
          func.apply(context, args);
          lastRan = Date.now();
        }
      }, limit - (Date.now() - lastRan));
    }
  };
};

export function debounce(callback, wait) {
  let timeout;
  return function () {
    const context = this;
    const args = arguments;

    clearTimeout(timeout);
    timeout = setTimeout(function () {
      callback.apply(context, args);
    }, wait);
  };
}

export const parseNumber = (val = "") => {
  const num = val ? val.replace(/[^-0-9.]/g, "") : 0;

  return +num || 0;
};

export const luhnCheck = (num) => {
  let arr = (num + "")
    .split("")
    .reverse()
    .map((x) => parseInt(x));
  let lastDigit = arr.splice(0, 1)[0];
  let sum = arr.reduce((acc, val, i) => (i % 2 !== 0 ? acc + val : acc + ((val * 2) % 9) || 9), 0);
  sum += lastDigit;
  return sum % 10 === 0;
};

export const isNotSafari = () => !/apple/i.test(navigator?.vendor);
