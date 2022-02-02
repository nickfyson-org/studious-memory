function endsWith(x, y) {
  let index = x.lastIndexOf(y);
  return index !== -1 && index === x.length - y.length;
}

function endsWith(x, y) {
  return x.lastIndexOf(y) === x.length - y.length;
}
