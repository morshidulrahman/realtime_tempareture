 
const Celcius = document.querySelector(".celcius")
const  Farenheit = document.querySelector(".fahrenheit")
const Kalvin = document.querySelector(".kalvin")
const Submit = document.querySelector(".btn")
const weatherimage=document.querySelector(".image img")

const converterimage={
    verycold:"https://images.unsplash.com/photo-1524175869111-19b0893d20b7?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80",
    cold:"https://images.unsplash.com/photo-1496340077100-9573d8b77463?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=883&q=80",
    hot:"https://images.unsplash.com/photo-1565677913671-ce5a5c0ae655?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80",
    veryhot:"https://images.unsplash.com/photo-1541417904950-b855846fe074?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=841&q=80",
    ultrahot:"https://images.unsplash.com/photo-1619266465172-02a857c3556d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1031&q=80",
    muri:"https://images.unsplash.com/photo-1633989464081-16ccd31287a1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=871&q=80"
}


 let lastEdit=""

const update=()=>{
    Celcius.addEventListener("keyup",(e)=>{
        lastEdit = "celcius"
        covert(lastEdit)
    })

     Farenheit.addEventListener("keyup",(e)=>{
        lastEdit = "fahrenheit"
        covert(lastEdit)
    })

      Kalvin.addEventListener("keyup",(e)=>{
        lastEdit = "kalvin"
        covert(lastEdit)
    })
}
update()

const updateimage=(temp)=>{
    if(temp <-10 ){
     weatherimage.setAttribute("src",converterimage.verycold)
    }else if(temp>-10 && temp <=0){
        weatherimage.setAttribute("src",converterimage.cold)
    }
    else if(temp>0 && temp <40){
        weatherimage.setAttribute("src",converterimage.hot)
    }else if(temp>40 && temp <70){
        weatherimage.setAttribute("src",converterimage.veryhot)
    }else if(temp>70){
        weatherimage.setAttribute("src",converterimage.ultrahot)
    }else{
        weatherimage.setAttribute("src",converterimage.muri)
    }
}

const covert=(lastedit)=>{
    let temp=""

   if(lastedit==="celcius"){
    const fvalue = (parseFloat(Celcius.value)*9/5)+32
    const kvalue=(parseFloat(Celcius.value)+273)
       temp=Celcius.value

    Farenheit.value = Math.floor(fvalue) + " °F"
    Kalvin.value=Math.floor(kvalue) + " °k"

   }else if(lastedit==="fahrenheit"){
       const cvalue=(parseFloat(Celcius.value-32)*5)/9
       const kvalue=(parseFloat(Celcius.value-32)*5)/9+273
        temp=cvalue
        Celcius.value=Math.floor(cvalue)+ " °C"
        Kalvin.value=Math.floor(kvalue)+ " °K"

   }else if(lastedit==="kalvin"){
     const cvalue=(parseFloat(Celcius.value-273))
     const fvalue=(parseFloat(Celcius.value-273)*9)/5+32
       temp=cvalue
     Celcius.value=Math.floor(cvalue)+ " °C"
     Farenheit.value = Math.floor(fvalue) + " °F"
   }
   updateimage(temp)
}

 