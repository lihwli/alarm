input.onPinReleased(TouchPin.P2, function () {
    Alarm += 1
    if (Alarm == 1) {
        basic.showIcon(IconNames.No)
        music.playTone(494, music.beat(BeatFraction.Whole))
        music.playTone(392, music.beat(BeatFraction.Whole))
        basic.pause(500)
    }
})
input.onButtonPressed(Button.AB, function () {
    Alarm = 0
    basic.showIcon(IconNames.Yes)
})
let Alarm = 0
Alarm = 0
basic.showIcon(IconNames.Yes)
basic.forever(function () {
	
})
