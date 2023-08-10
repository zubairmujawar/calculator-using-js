let string = "";
let Buttons = document.querySelectorAll("button");
var audio1 = document.createElement("audio");
var audio2 = document.createElement("audio");

audio1.id = "audio";
audio2.id = "audio";
audio2.src = "./click.mp3";
audio1.src = "./metal-new.mp3";
Array.from(Buttons).forEach((button) => {
  button.addEventListener("click", (e) => {
    if (e.target.innerHTML == "=") {
      string = eval(string);
      document.getElementById("input").value = string;
      history.innerHTML = `${input.value} = ${string}`;
      audio2.play();
    } else if (e.target.innerHTML == "C") {
      string = "";
      document.getElementById("input").value = string;
      audio1.play();
    } else if (e.target.innerHTML === "A") {
      string = string.slice(0, -1);
      document.querySelector("input").value = string;
      audio1.play();
    } else {
      string = string + e.target.innerHTML;
      document.getElementById("input").value = string;
      audio1.play();
    }
  });
});
