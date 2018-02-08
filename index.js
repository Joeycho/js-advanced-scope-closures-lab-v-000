function produceDrivingRange(range){
  return function checkDistance(distance){
    return range > distance
  }
}

function produceTipCalculator(percent){
  return function calculate(fare){
    return fare*percent
  }
}

function createDriver(){
  let driverId = 0

  return class Driver{
    constructor(){
      driverId++
    }
  }
    
  }
}