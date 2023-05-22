function moveforward () {
    motobit.enable(MotorPower.On)
    motobit.setMotorSpeed(Motor.Left, MotorDirection.Forward, 50)
    motobit.setMotorSpeed(Motor.Right, MotorDirection.Forward, 50)
    basic.pause(200)
    motobit.setMotorSpeed(Motor.Left, MotorDirection.Forward, 0)
    motobit.setMotorSpeed(Motor.Right, MotorDirection.Forward, 0)
    motobit.enable(MotorPower.Off)
}
function turnleft () {
    motobit.enable(MotorPower.On)
    motobit.setMotorSpeed(Motor.Right, MotorDirection.Forward, 50)
    basic.pause(200)
    motobit.setMotorSpeed(Motor.Right, MotorDirection.Forward, 0)
    motobit.enable(MotorPower.Off)
}
radio.onReceivedNumberDeprecated(function (receivedNumber) {
    if (receivedNumber == 0) {
        basic.showNumber(0)
        moveforward()
        basic.pause(500)
        stop()
    } else if (receivedNumber == 1) {
        basic.showNumber(1)
        turnleft()
        basic.pause(500)
        stop()
    } else if (receivedNumber == 2) {
        basic.showNumber(2)
        turnright()
        basic.pause(500)
        stop()
    }
})
function stop () {
    motobit.setMotorSpeed(Motor.Left, MotorDirection.Forward, 0)
    motobit.setMotorSpeed(Motor.Right, MotorDirection.Forward, 0)
    motobit.enable(MotorPower.Off)
}
function turnright () {
    motobit.enable(MotorPower.On)
    motobit.setMotorSpeed(Motor.Left, MotorDirection.Forward, 50)
    basic.pause(200)
    motobit.setMotorSpeed(Motor.Left, MotorDirection.Forward, 0)
    motobit.enable(MotorPower.Off)
}
radio.setGroup(20)
stop()
basic.forever(function () {
    stop()
    basic.showIcon(IconNames.Happy)
})
