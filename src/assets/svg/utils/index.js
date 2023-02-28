// 样式字符串的格式，转化为react里面样式对象的格式
// "display:block; font-size: 12px;"  -->  {display: 'block', fontSize: '12px'}
function styleStrToObject(str){
  const obj = {}

  const s = str.toLowerCase().replace(/-(.)/g, function (m, g) {
    return g.toUpperCase();
  }).replace(/;\s?$/g, "").split(/:|;/g)

  for (let i = 0; i < s.length; i += 2) {
    obj[s[i].replace(/\s/g, "")] = s[i+1].replace(/^\s+|\s+$/g, "")
  }

  return obj
}

export default styleStrToObject