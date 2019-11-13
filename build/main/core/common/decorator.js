"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function after(...args) {
    return (_target, descriptor) => {
        // 获取value，其实就是原函数
        const oldValue = descriptor.value;
        // 将value重新赋值一个函数
        descriptor.value = async function () {
            // tslint:disable-next-line: no-console
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGVjb3JhdG9yLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vc3JjL2NvcmUvY29tbW9uL2RlY29yYXRvci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLFNBQWdCLEtBQUssQ0FBQyxHQUFHLElBQUk7SUFDM0IsT0FBTyxDQUFDLE9BQU8sRUFBRSxVQUFVLEVBQUUsRUFBRTtRQUM3QixrQkFBa0I7UUFDbEIsTUFBTSxRQUFRLEdBQUcsVUFBVSxDQUFDLEtBQUssQ0FBQztRQUNsQyxpQkFBaUI7UUFDakIsVUFBVSxDQUFDLEtBQUssR0FBRyxLQUFLO1lBQ3RCLHVDQUF1QztZQUN2Qyw0QkFBNEI7WUFDNUIsTUFBTSxHQUFHLEdBQUcsTUFBTSxRQUFRLENBQUMsS0FBSyxDQUFDLElBQUksRUFBRSxTQUFTLENBQUMsQ0FBQTtZQUNqRCxJQUFJLE1BQU0sR0FBRyxHQUFHLENBQUM7WUFDakIsS0FBSyxNQUFNLFFBQVEsSUFBSSxJQUFJLEVBQUU7Z0JBQzNCLE1BQU0sR0FBRyxDQUFDLE1BQU0sUUFBUSxDQUFDLElBQUksRUFBRSxNQUFNLEVBQUUsR0FBRyxTQUFTLENBQUMsQ0FBQyxJQUFJLE1BQU0sQ0FBQTthQUNoRTtZQUNELE9BQU8sTUFBTSxDQUFDO1FBQ2hCLENBQUMsQ0FBQztRQUVGLE9BQU8sVUFBVSxDQUFDO0lBQ3BCLENBQUMsQ0FBQTtBQUNILENBQUM7QUFsQkQsc0JBa0JDIn0=