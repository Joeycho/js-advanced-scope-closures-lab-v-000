function produceDrivingRange(range){
  return function checkDistance(distance){
    return range > distance
  }
}

function p