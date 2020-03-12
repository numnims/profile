
window.onload = pageLoad;
function pageLoad(){
    var form = document.getElementById("myForm");
    form.onsubmit  = validateForm;
}

function validateForm() {
    var pass = document.forms["myForm"]["password"].value;
    var retype = document.forms["myForm"]["retype"].value;
    if(pass != retype){
        var form = document.getElementById("errormsg");
        form.innerHTML = "Password ไม่ตรงกัน";
        
        return false;

    } else{
         return true;
    }
   


  
    //ถ้าตรวจสอบแล้วว่ามีการ register ไม่ถูกต้องให้ return false ด้วย
}

