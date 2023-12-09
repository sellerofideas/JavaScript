let player = document.querySelector('#player')
let squad = document.querySelector('#squad')

function jump(){
    if(player.classList != 'animation') {
        player.classList.add('animation')
    }

    setTimeout(function() {
        player.classList.remove('animation')
    }, 500);

    var textDump = setInterval(function() {
        var topPlayer = parseInt(
            window.getComputedStyle(player).getPropertyValue('top')
        )
        var leftSquad = parseInt(
            window.getComputedStyle(squad).getPropertyValue('left')
        )

        if(leftSquad < 20 && leftSquad > 0 && topPlayer >= 130) {
            squad.style.animation = 'none'
            squad.style.display = 'none'
            alert('Você perdeu!')
        }
    }, 10)
}