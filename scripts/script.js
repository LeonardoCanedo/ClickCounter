const clickContainer = document.querySelector("#clickContainer");
const counterContainer = document.querySelector("#counterContainer");
let currentlyRunning = false;

var methods = {
    timer (amount) {

        let timerInterval = setInterval(() => {
            document.querySelector("#timerContainer").innerHTML = `<span>${amount}</span>`;
            amount--;

            //It won't be writed -1 because it won't pass through the interval again. The 0 output stays.
            if (amount == -1){
                clearInterval(timerInterval);
                this.cps();
                verify = false;
                return verify
            }
        }, 1000);
    },

    restart () {
        counter = 0;
        counterContainer.innerText = counter;
    },

    cps () {
        amount = parseInt(document.querySelector("#timeAmount").value);
        document.getElementsByClassName('cps')[0].innerText = `${counter / amount}`
    },
}

let counter = 0;
let verify = false
clickContainer.addEventListener('click', () => {    
    let timeAmount = parseInt(document.querySelector("#timeAmount").value);    
    console.log(timeAmount);    
    if (timeAmount != 0 && !verify){//isso faria com que o valor do tempo só fosse alterado apenas uma vez    
        //OBS: !verify é o mesmo que fazer verify == false
        methods.timer(timeAmount, verify);        
        timeAmount = 0;        
        verify = true;
    } else {        
        console.log("Timer is still running.")    }       
        counter++;    
        counterContainer.innerText = counter;    
        console.log(counter);
    return timeAmount;});

clickContainer.addEventListener('mouseenter', () => {
    document.querySelector(".dot").style.backgroundColor = "green";
   
});

clickContainer.addEventListener('mouseout', () => {
    document.querySelector(".dot").style.backgroundColor = "red";
});
