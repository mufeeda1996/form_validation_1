function validate_form(){
let name=document.getElementById('user_name').value
let name2=document.getElementById('user_2name').value;
let phone=document.getElementById('phone').value;
let course=document.getElementById('course').value
let radio=document.getElementById('rad').checked
let form=document.getElementById('form').value

if(name=="")
{
    document.getElementById('error').innerHTML="enter user name"
    return false;
}
else if(name2=="")
{
    
    document.getElementById('error2').innerHTML="enter the second name";
    return false;
}
else if(phone=="")
{
    document.getElementById('error3').innerHTML="enter your phone number";
    return false;
}
else if(course=="")
{
    document.getElementById('error4').innerHTML="choose your course";
    return false;
}
else if(radio=="")
{
    document.getElementById('error5').innerHTML="choose your gender";
    return false;
}
else if(!validateForm())
{
    document.getElementById('error6').innerHTML="select your hobby";
    return false;
}
else{
   
    document.sign_up_form.submit();
    return true; 
}
function validateForm()
{
    var c=document.getElementsByTagName('input');
    for (var i = 0; i<c.length; i++){
        if (c[i].type=='checkbox')
        {
            if (c[i].checked){return true}
        }
    }
    return false;
}
}
