const body = document.getElementById('headerId');
if(confirm('Would you like to see the body?')){ 
    body.style.visibility = 'visible';
};


function promptFunction() {
    var Text = prompt("Write your age here:", "");
if (Text != null) {
    if (Text != "") {
        if(Text > 18) {
            document.getElementById("TextString").innerHTML = "You wrote " + Text + " in the field, and you can entry to this site";
        } else{
            document.getElementById("TextString").innerHTML = `Your age ${Text} is not suitable`;

        }
    } else {
        document.getElementById("TextString").innerHTML = "You didn't write anything in the field!";
    }}
else {
        document.getElementById("TextString").innerHTML = "";
    }
}



function Qrup() {

    var value = document.getElementById("input").value
    if (value.length === 4 || value.length === 5) {
        if (value.includes("1", 1)) {
            body.style.backgroundColor = "pink"
        }
        else if (value.includes("2", 1)) {
            body.style.backgroundColor = "yellow"
        }
        else if (value.includes("3", 1)) {
            body.style.backgroundColor = "black"
        }
    } 

}





// function Age() {
//     let age = prompt("Please enter your age", "18");
//     if (age != null) {
//       document.getElementById("demo").innerHTML =
//       "Hello " + person + "! How are you today?";
//     }
//     else{
//         document.getElementById("demo").innerHTML =
//       "Hello " + person + "your age is not suitable";
//     }
//   }







// function myFunction() {
//     let text;
//     let favDrink = prompt("How old are you?", "18");
//     switch(favDrink) {
//       case "Coca-Cola":
//         text = "Excellent choice. Coca-Cola is good for your soul.";
//         break;
//       case "Pepsi":
//         text = "Pepsi is my favorite too!";
//         break;
//       case "Sprite":
//         text = "Really? Are you sure the Sprite is your favorite?";
//         break;
//       default:
//         text = "I have never heard of that one..";
//     }
//     document.getElementById("demo").innerHTML = text;
//   }




  //1 ədəd Prompt metodu olacaq. User yaşını daxil etməlidir.Əgər
//userin yaşı 18-dən balacadırsa xəbərdarlıq mesajı çıxarsın
