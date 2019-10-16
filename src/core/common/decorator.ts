
export function after(...args) {
  return (_target, name, descriptor) => {
    // 获取value，其实就是原函数
    const oldValue = descriptor.value;
    // 将value重新赋值一个函数
    descriptor.value = async function () {
      // tslint:disable-next-line: no-console
      console.log(`Calling ${name} with`, arguments);
      // 将原本的函数执行一下,apply改变this的指向
      const val = await oldValue.apply(this, arguments)
      let result = val;
      for (const callback of args) {
        result = (await callback(this, result, ...arguments)) || result
      }
      return result;
    };

    return descriptor;
  }
}