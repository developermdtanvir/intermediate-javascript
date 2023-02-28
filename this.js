const tanvir = {
  name: "Tanvir",
  money: 500,
  study: "Math",
  subject: ["calculus", "algebra", "geometry"],
  exam: function () {
    console.log("exam", this);
    return this.name + "is Participanting in exam";
  },
  improveExam: function () {
    this.exam();
    return `${this.name} is taking improvement exam on ${this.subject}`;
  },
  examArrow: () => {
    console.log("arrowExam", this);
  },
  nestedArrow: () => {
    const arrow = () => {
      console.log("nested", this);
    };
    arrow();
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
tanvir.exam();
tanvir.examArrow();
tanvir.nestedArrow();
badam.exam = tanvir.exam;

badam.exam();

function handleClick() {
  console.log("this", this);
}

document
  .getElementById("button-handler")
  .addEventListener("click", function () {
    console.log("dom handler arrow", this);
  });
