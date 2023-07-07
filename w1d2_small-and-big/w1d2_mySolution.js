function smallBig(arr) {
  arr.sort(function (a, b) {
    return a - b;
  });

  return [arr[0], arr[arr.length - 1]];
}

console.log(smallBig([5, 6, 7, 8, 20]));
