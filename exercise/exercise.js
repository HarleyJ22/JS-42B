const user = {
  id: 1,
  name: "John",
  age: 25,
};

let dataSaved = JSON.stringify(user);

function saveUser() {
  localStorage.setItem("user", dataSaved);
}

function userS() {
  const getUser = localStorage.getItem("user");
}
console.log(userS);

saveUser();
userS();