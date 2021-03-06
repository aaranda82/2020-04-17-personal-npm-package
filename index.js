module.exports.makeArrayLowercase = stringArray => {
  return stringArray.map(item=>item.toLowerCase())
}

module.exports.addArrays = (arr1, arr2) => {
  if(arr1.length < arr2.length) {
    var len = arr1.length
  } else {
    var len = arr2.length
  }
  const sumOfArrays = []
  for( let x = 0; x < len; x++) {
    if(typeof arr1[x] !== "number" || typeof arr2[x] !== "number" && (arr1[x] !== NaN || arr2[x] !== NaN) ) {
      sumOfArrays.push(NaN)
    } else { 
      sumOfArrays.push(arr1[x] + arr2[x])
    }
  }
  return sumOfArrays
}