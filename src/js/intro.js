import creddycontrol from "../../assets/creddy+controls.png";
document.querySelector("#start-btn").addEventListener("click", () => {
  document.querySelector("#page-1").style.display = "flex";
  document.querySelector("#start-page").style.display = "none";
});
document.querySelector("#page1-btn").addEventListener("click", () => {
  document.querySelector("#page-2").style.display = "flex";
  document.querySelector("#page-1").style.display = "none";
});
document.querySelector("#page2-btn").addEventListener("click", () => {
  document.querySelector("#page-3").style.display = "flex";
  document.querySelector("#page-2").style.display = "none";
});
document.querySelector("#page3-btn").addEventListener("click", () => {
  document.querySelector("#canvas").style.display = "block";
  document.querySelector("#page-3").style.display = "none";
});
document.querySelector("#img").src = creddycontrol;
document.querySelector("#img").style.wdith;
