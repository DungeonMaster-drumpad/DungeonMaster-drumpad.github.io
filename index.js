let door = new Audio('./boynextdoor.mp3')

function Guchi (key) {
    switch (key) {
        case "KeyQ":
            let sound_1 = new Audio("./1.mp3")
            sound_1.play()
            break;
        case "KeyW":
            let sound_2 = new Audio("./2.mp3")
            sound_2.play()
            break;
        case "KeyE":
            let sound_3 = new Audio("./3.mp3")
            sound_3.play()
            break;
        case "KeyA":
            let sound_4 = new Audio("./4.mp3")
            sound_4.play()
            break;
        case "KeyS":
            let sound_5 = new Audio("./5.mp3")
            sound_5.play()
            break;
        case "KeyD":
            let sound_6 = new Audio("./6.m4a")
            sound_6.play()
            break;
        case "KeyZ":
            let sound_7 = new Audio("./7.wav")
            sound_7.play()
            break;
        case "KeyX":
            let sound_8 = new Audio("./8.mp3")
            sound_8.play()
            break;
        case "KeyC":
            let sound_9 = new Audio("./9.mp3")
            sound_9.play()
            break;
       
    
        default:
            break;
    }
}

document.addEventListener('keydown', key => {
    console.log(key.code)
    Guchi(key.code)
})