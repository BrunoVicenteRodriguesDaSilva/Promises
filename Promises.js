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

//Promise backgroundColor
const colorBackChange = (color, delay) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      document.body.style.backgroundColor = color;
      resolve();
    }, delay);
  });
};

// colorBackChange("black", 1000)
//   .then(() => colorBackChange("orange", 1000))
//   .then(() => colorBackChange("darkred", 1000))
//   .then(() => colorBackChange("green", 1000))
//   .then(() => colorBackChange("blue", 1000))
//   .then(() => colorBackChange("indigo", 1000));

//Async -- async returns a 'promise', without we writing the promise;
const login = async (username, password) => {
  if (!username || !password) throw "Missing Credentials";
  if (password === "iamapassword") return `Welcome, ${username}`;
  throw "Invalid Password";
};

login("Bruno", "iamapassword")
  .then((msg) => {
    console.log(msg);
  })
  .catch((err) => {
    console.log(err);
  });

//Await -- it waits for the line to run, before running the rest;
async function partyLights() {
  await colorBackChange("black", 1000);
  await colorBackChange("orange", 1000);
  await colorBackChange("darkred", 1000);
  await colorBackChange("green", 1000);
  await colorBackChange("blue", 1000);
  await colorBackChange("indigo", 1000);
}

partyLights();

//Errors in async functions
async function twoPages() {
  try {
    let data1 = await fakeRequestPromise("/FollowMe");
    console.log(data1);
    let data2 = await fakeRequestPromise("/HaveAGoodDay");
    console.log(data2);
  } catch (er) {
    console.log(er);
    console.log("Wasn't this time, sorry");
  }
}
