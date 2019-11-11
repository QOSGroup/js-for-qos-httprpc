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
export default class Approve extends Tx {
    constructor(rpc, account) {
        super(rpc, account);
    }
    async execApproveTx(address, data) {
        const res = await this.rpc.request({
            method: 'POST',
            url: `/approve/approves/${address}/create_approves`,
            data
        });
        return res;
    }
    async execCancelApproveTx(address, data) {
        const res = await this.rpc.request({
            method: 'POST',
            url: `/approve/approves/${address}/cancel_approves`,
            data
        });
        return res;
    }
    async execIncreaseApproveTx(address, data) {
        const res = await this.rpc.request({
            method: 'POST',
            url: `/approve/approves/${address}/increase_approves`,
            data
        });
        return res;
    }
    async execDecreaseApproveTx(address, data) {
        const res = await this.rpc.request({
            method: 'POST',
            url: `/approve/approves/${address}/decrease_approves`,
            data
        });
        return res;
    }
    async execUseApproveTx(address, data) {
        const res = await this.rpc.request({
            method: 'POST',
            url: `/approve/approves/${address}/use_approves`,
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
], Approve.prototype, "execApproveTx", null);
__decorate([
    after(componentSignData, sendTx),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, Object]),
    __metadata("design:returntype", Promise)
], Approve.prototype, "execCancelApproveTx", null);
__decorate([
    after(componentSignData, sendTx),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, Object]),
    __metadata("design:returntype", Promise)
], Approve.prototype, "execDecreaseApproveTx", null);
__decorate([
    after(componentSignData, sendTx),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, Object]),
    __metadata("design:returntype", Promise)
], Approve.prototype, "execUseApproveTx", null);
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiQXBwcm92ZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9jb3JlL1R4cy9BcHByb3ZlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUNBLE9BQU8sRUFBRSxLQUFLLEVBQUUsTUFBTSxxQkFBcUIsQ0FBQztBQUM1QyxPQUFPLEVBQUUsaUJBQWlCLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUluRCxPQUFPLEVBQUUsTUFBTSxNQUFNLENBQUM7QUFPdEIsS0FBSyxVQUFVLE1BQU0sQ0FBQyxNQUFlLEVBQUUsTUFBVztJQUM5QyxNQUFNLEdBQUcsR0FBRyxNQUFNLE1BQU0sQ0FBQyxNQUFNLENBQUMsRUFBRSxFQUFFLEVBQUUsTUFBTSxFQUFFLENBQUMsQ0FBQTtJQUMvQyxvQkFBb0I7SUFDcEIsT0FBTyxHQUFHLENBQUE7QUFDZCxDQUFDO0FBRUQsTUFBTSxDQUFDLE9BQU8sT0FBTyxPQUFRLFNBQVEsRUFBRTtJQUNuQyxZQUFZLEdBQVcsRUFBRSxPQUFnQjtRQUN2QyxLQUFLLENBQUMsR0FBRyxFQUFFLE9BQU8sQ0FBQyxDQUFBO0lBQ3JCLENBQUM7SUFHSSxLQUFLLENBQUMsYUFBYSxDQUFDLE9BQWUsRUFBRSxJQUFtQjtRQUM3RCxNQUFNLEdBQUcsR0FBRyxNQUFNLElBQUksQ0FBQyxHQUFHLENBQUMsT0FBTyxDQUFDO1lBQ2pDLE1BQU0sRUFBRSxNQUFNO1lBQ2QsR0FBRyxFQUFFLHFCQUFxQixPQUFPLGtCQUFrQjtZQUNuRCxJQUFJO1NBQ0wsQ0FBQyxDQUFBO1FBQ0YsT0FBTyxHQUFHLENBQUE7SUFDWixDQUFDO0lBR00sS0FBSyxDQUFDLG1CQUFtQixDQUFDLE9BQWUsRUFBRSxJQUFtQjtRQUNuRSxNQUFNLEdBQUcsR0FBRyxNQUFNLElBQUksQ0FBQyxHQUFHLENBQUMsT0FBTyxDQUFDO1lBQ2pDLE1BQU0sRUFBRSxNQUFNO1lBQ2QsR0FBRyxFQUFFLHFCQUFxQixPQUFPLGtCQUFrQjtZQUNuRCxJQUFJO1NBQ0wsQ0FBQyxDQUFBO1FBQ0YsT0FBTyxHQUFHLENBQUE7SUFDWixDQUFDO0lBRU0sS0FBSyxDQUFDLHFCQUFxQixDQUFDLE9BQWUsRUFBRSxJQUFtQjtRQUNyRSxNQUFNLEdBQUcsR0FBRyxNQUFNLElBQUksQ0FBQyxHQUFHLENBQUMsT0FBTyxDQUFDO1lBQ2pDLE1BQU0sRUFBRSxNQUFNO1lBQ2QsR0FBRyxFQUFFLHFCQUFxQixPQUFPLG9CQUFvQjtZQUNyRCxJQUFJO1NBQ0wsQ0FBQyxDQUFBO1FBQ0YsT0FBTyxHQUFHLENBQUE7SUFDWixDQUFDO0lBR00sS0FBSyxDQUFDLHFCQUFxQixDQUFDLE9BQWUsRUFBRSxJQUFtQjtRQUNyRSxNQUFNLEdBQUcsR0FBRyxNQUFNLElBQUksQ0FBQyxHQUFHLENBQUMsT0FBTyxDQUFDO1lBQ2pDLE1BQU0sRUFBRSxNQUFNO1lBQ2QsR0FBRyxFQUFFLHFCQUFxQixPQUFPLG9CQUFvQjtZQUNyRCxJQUFJO1NBQ0wsQ0FBQyxDQUFBO1FBQ0YsT0FBTyxHQUFHLENBQUE7SUFDWixDQUFDO0lBR00sS0FBSyxDQUFDLGdCQUFnQixDQUFDLE9BQWUsRUFBRSxJQUFtQjtRQUNoRSxNQUFNLEdBQUcsR0FBRyxNQUFNLElBQUksQ0FBQyxHQUFHLENBQUMsT0FBTyxDQUFDO1lBQ2pDLE1BQU0sRUFBRSxNQUFNO1lBQ2QsR0FBRyxFQUFFLHFCQUFxQixPQUFPLGVBQWU7WUFDaEQsSUFBSTtTQUNMLENBQUMsQ0FBQTtRQUNGLE9BQU8sR0FBRyxDQUFBO0lBQ1osQ0FBQztDQUNGO0FBL0NDO0lBREMsS0FBSyxDQUFDLGlCQUFpQixFQUFFLE1BQU0sQ0FBQzs7Ozs0Q0FRaEM7QUFHRDtJQURDLEtBQUssQ0FBQyxpQkFBaUIsRUFBRSxNQUFNLENBQUM7Ozs7a0RBUWhDO0FBWUQ7SUFEQyxLQUFLLENBQUMsaUJBQWlCLEVBQUUsTUFBTSxDQUFDOzs7O29EQVFoQztBQUdEO0lBREMsS0FBSyxDQUFDLGlCQUFpQixFQUFFLE1BQU0sQ0FBQzs7OzsrQ0FRaEMifQ==