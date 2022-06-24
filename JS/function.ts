let screen1: number | Element | any =
  document.querySelector<HTMLInputElement>("#screen");
let btn: number | Element | any =
  document.querySelectorAll<HTMLInputElement>(".btn");

let newVal: number | string = "";
let valMemStored: number | string = "";
let stack1: number | string | any = [];
let total: number = 0;
let value: any;
let item: number | any;
let btntext: number | string | any;
let str: string;

for (item of btn) {
  item.addEventListener("click", (e: { target: { innerText: any } }) => {
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

function sin(): any {
  screen1.value = Math.sin(screen1.value);
}

function cosec(): any {
  screen1.value = 1 / Math.sin(screen1.value);
}

function cos(): any {
  screen1.value = Math.cos(screen1.value);
}

function sec(): any {
  screen1.value = 1 / Math.cos(screen1.value);
}

function tan(): any {
  screen1.value = Math.tan(screen1.value);
}

function cot(): any {
  screen1.value = 1 / Math.tan(screen1.value);
}

function pow(): any {
  screen1.value = Math.pow(screen1.value, 2);
}

function sqrt(): any {
  screen1.value = Math.sqrt(screen1.value);
}

function log(): any {
  screen1.value = Math.log10(screen1.value);
}

function ln(): any {
  screen1.value = Math.log(screen1.value);
}

function pi(): any {
  screen1.value = 3.14159265359;
}

function e(): any {
  screen1.value = 2.71828182846;
}

function exp(): any {
  screen1.value = Math.exp(screen1.value);
}

function fact(): any {
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

function red(): any {
  screen1.value = Math.PI / (180 * screen1.value);
}

function by(): any {
  screen1.value = 1 / screen1.value;
}

function modo(): any {
  let ansA;
  let result;

  ansA = screen1.value;
  if (ansA > 0) {
    result = screen1.value;
  } else {
    result = screen1.value * -1;
  }

  screen1.value = result;
}

function TenPow(): any {
  screen1.value = Math.pow(10, screen1.value);
}

function invert(): any {
  screen1.value = screen1.value * -1;
}

function rad(): any {
  var radian = screen1.value;
  var radia = (radian * 180) / 3.14;
  screen1.value = radia;
}

function deg(): any {
  var degian = screen1.value;
  var degia = 3.14 / (degian * 180);
  screen1.value = degia;
}

function copyButPress(): any {
  valMemStored = screen1.value;
}

function pasteButPress(): any {
  if (valMemStored) {
    screen1.value = valMemStored;
    newVal = valMemStored;
  }
}

function MmPos(): any {
  total = 0;
  stack1.push(Number(screen1.value));
  console.log(stack1);
  for (let val of stack1) {
    total += parseInt(stack1[val]);
  }
  console.log(total);
  console.log(stack1);
}

function MmNiv(): any {
  total -= screen1.value;
  console.log(total);
  console.log(stack1);
}

function MmSave(): any {
  stack1.push(screen1.value);
  console.log(stack1);
}

function MmRecall(): any {
  let temp = stack1[stack1.length - 1];
  screen1.value = temp;
  str = temp.toString();
  screen1.value = str;
  console.log(temp);
  console.log(stack1);
}

function MmClear(): any {
  stack1 = [];
  console.log(stack1);
  console.log("stack1 is empty.");
}

function evel1(): any {
  screen1.value = eval(screen1.value);
}

function clear1(): any {
  screen1.value = "";
}
