basic.forever(function () {
    if (input.lightLevel() > 0 && input.lightLevel() <= 10) {
        basic.showLeds(`
            . . . . .
            . . . . .
            . . . . .
            . . . . .
            # . . . .
            `)
    } else if (input.lightLevel() >= 10 && input.lightLevel() <= 20) {
        basic.showLeds(`
            . . . . .
            . . . . .
            . . . . .
            . . . . .
            # # . . .
            `)
    } else if (input.lightLevel() >= 20 && input.lightLevel() <= 30) {
        basic.showLeds(`
            . . . . .
            . . . . .
            . . . . .
            . . . . .
            # # # . .
            `)
    } else if (input.lightLevel() >= 30 && input.lightLevel() <= 40) {
        basic.showLeds(`
            . . . . .
            . . . . .
            . . . . .
            . . . . .
            # # # # .
            `)
    } else if (input.lightLevel() >= 40 && input.lightLevel() <= 50) {
        basic.showLeds(`
            . . . . .
            . . . . .
            . . . . .
            . . . . .
            # # # # #
            `)
    } else if (input.lightLevel() >= 50 && input.lightLevel() <= 60) {
        basic.showLeds(`
            . . . . .
            . . . . .
            . . . . .
            # . . . .
            # # # # #
            `)
    } else if (input.lightLevel() >= 60 && input.lightLevel() <= 70) {
        basic.showLeds(`
            . . . . .
            . . . . .
            . . . . .
            # # . . .
            # # # # #
            `)
    } else if (input.lightLevel() >= 70 && input.lightLevel() <= 80) {
        basic.showLeds(`
            . . . . .
            . . . . .
            . . . . .
            # # # . .
            # # # # #
            `)
    } else if (input.lightLevel() >= 80 && input.lightLevel() <= 90) {
        basic.showLeds(`
            . . . . .
            . . . . .
            . . . . .
            # # # # .
            # # # # #
            `)
    } else if (input.lightLevel() > 90 && input.lightLevel() <= 100) {
        basic.showLeds(`
            . . . . .
            . . . . .
            . . . . .
            # # # # #
            # # # # #
            `)
    } else if (input.lightLevel() > 100 && input.lightLevel() <= 110) {
        basic.showLeds(`
            . . . . .
            . . . . .
            # . . . .
            # # # # #
            # # # # #
            `)
    } else if (input.lightLevel() > 110 && input.lightLevel() <= 120) {
        basic.showLeds(`
            . . . . .
            . . . . .
            # # . . .
            # # # # #
            # # # # #
            `)
    } else if (input.lightLevel() > 120 && input.lightLevel() <= 130) {
        basic.showLeds(`
            . . . . .
            . . . . .
            # # # . .
            # # # # #
            # # # # #
            `)
    } else if (input.lightLevel() > 130 && input.lightLevel() <= 140) {
        basic.showLeds(`
            . . . . .
            . . . . .
            # # # # .
            # # # # #
            # # # # #
            `)
    } else if (input.lightLevel() > 140 && input.lightLevel() <= 150) {
        basic.showLeds(`
            . . . . .
            . . . . .
            # # # # #
            # # # # #
            # # # # #
            `)
    } else if (input.lightLevel() > 150 && input.lightLevel() <= 160) {
        basic.showLeds(`
            . . . . .
            # . . . .
            # # # # #
            # # # # #
            # # # # #
            `)
    } else if (input.lightLevel() > 160 && input.lightLevel() <= 170) {
        basic.showLeds(`
            . . . . .
            # # . . .
            # # # # #
            # # # # #
            # # # # #
            `)
    } else if (input.lightLevel() > 170 && input.lightLevel() <= 180) {
        basic.showLeds(`
            . . . . .
            # # # . .
            # # # # #
            # # # # #
            # # # # #
            `)
    } else if (input.lightLevel() > 180 && input.lightLevel() <= 190) {
        basic.showLeds(`
            . . . . .
            # # # # .
            # # # # #
            # # # # #
            # # # # #
            `)
    } else if (input.lightLevel() > 190 && input.lightLevel() <= 200) {
        basic.showLeds(`
            . . . . .
            # # # # #
            # # # # #
            # # # # #
            # # # # #
            `)
    } else if (input.lightLevel() > 200 && input.lightLevel() <= 210) {
        basic.showLeds(`
            # . . . .
            # # # # #
            # # # # #
            # # # # #
            # # # # #
            `)
    } else if (input.lightLevel() > 210 && input.lightLevel() < 220) {
        basic.showLeds(`
            # # . . .
            # # # # #
            # # # # #
            # # # # #
            # # # # #
            `)
    } else if (input.lightLevel() > 220 && input.lightLevel() <= 230) {
        basic.showLeds(`
            # # # . .
            # # # # #
            # # # # #
            # # # # #
            # # # # #
            `)
    } else if (input.lightLevel() > 240 && input.lightLevel() <= 250) {
        basic.showLeds(`
            # # # # .
            # # # # #
            # # # # #
            # # # # #
            # # # # #
            `)
    } else if (input.lightLevel() > 250 && input.lightLevel() <= 260) {
        basic.showLeds(`
            # # # # #
            # # # # #
            # # # # #
            # # # # #
            # # # # #
            `)
    } else {
        basic.showLeds(`
            . . . . .
            . . . . .
            . . . . .
            . . . . .
            . . . . .
            `)
    }
    serial.writeLine("" + (input.lightLevel()))
    basic.pause(200)
})
