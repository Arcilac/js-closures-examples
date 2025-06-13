function createTimer() {
    const start = Date.now();
  
    return function () {
      const now = Date.now();
      return `${(now - start) / 1000}s elapsed`;
    };
  }
  
  const timer = createTimer();
  
  setTimeout(() => {
    console.log(timer()); // ~2s elapsed
  }, 2000);
  