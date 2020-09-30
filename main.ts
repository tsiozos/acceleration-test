let sg: number;
for (let i = 0; i < 100; i++) {
    sg = 0
    for (let j = 0; j < 100; j++) {
        sg += input.acceleration(Dimension.Strength)
        control.waitMicros(5000)
    }
    // wait 5 millis
    sg /= 100
    sg /= 1024
    // convert to g
    sg = sg * 9.81
    //  convert to m/sec^2
    serial.writeString("" + Math.idiv(control.millis(), 1000) + "," + ("" + sg))
}
