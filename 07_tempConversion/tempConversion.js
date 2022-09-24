const ftoc = function(fahrenheit) {

  let cel = (fahrenheit - 32) * (5/9)
  return Number(cel.toFixed(1))
};

const ctof = function(celsius) {

let fah = celsius * (9/5) + 32
return Number(fah.toFixed(1))


};


// Do not edit below this line
module.exports = {
  ftoc,
  ctof
};
