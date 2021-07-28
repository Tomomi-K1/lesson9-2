const topicElement = document.querySelector(".topic");
const countElement = document.querySelector(".count");
const body = document.querySelector("body");
const success = document.querySelector(".success");
const dance = document.querySelector(".dance");
const hours = Number(prompt("how many hours did you study this week?"));

const learning = {
  topic: "JS",
  learningGoals: [
    "Understand programming fundamentals",
    "Have Fun",
    "Build JS programs"
  ],
  category: "Front End Development",
  topicImportance: "high",
  hoursThisWeek: 0,
  weeklyHourGoal: 7,
  achieveStudyGoal: false,
  addStudyTime: function (hours) {
    this.hoursThisWeek += hours;
    if (this.hoursThisWeek >= this.weeklyHourGoal) {
      this.achieveStudyGoal = true;
      this.celebrate();
    }
    console.log(this.hoursThisWeek);
  },
  celebrate: function () {
    body.classList.add("celebrate");
    success.classList.remove("hide");
    dance.classList.remove("hide");
  }
};

topicElement.innerText = `✔️ I'm learning ${learning.topic}.`;
countElement.innerText = `✔️ I have ${learning.learningGoals.length} learning goals.`;

topicElement.classList.remove("hide");
countElement.classList.remove("hide");

learning.addStudyTime(hours);
