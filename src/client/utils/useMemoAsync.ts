const useAsyncMemo = (fn: any): any => {
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

export default useAsyncMemo;
