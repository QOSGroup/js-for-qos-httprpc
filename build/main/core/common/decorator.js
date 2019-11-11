"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const log_1 = __importDefault(require("../utils/log"));
function after(...args) {
    return (_target, name, descriptor) => {
        // 获取value，其实就是原函数
        const oldValue = descriptor.value;
        // 将value重新赋值一个函数
        descriptor.value = async function () {
            // tslint:disable-next-line: no-console
            log_1.default.debug(`Calling ${name} with`, arguments);
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGVjb3JhdG9yLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vc3JjL2NvcmUvY29tbW9uL2RlY29yYXRvci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBLHVEQUFrQztBQUVsQyxTQUFnQixLQUFLLENBQUMsR0FBRyxJQUFJO0lBQzNCLE9BQU8sQ0FBQyxPQUFPLEVBQUUsSUFBSSxFQUFFLFVBQVUsRUFBRSxFQUFFO1FBQ25DLGtCQUFrQjtRQUNsQixNQUFNLFFBQVEsR0FBRyxVQUFVLENBQUMsS0FBSyxDQUFDO1FBQ2xDLGlCQUFpQjtRQUNqQixVQUFVLENBQUMsS0FBSyxHQUFHLEtBQUs7WUFDdEIsdUNBQXVDO1lBQ3ZDLGFBQU0sQ0FBQyxLQUFLLENBQUMsV0FBVyxJQUFJLE9BQU8sRUFBRSxTQUFTLENBQUMsQ0FBQztZQUNoRCw0QkFBNEI7WUFDNUIsTUFBTSxHQUFHLEdBQUcsTUFBTSxRQUFRLENBQUMsS0FBSyxDQUFDLElBQUksRUFBRSxTQUFTLENBQUMsQ0FBQTtZQUNqRCxJQUFJLE1BQU0sR0FBRyxHQUFHLENBQUM7WUFDakIsS0FBSyxNQUFNLFFBQVEsSUFBSSxJQUFJLEVBQUU7Z0JBQzNCLE1BQU0sR0FBRyxDQUFDLE1BQU0sUUFBUSxDQUFDLElBQUksRUFBRSxNQUFNLEVBQUUsR0FBRyxTQUFTLENBQUMsQ0FBQyxJQUFJLE1BQU0sQ0FBQTthQUNoRTtZQUNELE9BQU8sTUFBTSxDQUFDO1FBQ2hCLENBQUMsQ0FBQztRQUVGLE9BQU8sVUFBVSxDQUFDO0lBQ3BCLENBQUMsQ0FBQTtBQUNILENBQUM7QUFuQkQsc0JBbUJDIn0=