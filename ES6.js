1.变量的解构赋值
let [a,b,b] = [1,2,3]
let [a,[b],c] = [1,[2],3] //解构赋值要求两边模式相同

let [x,y = 'a'] = ['b'] //解构赋值允许设置默认值

//注意：ES6使用严格的（===）判断一个位置是否有效

//如果默认值是一个表达式，那么这个表达式是惰性求值的，即只有在用到的时候，才会求值。
function f() {
  console.log('aaa');
}

let [x = f()] = [1];

2.对象的解构赋值
let {foo,baz} = {foo:"a",baz:"b"}

嵌套解构
let obj = {
    p: [
      'Hello',
      { y: 'World' }
    ]
  };
  
  let { p: [x, { y }] } = obj;
  如果要为P赋值
  let {p,p:[x, { y }]} = obj
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
  let arrayLike = {
    '0': 'a',
    '1': 'b',
    '2': 'c',
    length: 3
};
let arr2 = Array.from(arrayLike); // ['a', 'b', 'c']

  Array.of(3,4,5)  //将一组值，转换为数组。
  find()  //用于找出第一个符合条件的数组成员
  fill()  //使用给定值，填充一个数组。
  ['a', 'b', 'c'].fill(7, 1, 2)
// ['a', 7, 'c']

// ES6 提供三个新的方法——entries()，keys()和values()——用于遍历数组。
// keys()是对键名的遍历、values()是对键值的遍历，entries()是对键值对的遍历。
for (let index of ['a', 'b'].keys()) {
  console.log(index);
}
// 0
// 1

for (let elem of ['a', 'b'].values()) {
  console.log(elem);
}
// 'a'
// 'b'

for (let [index, elem] of ['a', 'b'].entries()) {
  console.log(index, elem);
}
// 0 "a"
// 1 "b"

incluudes()   //方法返回一个布尔值，表示某个数组是否包含给定的值
flat()  //用于将嵌套的数组“拉平”，变成一维的数组。该方法返回一个新数组，对原数据没有影响。
flat(1) //表示拉平一层，Infinity关键字可以将所有层拉平


setTimeout(function(){
  console.log(4)
},0); 
new Promise(function(resolve){
   console.log(1) 
   for( var i=0 ; i<10000 ; i++ ){
      i==9999 && resolve() 
    } 
    console.log(2) 
  }).then(function(){ 
      console.log(5) 
    });
       console.log(3);

