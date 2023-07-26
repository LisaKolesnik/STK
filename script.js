// DROPDOWN

let flag = 0;

function openNav() {
  if (flag === 0) {
    document.getElementById("dpd").style.width = "100%";
    document.getElementById("dropdown-btn").style.transform = "rotate(90deg)";
    document.getElementById("dropdown").style.width = "320px";
    document.body.style.overflowY = "hidden";
    flag = 1;
  } else {
    document.getElementById("dpd").style.width = "0%";
    document.getElementById("dropdown-btn").style.transform = "rotate(0deg)";
    document.getElementById("dropdown").style.width = "0px";
    document.body.style.overflowY = "scroll";
    flag = 0;
  }
}

let dpdClose = document.getElementById("dpd");

window.onclick = function (event) {
  if (event.target == dpdClose) {
    document.getElementById("dpd").style.width = "0%";
    document.getElementById("dropdown-btn").style.transform = "rotate(0deg)";
    document.getElementById("dropdown").style.width = "0px";
    document.body.style.overflowY = "scroll";
    flag = 0;
  }
};

const inp = document.querySelector("count");

document.addEventListener('click', function (e) {
  if (e.target.classList.contains("increase")) {
    ++e.target.parentElement.querySelector("input").value;
  } else if (e.target.classList.contains("decrease") && document.querySelector(".count").value > 1) {
    --e.target.parentElement.querySelector("input").value;
  }
})

var modal = document.querySelector(".modal");
var btn = document.getElementById("btn");
var span = document.querySelector(".close");

btn.onclick = function() {
  modal.style.display = "flex";
}
span.onclick = function() {
  modal.style.display = "none";
}
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}
