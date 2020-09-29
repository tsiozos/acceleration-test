for i in range(100):
    sg = 0
    for j in range(100):
        sg += input.acceleration(Dimension.Strength)
        control.wait_micros(10000) #wait 10 millis
    sg /= 100
    sg /= 1024  #convert to g
    sg = sg * 9.81 - 9.81  # convert to m/sec^2 and subtract earth accel
    serial.write_string(str(input.running_time()/1000)+", "+str(sg)+serial.NEW_LINE)
    #basic.pause(1000)
