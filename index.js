
for ( var i=0; i< document.querySelectorAll('.drum').length; i++) {
    document.querySelectorAll('.drum')[i].addEventListener('click', function (){ 
        
        var drumButtons = this.innerHTML;

        makeSound(drumButtons)
        buttonAnimation(drumButtons)
    });
 }

document.addEventListener('keypress', function(event){
    makeSound(event.key);
    buttonAnimation(event.key)
})

function makeSound(key) {
    switch (key) {
        case 'a':
            var tom1 = new Audio('sounds/tom-1.mp3').play()
            break;
        
        case 'd':
            var tom2 = new Audio('sounds/tom-2.mp3').play()
            break;
    
        case 'g':
            var tom3 = new Audio('sounds/tom-3.mp3').play()
           break;

        case 'h':
            var tom4 = new Audio('sounds/tom-4.mp3').play()
            break;
            
        case 'j':
            var kick = new Audio('sounds/kick-bass.mp3').play()
            break;
            
        case 'k':
            var snare = new Audio('sounds/snare.mp3').play()
            break;
            
        case 'l':
            var crash = new Audio('sounds/crash.mp3').play()
            break;
        
        default: console.log(drumButtons)
            
    }
}

function buttonAnimation(currentKey){
    var activeKey = document.querySelector('.' + currentKey);
    activeKey.classList.add('pressed');

    setTimeout(function(){
        activeKey.classList.remove('pressed')}, 100);
}