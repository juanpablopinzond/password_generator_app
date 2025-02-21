const characters = ["A", "B", "C", "D", "E", "F", "G",
    "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q",
    "R", "S", "T", "U", "V", "W", "X", "Y", "Z", "a",
    "b", "c", "d", "e", "f", "g", "h", "i", "j", "k",
    "l", "m", "n", "o", "p", "q", "r", "s", "t", "u",
    "v", "w", "x", "y", "z", "0", "1", "2", "3", "4",
    "5", "6", "7", "8", "9", "~", "`", "!", "@", "#",
    "$", "%", "^", "&", "*", "(", ")", "_", "-", "+",
    "=", "{", "[", "}", "]", ",", "|", ":", ";", "<",
    ">", ".", "?",
    "/"
];

let fst_option_password = document.getElementById("first_password_generated");
let scd_option_password = document.getElementById("second_password_generated");

function displayFirstPassword() {
    let user_number = document.getElementById("user_input").value;
    let newfstPassword = "";
    let newscdPassword = "";
    let new_user_number = parseInt(user_number);
    for (let i = 0; i < new_user_number; i++) {
        if (new_user_number <= 15) {
            let randomCharacter1 = Math.floor(Math.random() * characters.length);
            let randomCharacter2 = Math.floor(Math.random() * characters.length)
            newfstPassword += characters[randomCharacter1];
            newscdPassword += characters[randomCharacter2];
            fst_option_password.textContent = newfstPassword;
            scd_option_password.textContent = newscdPassword;
            fst_option_password.style.display = "block";
            scd_option_password.style.display = "block";
        } else {
            return alert("There are to many characters, only allow less than or equal to 15");
        }
    }
}

let generatePassword = document.getElementById("main_password");
generatePassword.addEventListener("click", displayFirstPassword);

function copyFirstPassword() {
    let passwordToCopy = document.getElementById("first_password_generated").textContent;
    if (navigator.clipboard) {
        navigator.clipboard.writeText(passwordToCopy).then(function() {
            showNotification("Password Copied! " + passwordToCopy);
        }, function(err) {
            console.error("Error al copiar el texto: ", err);
        });
    }
}

let copyFirstSuggestion = document.getElementById("first_password_generated");
copyFirstSuggestion.addEventListener("click", copyFirstPassword);

function copySecondPassword() {
    let passwordToCopy = document.getElementById("second_password_generated").textContent;
    if (navigator.clipboard) {
        navigator.clipboard.writeText(passwordToCopy).then(function() {
            showNotification("Password Copied! " + passwordToCopy);
        }, function(err) {
            console.error("Error al copiar el texto: ", err);
        });
    }
}

let copySecondSuggestion = document.getElementById("second_password_generated");
copySecondSuggestion.addEventListener("click", copySecondPassword);

function showNotification(message) {
    let notification = document.getElementById("notification");
    notification.textContent = message;
    notification.className = "show";
    setTimeout(function() {
        notification.className = notification.className.replace("show", "");
    }, 3000);
}