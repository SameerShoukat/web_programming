/*
//Event Anchor
function foo(greet) {
    alert(greet)

}
//Event Button
function clickbtn() {
    alert('Clicked')
}
//Get Name
{
    function getname() {
        var name = document.getElementById('name');
        name.value = "sameer";
    }
}

function para() {
    var para1 = document.getElementById('para')
    para1.innerHTML = "My name is sameer & i am coming"
}*/
//Calculator

function getnum(num) {
    var result = document.getElementById('result')
    result.value += num;
}

function process() {
    var result = document.getElementById('result');
    if (result.value.length === 0) {
        alert("Invalid Expression")
    } else {
        result.value = eval(result.value);
    }
}

function clean() {
    var clear = document.form.textview;
    clear.value = "";
}

function back() {
    var exp = document.form.textview.value;
    document.form.textview.value = exp.substring(0, exp.length - 1);
}

function cos(form) {
    var cos = document.getElementById('result')
    cos.value = Math.cos(cos.value);
}

function sin(form) {
    var sin = document.getElementById('result')
    sin.value = Math.sin(sin.value);
}

function tan(form) {
    var tan = document.getElementById('result')
    tan.value = Math.tan(tan.value);
}

function squrt() {
    var sqrt = document.getElementById('result')
    sqrt.value = Math.sqrt(sqrt.value);

}

function square() {
    var square = document.getElementById('result')
    square.value = square.value * square.value;
}

function log() {
    var log = document.getElementById('result')
    log.value = Math.log(log.value);
}