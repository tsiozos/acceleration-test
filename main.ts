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
    sg = sg * 9.81
    //  convert to m/sec^2
    serial.writeValue("g (m/s^2)", Math.roundWithPrecision(sg, 2))
    basic.pause(1000)
}
