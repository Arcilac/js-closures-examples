function greet(name) {
    return function (message) {
      return `Hi ${name}, ${message}`;
    };
  }
  
  const greetCamila = greet("Camila");
  console.log(greetCamila("welcome!")); // Hi Camila, welcome!
  