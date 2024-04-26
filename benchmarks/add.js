function add(x, y) {
  return x + y;
}

add(1, 2);
// node --allow-natives-syntax  benchmark.js
// --allow-natives-syntax flag allows this  % sign for additional debugging information
%OptimizeFunctionOnNextCall(add);
add(3, 4);
