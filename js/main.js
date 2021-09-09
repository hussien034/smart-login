var signInName=document.getElementById("name");
var signInEmail=document.getElementById("email");
var signInPassword=document.getElementById("password");
var inputs=document.getElementsByClassName("sign-btn");
var signUp=document.getElementById("signup");
var Alert=document.getElementById("alertEmail");
var emailLogin=document.getElementById("yourEmail");
var passwordLogin=document.getElementById("yourPassword");
var login=document.getElementById("login");
var information=[];

signInName.onkeyup=function(){
    if(signInName.value==""){
        signUp.disabled="true";
        Alert.classList.add("d-none");
    }
    else{
        signUp.removeAttribute("disabled");

    }
}
signInEmail.onkeyup=function(){
    var rejex=/^[A-Z][a-z]{0,15}@(gmail|yahoo)(.com)$/
    if(!rejex.test(signInEmail.value))
    {
        signUp.disabled="true";
        signInEmail.classList.add("is-invalid");
        signInEmail.classList.remove("is-valid");
        Alert.classList.remove("d-none");
        return false;
    }
    else{
        signUp.removeAttribute("disabled");
        signInEmail.classList.add("is-valid");
        signInEmail.classList.remove("is-invalid");
        Alert.classList.add("d-none");
        return true;
    }
}

if(JSON.parse(localStorage.getItem("informations"))!=null){
    information=JSON.parse(localStorage.getItem("informations"));
    addData();
}
signUp.onclick=function(){
    if(signInName.value=="")
    {
        document.getElementById("alert").innerHTML="All inputs is required"
    }
    else{
        document.getElementById("alert").innerHTML=""
    }
    if(signInEmail.value=="")
    {
        document.getElementById("alert").innerHTML="All inputs is required"
    }
    else{
        document.getElementById("alert").innerHTML=""
    }
    if(signInPassword.value=="")
    {
        document.getElementById("alert").innerHTML="All inputs is required"
    }else{
        addData()
    }
   
}
function addData(){
    var data={
        name:signInName.value,
        email:signInEmail.value,
        password:signInPassword.value,
    }
    information.push(data);
    localStorage.setItem("informations",JSON.stringify(information));
    console.log(information)
}
login.onclick=function(){
    window.open('welcome.html' ,'_self')
}
