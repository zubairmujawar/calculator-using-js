let string = "";
let Buttons = document.querySelectorAll("button");

Array.from(Buttons).forEach((button) => {
  button.addEventListener("click", (e) => {
    if (e.target.innerHTML == "=") {
      string = eval(string);
      document.getElementById("input").value = string;
      history.innerHTML = `${(input).value} = ${string}`;
    } else if (e.target.innerHTML == "C") {
      string = "";
      document.getElementById("input").value = string;
    } else if (e.target.innerHTML === "A") {
      string = string.slice(0, -1);
      document.querySelector("input").value = string;
    } else {
      string = string + e.target.innerHTML;
      document.getElementById("input").value = string;
    }
  });
});

