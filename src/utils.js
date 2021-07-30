export function formatCode(code, setCode) {
  let betweenBrackets = code.substring(6, code.length - 2)
  let beforeBracket = code.split('{')[0] + '{'
  console.log(betweenBrackets)
  betweenBrackets = `<span class="addBluish">${betweenBrackets}</span>})`
  setCode(beforeBracket + betweenBrackets)
}

export function decomposeValue(val, unit) {
  var rgx = /[+-]?\d*\.?\d+(?:\.\d+)?(?:[eE][+-]?\d+)?/g
  var value = validateValue(val, unit) + ''
  return {
    numbers: value.match(rgx) ? value.match(rgx).map(Number) : [0],
    strings: typeof val == 'string' || unit ? value.split(rgx) : [],
  }
}
function validateValue(val, unit) {
  if (/\s/g.test(val)) {
    return val
  }
  var originalUnit = ''
  var unitLess = originalUnit
    ? val.substr(0, val.length - originalUnit.length)
    : val
  if (unit) {
    return unitLess + unit
  }
  return unitLess
}
