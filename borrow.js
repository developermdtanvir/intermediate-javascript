const tanvir = {
  name: "Tanvir",
  money: 500,
  study: "Math",
  subject: ["calculus", "algebra", "geometry"],
  exam: function () {
    return this.name + "is Participanting in exam";
  },
  improveExam: function () {
    this.exam();
    return `${this.name} is taking improvement exam on ${this.subject}`;
  },
  treatDay: function (amount, tips) {
    this.money = this.money - amount - tips;
    return this.money;
  },
};

const badam = {
  name: "Badam Ali",
  money: 5000,
};

const badamAli = tanvir.treatDay.bind(badam);
console.log(badamAli(500, 100));
const badamAli2 = tanvir.treatDay.apply(badam, [500, 100]);
console.log(badamAli2);
