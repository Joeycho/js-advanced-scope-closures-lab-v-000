function produceDrivingRange(range){
  return function checkDistance(distance){
    if(range>distance){
      console.log('within range by 10')
    }else{
      console.log(distance-range + 'blocks out of range')
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
