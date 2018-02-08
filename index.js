function produceDrivingRange(range){
  return function checkDistance(distance){
    if(range>distance){
      puts('within range by 10')
    }else{
      puts(distance-range + 'blocks out of range')
    }
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
