function REGISTRATO()
{
    alert("Benvenuto su CryptoZen!");
}

document.addEventListener("DOMContentLoaded", function(){
    document.getElementById("ResetButton").addEventListener('click', function(){
        let inputs = document.querySelectorAll("table input");
        inputs.forEach(input => input.value = "");
    });
})