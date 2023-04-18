// object
const koushik = {
  firstName: "koushik",
  lastName: "dutta",
  birthYear: 1999,
  job: "developer",
  friends: ["abc", "pqr", "xyz"],
  driversLicence: true,

  // Any function that is attacted to an object is called a Method
  //   calcAge: function (birthYear) {
  //     return 2023 - birthYear;
  //   },

  //   calcAge: function () {
  //     // console.log(this);
  //     return 2023 - this.birthYear;
  //   },

  calcAge: function () {
    this.age = 2023 - this.birthYear;
    return this.age;
  },

  summury: function () {
    return `${this.firstName} is a ${this.calcAge()} year old ${
      this.job
    } and he has ${this.driversLicence ? "a" : "no"} drivers licence`;
  },
};

// console.log(koushik.calcAge(1999));
// console.log(koushik["calcAge"](1999));

// console.log(koushik.calcAge());

// console.log(koushik.age);

console.log(koushik.summury());
