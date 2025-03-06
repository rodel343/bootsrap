function myFunction() {
    var x = document.getElementById("inpForStudPassword");

    if (x.type === "password") {
        x.type = "text";
    } else {
        x.type = "password";
    }
}