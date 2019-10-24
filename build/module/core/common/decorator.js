export function after(...args) {
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGVjb3JhdG9yLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vc3JjL2NvcmUvY29tbW9uL2RlY29yYXRvci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFDQSxNQUFNLFVBQVUsS0FBSyxDQUFDLEdBQUcsSUFBSTtJQUMzQixPQUFPLENBQUMsT0FBTyxFQUFFLElBQUksRUFBRSxVQUFVLEVBQUUsRUFBRTtRQUNuQyxrQkFBa0I7UUFDbEIsTUFBTSxRQUFRLEdBQUcsVUFBVSxDQUFDLEtBQUssQ0FBQztRQUNsQyxpQkFBaUI7UUFDakIsVUFBVSxDQUFDLEtBQUssR0FBRyxLQUFLO1lBQ3RCLHVDQUF1QztZQUN2QyxPQUFPLENBQUMsR0FBRyxDQUFDLFdBQVcsSUFBSSxPQUFPLEVBQUUsU0FBUyxDQUFDLENBQUM7WUFDL0MsNEJBQTRCO1lBQzVCLE1BQU0sR0FBRyxHQUFHLE1BQU0sUUFBUSxDQUFDLEtBQUssQ0FBQyxJQUFJLEVBQUUsU0FBUyxDQUFDLENBQUE7WUFDakQsSUFBSSxNQUFNLEdBQUcsR0FBRyxDQUFDO1lBQ2pCLEtBQUssTUFBTSxRQUFRLElBQUksSUFBSSxFQUFFO2dCQUMzQixNQUFNLEdBQUcsQ0FBQyxNQUFNLFFBQVEsQ0FBQyxJQUFJLEVBQUUsTUFBTSxFQUFFLEdBQUcsU0FBUyxDQUFDLENBQUMsSUFBSSxNQUFNLENBQUE7YUFDaEU7WUFDRCxPQUFPLE1BQU0sQ0FBQztRQUNoQixDQUFDLENBQUM7UUFFRixPQUFPLFVBQVUsQ0FBQztJQUNwQixDQUFDLENBQUE7QUFDSCxDQUFDIn0=