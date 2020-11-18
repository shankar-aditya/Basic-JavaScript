
const a = document.getElementById('clock');
function showTime(){

    let date = new Date();
    let hours = date.getHours();
    let minutes = date.getMinutes();
    let seconds = date.getSeconds();

    let formatHours = convertFormat(hours);

    if(formatHours === 'PM'){
        hours -=  12;
        if(hours === 0){
            hours = 12;
        }
    }
    

    hours = addZero(hours);
    minutes = addZero(minutes);
    seconds = addZero(seconds);

    a.innerHTML = `${hours} : ${minutes} : ${seconds}  ${formatHours}` ;

}

function convertFormat(time){
    let format = 'AM';
    if(time>=12){
        format = 'PM'
    }
    return format;
}

function addZero(time){
    if(time<10){
        time = "0"+ time;
    }
    return time;
}
showTime();
setInterval(showTime,1000);