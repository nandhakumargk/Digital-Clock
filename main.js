let ampm = document.getElementById('ampm');


function display(){
    let dateTime = new Date();
    let hr = dateTime.getHours();
    let min = addzero(dateTime.getMinutes());
    let sec = addzero(dateTime.getSeconds());
    if(hr > 12){
        hr = hr - 12
        ampm.innerHTML = 'PM'
    }
    else{
        ampm.innerHTML = 'AM'
    }


    document.getElementById('hrs').innerHTML = addzero(hr)
    document.getElementById('mins').innerHTML = min
    document.getElementById('secs').innerHTML = sec
}
function addzero(num){
    return num<10 ? '0'+num : num; 
}
setInterval(display,1000);
