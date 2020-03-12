function getParams() {
  	var idx = document.URL.indexOf('?');
  	var params = new Array();
  	if (idx != -1) {
  		var pairs = document.URL.substring(idx+1, document.URL.length).split('&');
  		for (var i=0; i<pairs.length; i++) {
  			nameVal = pairs[i].split('=');
  			params[nameVal[0]] = nameVal[1];
  		}
 	}
  	return params;
 }

window.onload = loginLoad;
function loginLoad(){
	// วิธีใช้ getParams()
	var form = document.getElementById("myLogin");
	form.onsubmit  = checkLogin;

}

function checkLogin(){
	var user = document.forms["myLogin"]["username"].value;
	var pass = document.forms["myLogin"]["password"].value;
	var parameter = getParams();
	var username = parameter["username"];
	var password = parameter["password"];
	console.log(username);
	console.log(password);
    if((username == user) && (password == pass)){
        alert("true");
    }else{
         
		 alert("ผิดจ้า");
		 return false;
		 
    }
	
	//ถ้าตรวจสอบแล้วพบว่ามีการ login ไม่ถูกต้อง ให้ return false ด้วย
}
		