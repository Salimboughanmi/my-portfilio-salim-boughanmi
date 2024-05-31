function SendMail(){
var params = {from_name :document.getElementById("fullName").value , 
    
    email_id :document.getElementById("email_id").value,
    subject :document.getElementById("subject").value,
    message :document.getElementById("message").value,
 }
 emailjs.send("service_f165mas" ,"template_zpk8eaw" , params ).then(function(response){
    alert("success!" + response.status);
 })
}