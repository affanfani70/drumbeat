
// event listner on click 
let length = document.getElementsByClassName('drum').length
console.log(length)
for (let i = 0; i < length; i++) {
    let drum = document.getElementsByClassName('drum')[i]
    drum.addEventListener('click',()=>{
           let btn = drum.innerHTML;
            makeSound(btn);
            btnAnimation(btn);
    })
}

// Event listner on key press
document.addEventListener('keypress', (event) => {
    makeSound(event.key)
    btnAnimation(event.key)
})

// key sound funtion
const makeSound = (key)=>{

    switch (key) {
        case 'w':
            let tom1 = new Audio('tom-1.mp3');
            tom1.play();
            break;
        case 'a':
            let tom2 = new Audio('tom-2.mp3');
            tom2.play();
            break;
        case 's':
            let tom3 = new Audio('tom-3.mp3');
            tom3.play();
            break;
        case 'd':
            let tom4 = new Audio('tom-4.mp3');
            tom4.play();
            break;
        case 'j':
            let snare = new Audio('snare.mp3');
            snare.play();
            break;
        case 'k':
            let crash = new Audio('crash.mp3');
            crash.play();
            break;
        case 'l':
            let kick = new Audio('kick-bass.mp3');
            kick.play();
            break;

        default:
            console.log(key);
            break;
    }
}

// button animation whenkey is pressed 
const btnAnimation = (key)=>{
    let activeBtn = document.querySelector('.'+key);
    activeBtn.classList.add("pressed");
    setTimeout(()=>{
        activeBtn.classList.remove("pressed");
    },200)
}