let step = 0
let time = 0
input.onButtonPressed(Button.A, function () {
    step += 1
    basic.showNumber(step)
})
input.onButtonPressed(Button.AB, function () {
    time = 0
    basic.showNumber(time)
})
input.onButtonPressed(Button.B, function () {
    step = 0
    basic.showNumber(step)
})
input.onLogoEvent(TouchButtonEvent.Pressed, function () {
    while (!(input.buttonIsPressed(Button.B))) {
        basic.pause(100)
        time += 1
        basic.showNumber(time)
    }
})
