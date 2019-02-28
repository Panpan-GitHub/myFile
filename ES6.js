3.数值的扩展
Number.isFinite    //判断一个数值是否为有限的
Number.isNaN    //判断一个数值是否为空
Number.EPSILON  //代表一个极小的常量
Number.EPSILON * Math.pow(2, 2) //设值能接受的误差范围为2的-50次方
Number.isSafeInteger()  //判断一个整数是否在js可接受的范围内

Math.trunc()    //用于去除一个数的小数部分
Math.sign()     //用来判断一个数到底是正数、负数、还是零
Math.cbrt()     //方法用于计算一个数的立方根
Math.hypot()    //返回所有参数的平方和的平方根。
Math.log1p(x)    //返回1 + x的自然对数
Math.log10()
Math.log2()

2**2    //新增了一个指数运算符（**）
// 这个运算符的一个特点是右结合，而不是常见的左结合。多个指数运算符连用时，是从最右边开始计算的。
// 相当于 2 ** (3 ** 2)
2 ** 3 ** 2
// 512

4.函数的扩展
function log(x, y = 'World')    //ES6 允许为函数的参数设置默认值，即直接写在参数定义的后面。
function foo({x, y = 5} = {})   //解构赋值
function fetch(url, { body = '', method = 'GET', headers = {} } = {}) //双重默认值

(function (a) {}).length // 1
(function (a = 5) {}).length // 0
(function (a, b, c = 5) {}).length // 2   length属性，将返回没有指定默认值的参数个数

function add(...values) {
    let sum = 0;
  
    for (var val of values) {
      sum += val;
    }
  
    return sum;
  }
  
  add(2, 5, 3) // 10 上面代码的add函数是一个求和函数，利用 rest 参数，可以向该函数传入任意数目的参数。

  5.数组的扩展
  const a2 = [...a1];   //克隆数组
  [...arr1, ...arr2, ...arr3]   //合并数组
  Array.from()  //可以将类似数组对象和可遍历对象转换为数组
  