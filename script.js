function esperar(){
    let textday=document.querySelector(".textday")
    let hourstext=document.querySelector(".hourstext")
    let mintext=document.querySelector(".mintext")
    let segundostext=document.querySelector(".segundostext")
    
    
    let day=08
    let hours=24
    let min=60
    let seg=60

    textday.innerHTML=day
    hourstext.innerHTML=hours
    mintext.innerHTML=min
    segundostext.innerHTML=seg


   segundos=setInterval(tempo,100)

    function tempo(){
        textday.innerHTML=day
        hourstext.innerHTML=hours
        mintext.innerHTML=min
        segundostext.innerHTML=seg
        seg-=1
        console.log(seg)
        if(seg<0){
            seg=60
            min-=1
        }
        else if(min<0){
            min=60
            hours-=1
        }
        else if(hours<0){
            hours=24
            day-=1
        }
        else if(day<0){
            textday.innerHTML=0
            hourstext.innerHTML=0
            mintext.innerHTML=0
            segundostext.innerHTML=0
            clearInterval(segundos)
        }
    }


    



}