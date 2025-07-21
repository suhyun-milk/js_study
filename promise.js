function login(username) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (username) {
        resolve(username);
      } else {
        reject(`${username} 로그인 실패`);
      }
    }, 2000);
  });
}

// promise(비동기함수) state : pending, fulfilled, rejected

// 1초후에, 유저네임이 있다면, ~님 로그인완료", 없다면 에러"유저네임이 없습니다.""

login("Ghost")
  .then((data) => {
    console.log(`${data}, Login success`);
  })
  .then(() => {
    console.log("hello");
  })
  .catch((error) => {
    console.error(error);
  })
  .finally(() => {
    console.log("login process end");
  });
