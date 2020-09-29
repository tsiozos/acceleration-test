let sg: number;
for (let i = 0; i < 100; i++) {
    sg = 0
    for (let j = 0; j < 100; j++) {
        sg += input.acceleration(Dimension.Strength)
        control.waitMicros(10000)
    }
    // wait 10 millis
    sg /= 100
    sg /= 1024
    // convert to g
    sg = sg * 9.81 - 9.81
    //  convert to m/sec^2 and subtract earth accel
    serial.writeString("" + input.runningTime() / 1000 + ", " + ("" + sg))
    basic.pause(1000)
}
