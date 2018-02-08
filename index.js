function produceDrivingRange(range){
  return function checkDistance(distOne, distTwo){
    let rangeInt = parseInt(range)
    let distOneInt = parseInt(distOne)
    let distTwoInt = parseInt(distTwo)

    let diff = Math.abs(distOneInt-distTwoInt)

    return distTwoInt
/*
    if(diff=<rangeInt){
      return `within range by ${rangeInt-diff}`
    }else{
      return `${diff-rangeInt} blocks out of range`
    }
*/
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
