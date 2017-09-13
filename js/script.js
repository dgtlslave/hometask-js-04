var data = [2, 4, 6];

// for (var key in data) {
//   document.write(data[key]);
// }



function circleArea(array) {
  var area = [];

  for (var key in array) {
    area.push(Math.round(Math.PI * (Math.pow(array[key], 2))));
    }
  return area;
}

function map(fn, array) {
  return fn(array);
}

document.write(map(circleArea, data));
