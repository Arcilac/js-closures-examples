function createSecret(secretMessage) {
    return {
      getSecret: () => secretMessage
    };
  }
  
  const mySecret = createSecret("👀 This is private");
  console.log(mySecret.getSecret()); // 👀 This is private
  