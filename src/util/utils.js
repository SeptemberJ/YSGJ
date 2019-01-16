// 秒数回转
export function secondToFormat (second) {
  var oDate = new Date(second)
  var oYear = oDate.getFullYear()
  var oMonth = oDate.getMonth() + 1
  var oDay = oDate.getDate()
  var oHour = oDate.getHours()
  var oMin = oDate.getMinutes()
  // var oSen = oDate.getSeconds()
  // oTime = oYear + '-' + getzf(oMonth) + '-' + getzf(oDay)
  var oTime = oYear + '-' + getzf(oMonth) + '-' + getzf(oDay) + ' ' + getzf(oHour) + ':' + getzf(oMin) // + ':' + getzf(oSen)
  return oTime
}
// 补零
function getzf (num) {
  if (parseInt(num) < 10) {
    num = '0' + num
  }
  return num
}
