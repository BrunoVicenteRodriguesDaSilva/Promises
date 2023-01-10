//Promise chain
const fakeRequestPromise = (url) => {
  return new Promise((resolve, reject) => {
    const delay = Math.floor(Math.random() * 4500) + 500;
    setTimeout(() => {
      if (delay > 4000) {
        reject("Connection Timeout :(");
      } else {
        resolve(`Here is your fake data from ${url}`);
      }
    }, delay);
  });
};

fakeRequestPromise("findagirlfriend.com/api/nearme/page1")
  .then(() => {
    console.log("This is page one(1)");
    return fakeRequestPromise("findagirlfriend.com/api/nearme/page2");
  })
  .then(() => {
    console.log("This is page two(2)");
    return fakeRequestPromise("findagirlfriend.com/api/nearme/page3");
  })
  .then(() => {
    console.log("This is page three(3)");
    return fakeRequestPromise("findagirlfriend.com/api/nearme/page4");
  })
  .then(() => {
    console.log("This is page four(4)");
  })
  .catch(() => {
    console.log("Sorry, your page didn't load");
  });