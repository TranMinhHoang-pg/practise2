



/*-----------------------------CHANGE BUTTON------------------------ */
/*-----------------------------ADD ACTIVE------------------------ */
    let button = document.querySelector(".btn")

    button.onclick = function() {
        let activeClock = document.querySelector(".clock")
        
        let leftContent = document.getElementById("left-word");
        let rightContent = document.getElementById("right-word");

        if (activeClock.classList.contains("active")) {
            activeClock.classList.remove("active");
            
            leftContent.innerHTML = "ACT"
            rightContent.innerHTML ="IVE"
        } else {
            activeClock.classList.add("active");

            leftContent.innerHTML = "IN"
            rightContent.innerHTML ="ACTIVE"

           let time = setInterval(updateClock,1000);
        }
}



function updateClock() {
   
    if (!(document.querySelector(".clock").classList.contains("active"))) {
        clearInterval(time);
    } else {
        const secDiv = document.getElementById('sec');
        const minDiv = document.getElementById('min');
        const hourDiv = document.getElementById('hour');


        let date = new Date();
        let sec = date.getSeconds() / 60;
        let min = (date.getMinutes() +sec)/ 60;
        let hour = (date.getHours() + min) / 12;

        secDiv.style.transform = "rotate(" + (sec * 360 ) + "deg)"
        minDiv.style.transform = "rotate(" + (min * 360) + "deg)"
        hourDiv.style.transform = "rotate(" + (hour * 360) + "deg)" 
    }
}







    
    
        
