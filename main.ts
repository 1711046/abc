let sprite: game.LedSprite = null
input.onButtonPressed(Button.A, function () {
    basic.clearScreen()
    for (let index = 0; index < 12; index++) {
        sprite = game.createSprite(randint(0, 4), randint(0, 4))
    }
})
input.onButtonPressed(Button.B, function () {
    basic.clearScreen()
    for (let index = 0; index < 12; index++) {
        sprite = game.createSprite(randint(0, 4), randint(0, 4))
    }
})
input.onGesture(Gesture.Shake, function () {
	
})
basic.forever(function () {
	
})
