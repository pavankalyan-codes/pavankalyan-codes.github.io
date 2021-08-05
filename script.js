const apiUrl="https://docs.google.com/forms/d/e/1FAIpQLSep_1ZtcuB_i9LBWuFvliSd6e133Tkxpk6AmAId_yj2yHkpSQ/formResponse"
const name=document.getElementById("name");
const email=document.getElementById("email");
const message=document.getElementById("message");

const container = document.querySelector('#container')
const icons = document.querySelector('#icons')
var darkMode=localStorage.getItem('darkMode');
document.onreadystatechange = function () {
    if (document.readyState === "complete") {
            document.getElementById("spinner").style.display = "none";
            let moon=document.getElementById("icons");
            moon.style.display = "block";
            document.getElementById("portfolio").style.display = "flex";
            document.getElementById("portfolio").style.flexDirection = "column";
            console.log(darkMode);
            if(darkMode==="true"){
                document.body.classList.toggle('dark_mode');
                const rotation = parseInt(getComputedStyle(icons).getPropertyValue('--rotation'))
                icons.style.setProperty('--rotation', rotation - 180)

            }
            else{
                
            }
    }
}
function gotoSkills(){
    let scrollLocation = document.location.toString().split('#')[0];
    if(isMobile.any()){
        setTimeout(function(){
            document.location = scrollLocation + '#skills';
        },200)
    }
    else{
        document.location = scrollLocation + '#skills'
    }

    
}
function gotoProjects(){
    let scrollLocation = document.location.toString().split('#')[0];
    if(isMobile.any()){
        setTimeout(function(){
            document.location = scrollLocation + '#projects';
        },200)
    }
    else{
        document.location = scrollLocation + '#projects';

    }
    
}
function gotoContact(){
    let scrollLocation = document.location.toString().split('#')[0];
    if(isMobile.any()){
        setTimeout(function(){
            document.location = scrollLocation + '#contact';
        },500)
    }
    else{
        document.location = scrollLocation + '#contact';
    }

    
    
}
function notEmpty(data){
    return data!=="";
}
function submitForm(){
    console.log("submitting form!");
    let userName=name.value.trim();
    let userEmail=email.value.trim();
    let userMessage=message.value.trim();
    fetch(apiUrl,FormData)

    if(notEmpty(userName) && notEmpty(userEmail) && notEmpty(userMessage) && validateEmail(userEmail)){
        let formData = new FormData();
        formData.append('entry.2048484787', name.value);
        formData.append('entry.498368012', email.value);
        formData.append('entry.1110002978', message.value);
        fetch(apiUrl,
        {
            body: formData,
            mode: "no-cors",
                  cache: "no-cache",
                  credentials: "same-origin",
                  headers: {
                    "Content-Type": "form-data"
                  },
            method: "post",
            
        })
        .then(data=>{
            alert("Successfully submitted your response!");
        })
        .catch(err=>{
            alert("Unable to submit your response");
        })
    }
    else{
        console.log("Invalid form");
        alert("Please enter all the deatils before submitting");
    }

    
}
function validateEmail(email) {
    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
}


var isMobile = {
    Android: function() {
        return navigator.userAgent.match(/Android/i);
    },
    BlackBerry: function() {
        return navigator.userAgent.match(/BlackBerry/i);
    },
    iOS: function() {
        return navigator.userAgent.match(/iPhone|iPad|iPod/i);
    },
    Opera: function() {
        return navigator.userAgent.match(/Opera Mini/i);
    },
    Windows: function() {
        return navigator.userAgent.match(/IEMobile/i) || navigator.userAgent.match(/WPDesktop/i);
    },
    any: function() {
        return (isMobile.Android() || isMobile.BlackBerry() || isMobile.iOS() || isMobile.Opera() || isMobile.Windows());
    }
};

function toggleTheme(){
    console.log("called");
    document.body.classList.toggle('dark_mode');
	const rotation = parseInt(getComputedStyle(icons).getPropertyValue('--rotation'))
	icons.style.setProperty('--rotation', rotation - 180)
    darkMode=darkMode==="true"?"false":"true";
    localStorage.setItem("darkMode",darkMode);
}

