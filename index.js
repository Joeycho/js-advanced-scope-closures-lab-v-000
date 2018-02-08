function produceDrivingRange(range){
  return function checkDistance(dist1, dist2){
    let rangeInt = parseInt(range)
    let dist1Int = parseInt(dist1)
    let dist2Int = parseInt(dist2)

    let diff = Math.abs(dist1Int-dist2Int)

    if(diff=<rangeInt){
      return `within range by ${rangeInt-diff}`
    }else{
      return `${diff-rangeInt} blocks out of range`
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
