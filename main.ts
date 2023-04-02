input.onButtonPressed(Button.A, function () {
    you.turn(Direction.Left, 90)
    you.move(1)
    you.turn(Direction.Right, 90)
})
input.onButtonPressed(Button.AB, function () {
    basic.showLeds(`
        # . . . .
        . . . . .
        . . . . .
        . . . . .
        . . . . .
        `)
    basic.showLeds(`
        . # . # .
        . . . . .
        # # # . #
        . . . . .
        . # . # .
        `)
})
input.onButtonPressed(Button.B, function () {
    you.turn(Direction.Right, 90)
    you.move(1)
    you.turn(Direction.Left, 90)
})
input.onGesture(Gesture.LogoDown, function () {
    you.move(-1)
})
input.onLogoEvent(TouchButtonEvent.Touched, function () {
    you.move(1)
})
let end: game.LedSprite = null
let you: game.LedSprite = null
let _8: game.LedSprite = null
let _7: game.LedSprite = null
let _6: game.LedSprite = null
let _5: game.LedSprite = null
let _4: game.LedSprite = null
let _3: game.LedSprite = null
let _2: game.LedSprite = null
let _1: game.LedSprite = null
you = game.createSprite(0, 4)
you.turn(Direction.Left, 90)
basic.forever(function () {
    _4 = game.createSprite(0, 2)
    _3 = game.createSprite(1, 2)
    _2 = game.createSprite(2, 2)
    _1 = game.createSprite(1, 0)
    _5 = game.createSprite(3, 0)
    _6 = game.createSprite(4, 2)
    _7 = game.createSprite(3, 4)
    _8 = game.createSprite(1, 4)
})
basic.forever(function () {
    if (you.isTouching(_1) || you.isTouching(_2)) {
        you.delete()
        game.gameOver()
    }
    if (you.isTouching(_5) || you.isTouching(_6)) {
        you.delete()
        game.gameOver()
    }
    if (you.isTouching(_3) || you.isTouching(_4)) {
        you.delete()
        game.gameOver()
    }
    if (you.isTouching(_7) || you.isTouching(_8)) {
        you.delete()
        game.gameOver()
    }
})
basic.forever(function () {
    end = game.createSprite(0, 0)
    if (you.isTouching(end)) {
        game.addScore(1)
        basic.showString("well done")
    }
})
