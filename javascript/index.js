// --------------------------------- Heart button---------------------------------

const heartCount = document.getElementById("heart-count");

const heartButtons = document.getElementsByClassName("btn-hrt");
for (let heartButton of heartButtons) {
  heartButton.addEventListener("click", function () {
    let count = parseInt(heartCount.innerText);
    heartCount.innerText = count + 1;
  });
}

// ---------------------------------- Call button---------------------------------

const coinTotal = document.getElementById("total-coin");

const callButtons = document.getElementsByClassName("btn-call");
for (let callButton of callButtons) {
  callButton.addEventListener("click", function () {
    let currentCoin = parseInt(coinTotal.innerText);

    if (currentCoin < 20) {
      alert(
        "You don't have enough coin! Minimum 20 coin required for calling!"
      );
      return;
    }

    coinTotal.innerText = currentCoin - 20;
    let card = callButton.parentNode.parentNode;
    const serviceName = card.getElementsByTagName("h2")[0].innerText.trim();
    const serviceNum = card.querySelector("h2 span");
    const number = serviceNum.innerText.trim();
    alert("Calling " + serviceName + "  " + number + "...");

    // ---------------------------Add to history-----------------------------------

    const time = new Date().toLocaleTimeString();

    const historyBox = document.getElementById("cart-container");

    const historyItem = document.createElement("div");

    historyItem.innerHTML = `
      <div
               id="history-items" class="p-5 my-3 flex justify-between items-center shadow rounded-lg bg-[#FAFAFA]"
              >
                <div>
                  <h2 class="font-semibold text-lg">${serviceName}</h2>
                  <p class="font-normal text-lg text-[#5C5C5C]">${number}</p>
                </div>
                <span class="font-normal text-lg">${time}</span>
              </div>
    `;
    historyBox.appendChild(historyItem);
  });
}
// -------------------------------Clear history------------------------------------

document.getElementById("btn-clr").addEventListener("click", function () {
  const historyBox = document.getElementById("cart-container");

  historyBox.innerHTML = "";
});

// ------------------------------ Copy button -------------------------------------

const copyCount = document.getElementById("copy-count");

const copyButtons = document.getElementsByClassName("btn-copy");
for (let copyButton of copyButtons) {
  copyButton.addEventListener("click", function () {
    let card = copyButton.parentNode.parentNode;
    const serviceNumber = card.querySelector("h2 span");
    const number = serviceNumber.innerText.trim();

    navigator.clipboard.writeText(number).then(function () {
      let count = parseInt(copyCount.innerText);
      copyCount.innerText = count + 1;
      alert("Copied: " + number);
    });
  });
}
