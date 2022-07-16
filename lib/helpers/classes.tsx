function classes(...names: (string | undefined)[]) {
  return names.filter(Boolean).join(' ');
}

export default classes;

interface Options {
  extra: string | undefined
}

interface ClassToggles {
  [K: string]: boolean
}

const scopedClassMaker = (prefix: string) => //实际上其他组件真正使用的是他里面这个返回的函数
  (name: string | ClassToggles, options?: Options) =>//第一个参数是指默认类名（指这个组件是什么），第二个参数是用户自定义的 类名
  Object
    .entries(name instanceof Object ? name : {[name]: name})  //如果传的name是string，就把他转化成对象的形式
    .filter(kv => kv[1] !== false)  //把属性值为false的类名去除
    .map(kv => kv[0])   //把类名都单独取出来，放到一个数组里
    .map(name => [prefix, name]   //把类名前缀和类名用-连接
      .filter(Boolean)
      .join('-'))
    .concat(options && options.extra || [])  //连接类名和默认类名
    .join(' ');
export {scopedClassMaker};