let clock = document.getElementsByClassName("h3")
let AM = document.getElementsByClassName("am")

function callme(){
    let time= new Date()
    let hours= time.getHours()
    let mins= time.getMinutes()
    let sec= time.getSeconds()

    if(hours > 12){
        hours= hours - 12
        AM[0].innerText ='pm'
    }   
    else{
        AM[0].innerText= 'am'
    }


    let timezone = `${hours} hours`
    let timezone1 = `${mins} mins`
    let timezone2 = `${sec} sec`
    // console.log("hours,mins,sec")

    clock[0].innerText = timezone
    clock[1].innerText = timezone1
    clock[2].innerText = timezone2
}
setInterval (() => {
    callme()
},1000);


// 2nd qus

function clickhere(){
    let morningtext = change1.options[change1.selectedIndex].textContent;
    let morning = document.getElementById("wakeTime");
    morning.textContent = morningtext;   
}









