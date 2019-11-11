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
import logger from '../utils/log';
import Tx from './Tx';
async function sendTx(target, result) {
    const res = await target.sendTx({ tx: result });
    logger.debug('res in Bank sendTX ', res);
    return res;
}
export default class Bank extends Tx {
    constructor(rpc, account) {
        super(rpc, account);
    }
    async execTransferTx(address, data) {
        const res = await this.rpc.post(`/bank/accounts/${address}/transfers`, data);
        logger.debug('execTransfer result', res);
        return res;
    }
    async execCheckTx(data) {
        // const res = await this.rpc.request({
        //   method: 'POST',
        const res = await this.rpc.post('/bank/accounts/checks', data);
        return res;
    }
}
__decorate([
    after(componentSignData, sendTx),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, Object]),
    __metadata("design:returntype", Promise)
], Bank.prototype, "execTransferTx", null);
__decorate([
    after(componentSignData, sendTx),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], Bank.prototype, "execCheckTx", null);
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiQmFuay5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9jb3JlL1R4cy9CYW5rLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUNBLE9BQU8sRUFBRSxLQUFLLEVBQUUsTUFBTSxxQkFBcUIsQ0FBQztBQUM1QyxPQUFPLEVBQUUsaUJBQWlCLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUluRCxPQUFPLE1BQU0sTUFBTSxjQUFjLENBQUM7QUFDbEMsT0FBTyxFQUFFLE1BQU0sTUFBTSxDQUFDO0FBT3RCLEtBQUssVUFBVSxNQUFNLENBQUMsTUFBWSxFQUFFLE1BQVc7SUFDN0MsTUFBTSxHQUFHLEdBQUcsTUFBTSxNQUFNLENBQUMsTUFBTSxDQUFDLEVBQUUsRUFBRSxFQUFFLE1BQU0sRUFBRSxDQUFDLENBQUE7SUFDL0MsTUFBTSxDQUFDLEtBQUssQ0FBQyxxQkFBcUIsRUFBRSxHQUFHLENBQUMsQ0FBQTtJQUN4QyxPQUFPLEdBQUcsQ0FBQTtBQUNaLENBQUM7QUFFRCxNQUFNLENBQUMsT0FBTyxPQUFPLElBQUssU0FBUSxFQUFFO0lBQ2xDLFlBQVksR0FBVyxFQUFFLE9BQWdCO1FBQ3ZDLEtBQUssQ0FBQyxHQUFHLEVBQUUsT0FBTyxDQUFDLENBQUE7SUFDckIsQ0FBQztJQUdNLEtBQUssQ0FBQyxjQUFjLENBQUMsT0FBZSxFQUFFLElBQW9CO1FBQy9ELE1BQU0sR0FBRyxHQUFHLE1BQU0sSUFBSSxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQzdCLGtCQUFrQixPQUFPLFlBQVksRUFDckMsSUFBSSxDQUNMLENBQUM7UUFDRixNQUFNLENBQUMsS0FBSyxDQUFDLHFCQUFxQixFQUFFLEdBQUcsQ0FBQyxDQUFBO1FBQ3hDLE9BQU8sR0FBRyxDQUFBO0lBQ1osQ0FBQztJQUdNLEtBQUssQ0FBQyxXQUFXLENBQUMsSUFBb0I7UUFDM0MsdUNBQXVDO1FBQ3ZDLG9CQUFvQjtRQUNwQixNQUFNLEdBQUcsR0FBRyxNQUFNLElBQUksQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUM3Qix1QkFBdUIsRUFDdkIsSUFBSSxDQUNMLENBQUE7UUFDRCxPQUFPLEdBQUcsQ0FBQTtJQUNaLENBQUM7Q0FDRjtBQW5CQztJQURDLEtBQUssQ0FBQyxpQkFBaUIsRUFBRSxNQUFNLENBQUM7Ozs7MENBUWhDO0FBR0Q7SUFEQyxLQUFLLENBQUMsaUJBQWlCLEVBQUUsTUFBTSxDQUFDOzs7O3VDQVNoQyJ9