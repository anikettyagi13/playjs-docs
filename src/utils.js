export function formatCode(code, setCode) {
  let betweenBrackets = code.substring(6, code.length - 2)
  let beforeBracket = code.split('{')[0] + '{'
  console.log(betweenBrackets)
  betweenBrackets = `<span class="addBluish">${betweenBrackets}</span>})`
  setCode(beforeBracket + betweenBrackets)
}
