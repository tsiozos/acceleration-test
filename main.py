for i in range(100):
    sg = 0
    for j in range(100):
        sg += input.acceleration(Dimension.Strength)
        control.wait_micros(5000) #wait 5 millis
    sg /= 100
    sg /= 1024  #convert to g
    sg = sg * 9.81  # convert to m/sec^2
    serial.write_string(str(control.millis()//1000)+','+str(sg))
    #basic.pause(1000)
