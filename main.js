function ValidateEmail() {
    var x = document.getElementById('input_id').value
    var atpos = x.indexOf("@");
    var dotpos = x.lastIndexOf(".");
    if (atpos < 1 || dotpos < atpos + 2 || dotpos + 2 >= x.length || x==='') {
        document.getElementById("validation").innerHTML = "Please provide a valid email address";
        document.getElementById("myBtn").disabled = true;      
    }
    else{
        document.getElementById("validation").innerHTML = "";
        document.getElementById("myBtn").disabled = false;  
    }
}