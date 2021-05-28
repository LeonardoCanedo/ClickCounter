const clickContainer = document.querySelector("#clickContainer");
const counterContainer = document.querySelector("#counterContainer");

let counter = 0;
clickContainer.addEventListener('click', () => {
    counter++;
    counterContainer.innerText = counter;
    console.log(counter)
});

clickContainer.addEventListener('mouseenter', () => {
    document.querySelector(".dot").style.backgroundColor = "green";
   
});

clickContainer.addEventListener('mouseout', () => {
    document.querySelector(".dot").style.backgroundColor = "red";
});

function restart () {
    counter = 0;
    counterContainer.innerText = counter;
}

function timer (amount) {
    amount = `${amount}00`;
    console.log(amount)

    setInterval(() => {
        document.querySelector("#timerContainer").innerHTML = `<span>${amount}</span>`;
        amount--;
    }, amount);
}

timer(10);