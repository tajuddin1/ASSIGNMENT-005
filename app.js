let loveCountNumber = 0;
const loveBtn = document.querySelectorAll(".fav_btn");
const loveCount = document.getElementById("love-count");

for (let i = 0; i < loveBtn.length; i++) {
  loveBtn[i].addEventListener("click", function () {
    loveCountNumber++;
    loveCount.innerHTML = loveCountNumber;
  });
}


let copyCountNumber = 0;
const copyCount = document.getElementById("copy-text");
const copyBtn = document.querySelectorAll(".copy_btn");

for (let i = 0; i < copyBtn.length; i++) {
  copyBtn[i].addEventListener("click", function (e) {
    copyCountNumber++;
    copyCount.innerHTML = copyCountNumber;

    let serviceCard = e.currentTarget;

    while (!serviceCard.classList.contains("service_card")) {
      serviceCard = serviceCard.parentElement;
    }

    const serviceNumber =
      serviceCard.querySelector(".service_number").innerText;

    console.log(serviceNumber);

    navigator.clipboard.writeText(serviceNumber);

    alert(serviceNumber + " Copy Successful!");
  });
}


let coinNumber = 100;
const coinCount = document.getElementById("count-coin");
coinCount.innerHTML = coinNumber;
const callBtn = document.querySelectorAll(".call_btn");
const history = document.getElementById("history");
const clearBtn = document.getElementById("clear-btn");


for (let i = 0; i < callBtn.length; i++) {
  callBtn[i].addEventListener("click", function (e) {
    if (coinNumber < 20) {
      alert("Please recharge");
      return;
    }
    coinNumber = coinNumber - 20;
    coinCount.innerHTML = coinNumber;

    let serviceCard = e.currentTarget;

    while (!serviceCard.classList.contains("service_card")) {
      serviceCard = serviceCard.parentElement;
    }

    const serviceNumber =
      serviceCard.querySelector(".service_number").innerText;
    const serviceName = serviceCard.querySelector(".service_name").innerText;

    alert(serviceName + "\n" + serviceNumber);

    const newTime = new Date();
    let hours = newTime.getHours();
    let minutes = newTime.getMinutes();
    let seconds = newTime.getSeconds();
    let ampm = hours >= 12 ? "pm" : "am";
    hours = hours % 12 || 12;
    const timeString = `${hours}:${minutes.toString().padStart(2, "0")}:${seconds.toString().padStart(2, "0")}${ampm}`;

    const li = document.createElement("li");
    li.classList.add("flex", "justify-between", "items-center", "p-4","bg-[#fafafa]","rounded-lg","mb-7");

    const div1 = document.createElement("div");
    const h1 = document.createElement("h1");
    h1.classList.add("text-[18px]", "font-normal");
    h1.innerHTML = serviceName;

    const p = document.createElement("p");
    p.innerHTML = serviceNumber;

    div1.appendChild(h1);
    div1.appendChild(p);

    const span = document.createElement("span");
    span.innerHTML = timeString;

    li.appendChild(div1);
    li.appendChild(span);

    history.appendChild(li);
  });
}

clearBtn.addEventListener("click", function clearHistory() {
  history.innerHTML = "";
});
