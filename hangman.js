/**
 * Created by Tina on 8.3.2017..
 */
var img_arr = Array("img/2.jpg", "img/3.jpg", "img/4.jpg", "img/5.jpg", "img/6.jpg", "img/7.jpg", "img/8.jpg");
var text_arr = Array("leptir", "kokos", "truba", "knjiga", "fudbal", "zvezda", "kreda");
var char_arr = Array();
var char_arr_index = Array();
var attempts = Array();
var error = 0;
var span_text = "";
var rd = Math.floor(Math.random() * 6);
var random_text = text_arr[rd];
for (var i in random_text) {
    char_arr[i] = random_text[i];
    char_arr_index[i] = "_ ";
    span_text += "_ "
}
document.getElementById("span1").innerHTML = span_text;

function verification_letters() {
    document.getElementById("char").style.borderColor = "black";
    document.getElementById("error").innerHTML = "";

    var input_text = document.getElementById("char").value.toLowerCase();
    document.getElementById("char").value = "";
    if(input_text != "") {
        var x2 = new Array ("0","1","2","3","4","5","6","7","8","9","0","-","=","/","*","-","+","!","£","$","%","^","&","*","(",")","_","|","?",">","<",".", " ");
        var x3 = 0;
        for(var x1 in x2){
            if(x2[x1] == input_text){
                x3++;
            }
        }

        if(x3 == 0) {
            span_text = "";
            var n = 0;
            for (var j in char_arr) {
                if (char_arr[j] == input_text) {
                    span_text += char_arr[j];
                    char_arr_index[j] = char_arr[j];
                    n++;
                    var y = 0;
                    for (var x in char_arr_index) {
                        if (char_arr_index[x] == "_ ") {
                            y++;
                        }
                    }
                    if (y == 0) {
                        winLost("win");
                        break;
                    }
                }
                else {
                    span_text += char_arr_index[j];
                }
            }
            document.getElementById("span1").innerHTML = span_text;
            if (n == 0) {
                var t = 0;
                for (var g in attempts) {
                    if (attempts[g] == input_text) {
                        t++;
                    }
                }
                if (t == 0) {
                    if (img_arr.length != 0) {
                        document.getElementById('hangman_img').src = img_arr[0];
                        img_arr.shift();
                        attempts.push(input_text);
                        error++;
                    }
                    else {
                        winLost("lost");
                    }
                }
            }
        }

        else{
            errorText();
        }
    }
}
function your_attempts(number) {
    if (number == 1) {
        document.getElementById("btn-p").innerHTML = attempts;
    }
    else if (number == 2) {
        document.getElementById("btn-p").innerHTML = "The number of errors made: " + error;
    }
}
function del() {
    document.getElementById("btn-p").innerHTML = "";
    document.getElementById("error").innerHTML = "";
    document.getElementById("char").style.borderStyle = "solid";
    document.getElementById("char").style.borderColor = "black";
}
function errorText() {
    document.getElementById("error").innerHTML = "Enter the letter!!!";
    document.getElementById("char").style.borderStyle = "solid";
    document.getElementById("char").style.borderColor = "red";
}
function winLost(text) {
    document.getElementById("win/lost").style.display = "none";
    var text = text;
    if(text == "win"){
        document.getElementById("w/l").innerHTML = "You WIN!!!!!";
        document.getElementById("w/l").style.color = "green";
        document.getElementById("start").style.display = "block";
    }
    else if(text == "lost"){
        document.getElementById("w/l").innerHTML = "Game Over! Your word is: " + random_text;
        document.getElementById("w/l").style.color = "red";
        document.getElementById("start").style.display = "block";
    }
}
function start() {
    window.location.href = "http://hangman123456789.net23.net/";
}