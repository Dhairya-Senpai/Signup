var form=document.getElementById("form");
var first=document.getElementById("fn");
var last=document.getElementById("ln");
var email=document.getElementById("emm");
var userid=document.getElementById("uid");
var pass=document.getElementById("pd");
var cpass=document.getElementById("cpd");
form.addEventListener('submit',(e)=>{
 e.preventDefault();
 checkInput();
});
function checkInput()
{
var fnt=false,lnt=false,evt=false,ust=false,past=false,cft=false;
var firstval=first.value.trim();
var lastval=last.value.trim();
var emailval=email.value.trim();
var useridval=userid.value.trim();
var passidval=pass.value.trim();
var cpassval=cpass.value.trim();
var letter=/^[A-Za-z]+$/;
var emval=/^[a-zA-Z0-9.!#$%&'+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:.[a-zA-Z0-9-]+)$/;
 if(firstval=="")
 document.getElementById("fns").innerHTML="* First Name can not be blank";
 else
 {
 document.getElementById("fns").innerHTML="";
 if(firstval.length<2)
 document.getElementById("fns").innerHTML="* Name Must Be More than 1 Character";
 else
 {
 document.getElementById("fns").innerHTML="";
 if(!firstval.match(letter))
 document.getElementById("fns").innerHTML="* Please Enter Only Alphabet";
 else
 {
 document.getElementById("fns").innerHTML="";
 fnt=true;
 }
 }
 }

 if(lastval=="")
 document.getElementById("lns").innerHTML="* Last Name can not be blank";
 else
 {
 document.getElementById("lns").innerHTML="";
 if(lastval.length<2)
 document.getElementById("lns").innerHTML="* LastName Must Be More than 1 Character";
 else
 {
 if(!lastval.match(letter))
 document.getElementById("lns").innerHTML="* Please Enter Only Alphabet";
 else{
 document.getElementById("lns").innerHTML="";
 lnt=true;
 }
 }

 }
if(useridval=="")
 document.getElementById("uis").innerHTML="* User ID can not be blank";
 else
 {
 document.getElementById("uis").innerHTML="";
 if(useridval.length>7)
 document.getElementById("uis").innerHTML="* User Id Must Be Less Than 6 Character";
 else
 {
 document.getElementById("uis").innerHTML="";
 ust=true;
 }

 }
if(emailval=="")
 document.getElementById("ems").innerHTML="* Email ID can not be blank";
 else
 {
 document.getElementById("ems").innerHTML="";
 if(!emailval.match(emval))
 document.getElementById("ems").innerHTML="* Please Enter Proper Email";
 else
 {
 document.getElementById("ems").innerHTML="";
 evt=true;
 }

 }

if(passidval=="")
 document.getElementById("pws").innerHTML="* Password Cannot be Blank";
 else
 {
 document.getElementById("pws").innerHTML="";
 if(passidval.length<7)
 document.getElementById("pws").innerHTML="* Password Must Be more Than 6 Character";
 else
 {
 document.getElementById("pws").innerHTML="";
 past=true;
 }

 }
if(cpassval=="")
 document.getElementById("cpws").innerHTML="* Confirm Password Cannot be blank";
 else
 {

document.getElementById("cpws").innerHTML="";
 var n = passidval.localeCompare(cpassval);
 if(n!=0)
 {
 document.getElementById("pws").innerHTML="* Password didn't Matched";
 document.getElementById("cpws").innerHTML="* Password didn't Matched";
 }
 else
 {
 cft=true;
 }
 }
if((fnt==true) && (ust==true) && (lnt==true) &&
(past==true) && (cft==true) && (evt==true))
 {
 alert("All Data Loaded Succesfully");
 document.getElementById("fn").value="";
 document.getElementById("ln").value="";
 document.getElementById("emm").value="";
 document.getElementById("uid").value="";
 document.getElementById("pd").value="";
 document.getElementById("cpd").value="";
 }
}