const deptWrap = document.querySelector(".deptWrap");
const progressBar = document.querySelector(".bar");
const submarine = document.querySelector(".submarine");
const octopus = document.querySelector(".octopus");

let scrollNum = 0;
let documentHeight = 0;
let per = 0;

window.addEventListener("scroll", () => {
  scrollNum = window.scrollY;
  documentHeight = document.body.scrollHeight - window.innerHeight;
  per = `${percent(scrollNum, documentHeight)}`;

  deptWrap.querySelector("span").innerText = `${scrollNum.toFixed(0)}`;
  // 외우는게 편함..
  progressBar.style.width = `${per}%`;

  submarine.style.transform = `translateX(${per}%)`;
  octopus.style.transform = `translateY(${-per / 3}%)`;
  console.log(octopus.index);
});

const percent = (num, totalNum) => {
  return ((num / totalNum) * 100).toFixed(0);
};
