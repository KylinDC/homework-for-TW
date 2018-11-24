var money = "￥20"

function getAmount(money) {
  return parseInt(money.slice(1));
}
console.log(getAmount(money));
