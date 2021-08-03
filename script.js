const apiUrl="https://docs.google.com/forms/d/e/1FAIpQLSep_1ZtcuB_i9LBWuFvliSd6e133Tkxpk6AmAId_yj2yHkpSQ/formResponse"
const name=document.getElementById("name");
const email=document.getElementById("email");
const message=document.getElementById("message");
function gotoSkills(){
    const skills=document.getElementById("goto-skills");
    skills.click();
}
function gotoProjects(){
    const projects=document.getElementById("goto-projects");
    projects.click();
}
function gotoContact(){
    const contact=document.getElementById("goto-contact");
    contact.click();
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
