function memoizedAdd() {
    const cache = {};
  
    return function (num) {
      if (num in cache) {
        console.log("Fetching from cache");
        return cache[num];
      } else {
        console.log("Calculating result");
        const result = num + 10;
        cache[num] = result;
        return result;
      }
    };
  }
  
  const add = memoizedAdd();
  
  console.log(add(5)); // Calculating result → 15
  console.log(add(5)); // Fetching from cache → 15
  