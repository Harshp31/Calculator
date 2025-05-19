let input = document.getElementById('inputBox');
let buttons = document.querySelectorAll('button');

let string = "";
let arr = Array.from(buttons);
arr.forEach(button => {
    button.addEventListener('click', (h) => {
        if(h.target.innerHTML == "="){
            string = eval(string);
            input.value = string;
        }
        else if (h.target.innerHTML == 'AC'){
            string = "0";
            input.value = string;
        }
        else if (h.target.innerHTML == 'DEL'){
            string = string.substring(0, string.length-1);
            input.value = string;
        }
        else{
            string += h.target.innerHTML;
            input.value = string;
        }
    })
})