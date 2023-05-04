// 递归时, 记得 条件判断，以防 死循环似地 递归
point();
var x = 0;
function point() {
  console.log("触发 递归 了");
  // point();

  if (x <= 5) {
    x++;
    point();
  }
}



let person = {
  name: '王五',
  sex: '女'
}

Object.defineProperty(person, 'age', {

  get() {
    console.log('有人读取age属性了');
    return number
  },
  set(value) {
    console.log('有人修改了 age 属性，且值是', value);
    number = value
  },
  enumerable: true,   // 可遍历
})

console.log(Object.keys(person));    // ['name', 'sex']

// 通过 Object.defineProperty()  追加（添加）的属性 以及 属性值:
// 默认不可修改（写）、不可遍历、不可删除，除非设置属性的配置项才行。
// 所以通过 Object.keys() 遍历 person对象 时 无法遍历出 age属性，
// 除非 给 age属性 设置 enumerable: true，即可遍历出


let data = {
  // name: "北京大学",
  // address: "北京朝阳区",~
  person: [
    { name: "lisi", age: 16 },
    { name: "huahua", age: 17, sex: "男" },
  ],
  person2: [
    { name: "wuwu", age: 16 },
    { name: "bibi", age: 17, sex: "男" },
  ],
};

const dProps = Object.keys(data);


console.log(dProps);

    for (let i = 0; i < 100; i++) {   
      
    }


