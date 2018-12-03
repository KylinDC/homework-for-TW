let user = {};

user.name = 'Jonh';
user['surname'] = 'Mike';
user.name = 'Peter';
delete user.name;


var fruit = {
  apple: 20,
  pear: 20,
  peach: 10,
  valueSum: function() {
    let sum = 0;
    for (let element in this) {
      if (typeof this[element] === 'number') {
        sum += this[element];
      }
    }
    return sum;
  }
};

console.log(fruit.valueSum());
