var slice = [].slice;

$(function() {
  var _numFn;
  _numFn = function() {
    var first;
    first = 1 <= arguments.length ? slice.call(arguments, 0) : [];
    console.log(first);
    return true;
  };
  return true;
});
