let output = document.getElementById('output');
let string = '';

for (let i = 1; i <= 100; i++) {
    let elem = document.createElement('div')
    elem.classList.add('square')
    elem.innerText = i
    output.append(elem);
}

let squares = document.querySelectorAll('.square');

squares.forEach(function(square) {
    square.addEventListener('click', function() {
        this.classList.add('active');
        console.log(this.innerText)
    });
});

let reset = document.getElementById('reset')
reset.addEventListener('click', function(){
    location.reload();
}
)