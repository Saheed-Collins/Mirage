// Date

// to get the date
   document.getElementById('todayDate').innerHTML = new Date() 

// autotyping

let sentence=['Entertainment', 'Politics','Sports', 'Education']
let sectionNew=document.getElementById('sectionNew');
let arrsentence=0;
let arrWords=0;

function autotype() {
    letterword=sentence[arrsentence][arrWords]
    sectionNew.innerHTML+= letterword  
    arrWords++
    setTimeout (function(){
        if (sentence[arrsentence][arrWords]) {
            autotype()   
        } 
        else{
            clear()
        }

    },200);
}
autotype() 
    
  function clear() {
    if (sectionNew.innerHTML=='') {
        if (sentence[arrsentence+1]) {
            arrsentence++
            arrWords=0;
            autotype()
            
        }
        else{
            arrsentence=0
            arrWords=0
            autotype()
        }
        return;
        
    }
    sectionNew.innerHTML=sectionNew.innerHTML.slice(0,-1)
    setTimeout(function() {
        clear()
        
    },100)
   
    
  }
  
//   autotyping end
  

// jump button


let scrollTopButton = document.getElementById("upButton");

// scrolls down 30px, then appear
// window.onscroll += function scrollFunction(){};
window.onscroll = function scrollFunction(){};
// window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    scrollTopButton.style.display = "none";
  } else {
    scrollTopButton.style.display = "none";
  }
}
// Next butto for politics

let forPolitics = document.getElementById('forPolitics')
let politicsReveal = document.querySelector('politicsReveal')
let politicsSection = document.getElementById('politicsSection')
let healthSec = document.getElementById('healthSec')
let HealthSection = document.getElementById('HealthSection')

let upButton = document.getElementById('upButton')

function scrollTopButt() {
     document.documentElement.scrollTop = 0; 
     politicsSection.style.display = "none";
}


function nextSectionn() {
  politicsSection.style.display = "block";
  forPolitics.style.display= "none";
}
function nextSectionnHealth() {
  HealthSection.style.display = "block";
  healthSec.style.display ="none";
}
