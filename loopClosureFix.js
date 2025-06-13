for (var i = 0; i < 3; i++) {
    setTimeout(function () {
      console.log("With var:", i); // 3, 3, 3
    }, 1000);
  }
  
  for (let j = 0; j < 3; j++) {
    setTimeout(function () {
      console.log("With let:", j); // 0, 1, 2
    }, 1000);
  }
  