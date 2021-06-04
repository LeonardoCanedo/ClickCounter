const clickContainer = document.querySelector("#clickContainer");
const counterContainer = document.querySelector("#counterContainer");
let currentlyRunning = false;

var methods = {
    timer (amount) {
        millisecondsAmount = `${amount}00`;
        console.log(amount)

        let timerInterval = setInterval(() => {
            document.querySelector("#timerContainer").innerHTML = `<span>${amount}</span>`;
            amount--;

            //It won't be writed -1 because it won't pass through the interval again. The 0 output stays.
            if (amount == -1){
                clearInterval(timerInterval);
                document.querySelector("#timeAmount").value = 0;
                console.log("Timer is ready to go");
            }
        }, millisecondsAmount);
    },

    restart () {
        counter = 0;
        counterContainer.innerText = counter;
        clearInterval(timerInterval);
    },
}

let counter = 0;
clickContainer.addEventListener('click', () => {
    let timeAmount = parseInt(document.querySelector("#timeAmount").value);
    console.log(timeAmount)

    if (timeAmount != 0){
        methods.timer(timeAmount);
        timeAmount = 0;
    } else {
        console.log("Timer is still running.")
    }
    
    counter++;
    counterContainer.innerText = counter;
    console.log(counter);

    return timeAmount;
});

clickContainer.addEventListener('mouseenter', () => {
    document.querySelector(".dot").style.backgroundColor = "green";
   
});

clickContainer.addEventListener('mouseout', () => {
    document.querySelector(".dot").style.backgroundColor = "red";
});
