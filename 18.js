let divFon = document.querySelector('.oclock')
let pHour = document.querySelector('.p-hour')
let pDay = document.querySelector('.p-day')

function Time() {
    let main = new Date();
    console.log(main)

    let hour = main.getHours();
    let hv = main.getMinutes();
    let sknd = main.getSeconds();


    sknd = sknd < 10 ? '0' + sknd : sknd;
    hv = hv < 10 ? '0' + hv : hv;
    hour = hour < 10 ? '0' + hour : hour;

    pHour.innerHTML = hour + ':' + hv + ':' + sknd

let day = main.getDay();
let nameDay = ['неділя', 'понеділок', 'вівторок', 'середа', 'четвер', 'п"ятниця', 'субота']

pDay.innerHTML = nameDay[day];

let num = main.getDate();
num = num < 10 ? '0' + num : num;

let mnth = main.getMonth()+1;
mnth = mnth < 10 ? '0' + mnth : mnth;
 
pDay.innerHTML = nameDay[day] + ', ' + num + '.' + mnth + '.' + main.getFullYear();



if (hour> 6 && hour < 11){
    divFon.style.backgroundImage = 'url(img/morning.jpg)';
}
else if (hour >= 11 && hour < 18){
    divFon.style.backgroundImage = 'url(img/day2.jpg)';
}
else if (hour >= 18 && hour <= 20){
    divFon.style.backgroundImage = 'url(img/evening.jpg)';
}
else if (hour > 20 || hour < 6){
    divFon.style.backgroundImage = 'url(img/night.jpg)';

}

}
window.addEventListener('load', function () { Time(); })

setInterval(() => {
    Time()
}, 1000)



