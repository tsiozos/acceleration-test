for i in range(100):
    sg = 0
    for j in range(100):
        sg += input.acceleration(Dimension.Strength)
        control.wait_micros(10000) #wait 10 millis
    sg /= 100
    sg /= 1024  #convert to g
    sg = sg * 9.81  # convert to m/sec^2
    serial.write_value("g (m/s^2)", Math.round_with_precision(sg,2))
    basic.pause(1000)
