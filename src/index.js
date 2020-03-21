module.exports = function check(str, bracketsConfig) {
  bracketsConfig = bracketsConfig.map((config) => config.join(''));
  for (let i = 0; i < bracketsConfig.length;) {
    if (str.includes(bracketsConfig[i])) {
      str = str.replace(bracketsConfig[i], '');
      i = 0;
    } else {
      i++;
    }
  }
  return str ? false : true;
}