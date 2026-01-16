// // function checkAge() {
// //   let age = document.getElementById("ageInput").value;

// //   // Using ternary operator
// //   let message = (age >= 18)
// //     ? "✅ You are an Adult!"
// //     : "❌ You are a Minor!";

// //   document.getElementById("result").innerHTML = message;
// // }
// function checkage() {
//     let age = document.getElementById("ageinput").value;
//     let message=(age >=20)
//     ?"You are Adult"
//     :"you are Minor";
//     document.getElementById("result").innerHTML=message;
// }
// function btnfun() {
//     let age =document.getElementById("Enterage").value;
//     let message=(age>=18)?" ✅you are adult ":"❌you are minor";
//     document.getElementById("result").innerHTML=message;    
// }
// function Grade() {
//     let num=document.getElementById("enternum").value;
//     let message=(num>=48)?"YOU  ARE PASS ":"YOU ARE FAIL ";
//     document.getElementById("result").innerHTML=message;

// }
function btnclick() {
    let email = document.getElementById("password").value;

    // Example: correct email
    const correctEmail = "fawadalam5813@gmail.com";

    // ✅ Using ternary operator
    let message = (email === correctEmail)
        ? "✅ You are logged in!"
        : "❌ Wrong email, try again.";

    document.getElementById("password-check").innerHTML = message;
}

