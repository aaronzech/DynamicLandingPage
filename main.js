// Dom Elements
const time = document.getElementById('time');
const name = document.getElementById('name');
const greeting = document.getElementById('greeting');
const focus = document.getElementById('focus');

// Show and update the current Time
function showTime(){
    
    let today = new Date(2022,1,2,12,22,22)
    //let today = new Date(), // current date and time
    hour = today.getHours();
    min = today.getMinutes();
    seconds = today.getSeconds();

    // Check AM or PM
    const amPM = hour >= 12 ? 'PM' : 'AM'; // Turnary operator

    //12 hour format
    hour = hour%12 || 12; 

    // Output the time
    time.innerHTML = `${hour}<span>:</span>${addZero(min)}<span>:</span>${addZero(seconds)} ${amPM}`;

    setTimeout(showTime,1000);

    //Format time with leading zeros
    function addZero(n){
        return (parseInt(n,10)<10 ? '0' : '') + n
    }


}

// Set background and greeting
function setBackgroundAndGreeting(){
    
    //let today = new Date();
    let today = new Date(2022,1,2,12,22,22)
    
    hour = today.getHours();
    if(hour<12){
        // Morning
        document.body.style.backgroundImage="url('../img/morning.jpg')"
        greeting.textContent = 'Good Morning';

    }else if(hour<18){
        // Afternood
        document.body.style.backgroundImage="url('../img/afternoon.jpg')"
        greeting.textContent = 'Good Afternoon';
        document.body.style.color = 'white';
        document.body.style.textShadow ='-1px 0 black, 0 2px black, 2px 0 black, 0 -1px black';

    }else{
        // evening
        document.body.style.backgroundImage="url('../img/evening.jpg')"
        greeting.textContent = 'Good Evening';
        document.body.style.color = 'white'; // change text color
        

    }
}

// Get Name
function getName(){
    // Check local storage
    if(localStorage.getItem('name') === null){
        name.textContent = '[Enter Name]';
    }else{
        name.textContent = localStorage.getItem('name');
    }
}

// Get Focus
function getFocus(){
    // Check local storage
    if(localStorage.getItem('focus') === null){
        focus.textContent = '[Enter Focus]';
    }else{
        focus.textContent = localStorage.getItem('focus');
    }
}

function setName(e){
    if(e.type === 'keypress'){
        // Make sure enter is pressed
        if(e.which == 13 || e.keyCode == 13){
            localStorage.setItem('name',e.target.innerText);
            name.blur();
        }

    }else{
        localStorage.setItem('name',e.target.innerText);
    }
}
function setFocus(e){
    if(e.type === 'keypress'){
        // Make sure enter is pressed
        if(e.which == 13 || e.keyCode == 13){
            localStorage.setItem('focus',e.target.innerText);
            focus.blur();
        }

    }else{
        localStorage.setItem('focus',e.target.innerText);
    }
}

name.addEventListener('keypress',setName); // press enter
name.addEventListener('blur',setName); // click on and click away

focus.addEventListener('keypress',setFocus); // press enter
focus.addEventListener('blur',setFocus); // click on and click away


// Run
showTime();
setBackgroundAndGreeting();
getName();
getFocus();
