// 1.targeting a 'body' from index.html and 'button'.
// making variable 'const'
const colorBtn = document.querySelector('.colorBtn');
const bodyBcg = document.querySelector('body');

// 2.making addEventListener,
// telling button what to do after 'click'
//  and creating a 'function'.
colorBtn.addEventListener('click',changeColor);

// 3.calling 'changeColor' function
function changeColor(){
    let random = Math.floor(Math.random()*colors.length);
    bodyBcg.style.backgroundColor = colors[random];
}

// array
const colors = [
    'yellow',
    'red',
    'green',
    'purple',
    'brown',
    'blue'
];