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

let scienceSection = document.getElementById('scienceSection')
let scienceSec = document.getElementById('scienceSec')

let revealEdu = document.getElementById('revealEdu')

let postSections = document.getElementById ('PostSections')

let upButton = document.getElementById('upButton')


function scrollTopButt() {
     document.documentElement.scrollTop = 0; 
    // window.location.reload()

    

    //  let's make the jump button to clear all sections while going back up
    //  politicsSection.style.display = "none";
    //  postSections.style.display = "none";
    //  HealthSection.style.display = "none";
}

// there;s no need for this function again, explore button should reveal 2 sections at the same time instead
// function nextSectionn() {
//   politicsSection.style.display = "block";
//   politicsSection.style.transition = "opacity 5s ease-in";
//   forPolitics.style.display= "none";
// }

// button to reveal health and science section
function nextSectionnHealth() {
  HealthSection.style.display = "block";
  scienceSection.style.display = "block"
  healthSec.style.display ="none";
}

// button to reveal poliics and education section
function revealEducation() {
  postSections.style.display = "block";
  politicsSection.style.display = "block";

  forPolitics.style.display= "none";
}

let whatsA = document.getElementById('whatsA')

function whatAppChat() {
  whatsA.style.display = "block"
}

function whatsLink() {
  whatsA.style.display = "none"
}
// function revealEdu() {
//   postSections.style.display = "block";
// }