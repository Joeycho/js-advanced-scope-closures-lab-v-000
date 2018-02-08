function produceDrivingRange(range){
  return function checkDistance(distance){
    let rangeInt = parseInt(range)
    let distanceInt = parseInt(distance)


    if(rangeInt>=distanceInt){
      return `within range by ${rangeInt-distanceInt}`
    }else{
      return `${distanceInt-rangeInt} blocks out of range`
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
