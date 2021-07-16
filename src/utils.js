export function convertMillis(millis) { // return string
    const mins = Math.floor(millis/(60*1000));
    const secs = Math.floor((millis % (60*1000))/1000);
    const makeDoubleZero = (input) => {
      return input<10 ? '0' + input : input;
    }
    return makeDoubleZero(mins) + ':' + makeDoubleZero(secs);
  }

  export const minsToMilli = (val) => {
    return val * 60 * 1000;
  }