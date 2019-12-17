import { PrefecturePopulation } from "../types";

const useMemoAsync = (fn: any): any => {
  const memo = {};
  return async (...args) => {
    const hash = JSON.stringify(args);

    if (memo[hash]) {
      return memo[hash];
    }

    const result = await fn(args);
    memo[hash] = result;

    return result;
  };
};

const abbreviateNumber = (num: number): string | boolean => {
  function helper(
    num: number,
    decimals: number,
    abbriviation: string,
    places = 2
  ): string {
    const multiplier = 10 ** places;
    const calculated = num / 10 ** decimals;
    const rounded = Math.ceil(calculated * multiplier) / multiplier;

    return `${rounded} ${abbriviation}`;
  }

  if (num >= 10 ** 9) {
    return helper(num, 9, "B");
  }
  if (num >= 10 ** 6) {
    return helper(num, 6, "M");
  }
  if (num >= 10 ** 3) {
    return helper(num, 3, "K");
  }
  return Math.round(num).toString();
};

const sumPopulation = (prefecturePopulations: PrefecturePopulation[]): number =>
  prefecturePopulations
    .map((elem: PrefecturePopulation): string => elem.population)
    .reduce((a: number, elem: string): number => a + parseInt(elem, 10), 0);

const getLog = (value: number, total: number): number =>
  value ** 0.5 / total ** 0.5;

export { useMemoAsync, abbreviateNumber, sumPopulation, getLog };
