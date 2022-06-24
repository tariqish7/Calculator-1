var screen1 = document.querySelector("#screen");
var btn = document.querySelectorAll(".btn");
var newVal = "";
var valMemStored = "";
var stack1 = [];
var total = 0;
var value;
var item;
var btntext;
var str;
for (var _i = 0, btn_1 = btn; _i < btn_1.length; _i++) {
    item = btn_1[_i];
    item.addEventListener("click", function (e) {
        btntext = e.target.innerText;
        if (btntext == "×") {
            btntext = "*";
        }
        if (btntext == "÷") {
            btntext = "/";
        }
        screen1.value += btntext;
    });
}
function sin() {
    screen1.value = Math.sin(screen1.value);
}
function cosec() {
    screen1.value = 1 / Math.sin(screen1.value);
}
function cos() {
    screen1.value = Math.cos(screen1.value);
}
function sec() {
    screen1.value = 1 / Math.cos(screen1.value);
}
function tan() {
    screen1.value = Math.tan(screen1.value);
}
function cot() {
    screen1.value = 1 / Math.tan(screen1.value);
}
function pow() {
    screen1.value = Math.pow(screen1.value, 2);
}
function sqrt() {
    screen1.value = Math.sqrt(screen1.value);
}
function log() {
    screen1.value = Math.log10(screen1.value);
}
function ln() {
    screen1.value = Math.log(screen1.value);
}
function pi() {
    screen1.value = 3.14159265359;
}
function e() {
    screen1.value = 2.71828182846;
}
function exp() {
    screen1.value = Math.exp(screen1.value);
}
function fact() {
    var i, num, f;
    f = 1;
    num = screen1.value;
    for (i = 1; i <= num; i++) {
        f = f * i;
    }
    i = i - 1;
    screen1.value = f;
}
function backspc() {
    screen1.value = screen1.value.substr(0, screen1.value.length - 1);
}
function red() {
    screen1.value = Math.PI / (180 * screen1.value);
}
function by() {
    screen1.value = 1 / screen1.value;
}
function modo() {
    var ansA;
    var result;
    ansA = screen1.value;
    if (ansA > 0) {
        result = screen1.value;
    }
    else {
        result = screen1.value * -1;
    }
    screen1.value = result;
}
function TenPow() {
    screen1.value = Math.pow(10, screen1.value);
}
function invert() {
    screen1.value = screen1.value * -1;
}
function rad() {
    var radian = screen1.value;
    var radia = (radian * 180) / 3.14;
    screen1.value = radia;
}
function deg() {
    var degian = screen1.value;
    var degia = 3.14 / (degian * 180);
    screen1.value = degia;
}
function copyButPress() {
    valMemStored = screen1.value;
}
function pasteButPress() {
    if (valMemStored) {
        screen1.value = valMemStored;
        newVal = valMemStored;
    }
}
function MmPos() {
    total = 0;
    stack1.push(Number(screen1.value));
    console.log(stack1);
    for (var _i = 0, stack1_1 = stack1; _i < stack1_1.length; _i++) {
        var val = stack1_1[_i];
        total += parseInt(stack1[val]);
    }
    console.log(total);
    console.log(stack1);
}
function MmNiv() {
    total -= screen1.value;
    console.log(total);
    console.log(stack1);
}
function MmSave() {
    stack1.push(screen1.value);
    console.log(stack1);
}
function MmRecall() {
    var temp = stack1[stack1.length - 1];
    screen1.value = temp;
    str = temp.toString();
    screen1.value = str;
    console.log(temp);
    console.log(stack1);
}
function MmClear() {
    stack1 = [];
    console.log(stack1);
    console.log("stack1 is empty.");
}
function evel1() {
    screen1.value = eval(screen1.value);
}
function clear1() {
    screen1.value = "";
}
