module.exports.seperator = (pre = "_") => {
  console.log(`${pre}___________\n`)
}

module.exports.log = (...string_arr) => {
  // env param for logging, do later
  if (1) {
    if (string_arr.arr === 1)
      console.log(string_arr[0])
    else
      console.log(...string_arr)
  }
}

module.exports.isArrayEmpty = (arr) => {

  if (!Array.isArray(arr))
    throw "isArrayEmpty: Invalid Input, not an Array"

  if (!(arr && arr.length))
    return true;
  return false;

}

