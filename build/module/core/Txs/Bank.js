var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { after } from '../common/decorator';
import { componentSignData } from '../common/sign';
import Tx from './Tx';
async function sendTx(target, result) {
    const res = await target.sendTx({ tx: result });
    // logger.debug(res)
    return res;
}
export default class Bank extends Tx {
    constructor(rpc, account) {
        super(rpc, account);
    }
    async execTransferTx(address, data) {
        const res = await this.rpc.request({
            method: 'POST',
            url: `bank/accounts/${address}/transfers`,
            data
        });
        return res;
    }
}
__decorate([
    after(componentSignData, sendTx),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, Object]),
    __metadata("design:returntype", Promise)
], Bank.prototype, "execTransferTx", null);
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiQmFuay5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9jb3JlL1R4cy9CYW5rLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUNBLE9BQU8sRUFBRSxLQUFLLEVBQUUsTUFBTSxxQkFBcUIsQ0FBQztBQUM1QyxPQUFPLEVBQUUsaUJBQWlCLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUluRCxPQUFPLEVBQUUsTUFBTSxNQUFNLENBQUM7QUFPdEIsS0FBSyxVQUFVLE1BQU0sQ0FBQyxNQUFZLEVBQUUsTUFBVztJQUM3QyxNQUFNLEdBQUcsR0FBRyxNQUFNLE1BQU0sQ0FBQyxNQUFNLENBQUMsRUFBRSxFQUFFLEVBQUUsTUFBTSxFQUFFLENBQUMsQ0FBQTtJQUMvQyxvQkFBb0I7SUFDcEIsT0FBTyxHQUFHLENBQUE7QUFDWixDQUFDO0FBRUQsTUFBTSxDQUFDLE9BQU8sT0FBTyxJQUFLLFNBQVEsRUFBRTtJQUNsQyxZQUFZLEdBQVcsRUFBRSxPQUFnQjtRQUN2QyxLQUFLLENBQUMsR0FBRyxFQUFFLE9BQU8sQ0FBQyxDQUFBO0lBQ3JCLENBQUM7SUFHTSxLQUFLLENBQUMsY0FBYyxDQUFDLE9BQWUsRUFBRSxJQUFvQjtRQUMvRCxNQUFNLEdBQUcsR0FBRyxNQUFNLElBQUksQ0FBQyxHQUFHLENBQUMsT0FBTyxDQUFDO1lBQ2pDLE1BQU0sRUFBRSxNQUFNO1lBQ2QsR0FBRyxFQUFFLGlCQUFpQixPQUFPLFlBQVk7WUFDekMsSUFBSTtTQUNMLENBQUMsQ0FBQTtRQUNGLE9BQU8sR0FBRyxDQUFBO0lBQ1osQ0FBQztDQUdGO0FBVkM7SUFEQyxLQUFLLENBQUMsaUJBQWlCLEVBQUUsTUFBTSxDQUFDOzs7OzBDQVFoQyJ9