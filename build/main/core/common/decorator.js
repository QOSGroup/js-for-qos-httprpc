"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function after(...args) {
    return (_target, name, descriptor) => {
        // 获取value，其实就是原函数
        const oldValue = descriptor.value;
        // 将value重新赋值一个函数
        descriptor.value = async function () {
            // tslint:disable-next-line: no-console
            console.log(`Calling ${name} with`, arguments);
            // 将原本的函数执行一下,apply改变this的指向
            const val = await oldValue.apply(this, arguments);
            let result = val;
            for (const callback of args) {
                result = (await callback(this, result, ...arguments)) || result;
            }
            return result;
        };
        return descriptor;
    };
}
exports.after = after;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGVjb3JhdG9yLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vc3JjL2NvcmUvY29tbW9uL2RlY29yYXRvci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUNBLFNBQWdCLEtBQUssQ0FBQyxHQUFHLElBQUk7SUFDM0IsT0FBTyxDQUFDLE9BQU8sRUFBRSxJQUFJLEVBQUUsVUFBVSxFQUFFLEVBQUU7UUFDbkMsa0JBQWtCO1FBQ2xCLE1BQU0sUUFBUSxHQUFHLFVBQVUsQ0FBQyxLQUFLLENBQUM7UUFDbEMsaUJBQWlCO1FBQ2pCLFVBQVUsQ0FBQyxLQUFLLEdBQUcsS0FBSztZQUN0Qix1Q0FBdUM7WUFDdkMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxXQUFXLElBQUksT0FBTyxFQUFFLFNBQVMsQ0FBQyxDQUFDO1lBQy9DLDRCQUE0QjtZQUM1QixNQUFNLEdBQUcsR0FBRyxNQUFNLFFBQVEsQ0FBQyxLQUFLLENBQUMsSUFBSSxFQUFFLFNBQVMsQ0FBQyxDQUFBO1lBQ2pELElBQUksTUFBTSxHQUFHLEdBQUcsQ0FBQztZQUNqQixLQUFLLE1BQU0sUUFBUSxJQUFJLElBQUksRUFBRTtnQkFDM0IsTUFBTSxHQUFHLENBQUMsTUFBTSxRQUFRLENBQUMsSUFBSSxFQUFFLE1BQU0sRUFBRSxHQUFHLFNBQVMsQ0FBQyxDQUFDLElBQUksTUFBTSxDQUFBO2FBQ2hFO1lBQ0QsT0FBTyxNQUFNLENBQUM7UUFDaEIsQ0FBQyxDQUFDO1FBRUYsT0FBTyxVQUFVLENBQUM7SUFDcEIsQ0FBQyxDQUFBO0FBQ0gsQ0FBQztBQW5CRCxzQkFtQkMifQ==