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
    logger.debug('res in sendTX ', res);
    return res;
}
export default class Delegation extends Tx {
    constructor(rpc, account) {
        super(rpc, account);
    }
    async execCreateDelegationTx(validatorAddress, data) {
        const res = await this.rpc.post(`/stake/delegators/${validatorAddress}/delegations`, data);
        logger.debug('execCreateDelegate result', res);
        return res;
    }
    async execModifyDelegationTx(validatorAddress, data) {
        const res = await this.rpc.post(`/stake/delegators/${validatorAddress}/modify_delegations`, data);
        logger.debug('execModifyDelegation result', res);
        return res;
    }
    async execUnbondDelegationTx(validatorAddress, data) {
        const res = await this.rpc.post(`/stake/delegators/${validatorAddress}/unbond_delegations`, data);
        logger.debug('execUnbondDelegation result', res);
        return res;
    }
}
__decorate([
    after(componentSignData, sendTx),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, Object]),
    __metadata("design:returntype", Promise)
], Delegation.prototype, "execCreateDelegationTx", null);
__decorate([
    after(componentSignData, sendTx),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, Object]),
    __metadata("design:returntype", Promise)
], Delegation.prototype, "execModifyDelegationTx", null);
__decorate([
    after(componentSignData, sendTx),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, Object]),
    __metadata("design:returntype", Promise)
], Delegation.prototype, "execUnbondDelegationTx", null);
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiRGVsZWdhdGlvbi5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9jb3JlL1R4cy9EZWxlZ2F0aW9uLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUNBLE9BQU8sRUFBRSxLQUFLLEVBQUUsTUFBTSxxQkFBcUIsQ0FBQztBQUM1QyxPQUFPLEVBQUUsaUJBQWlCLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUduRCxPQUFPLE1BQU0sTUFBTSxjQUFjLENBQUM7QUFDbEMsT0FBTyxFQUFFLE1BQU0sTUFBTSxDQUFDO0FBZ0J0QixLQUFLLFVBQVUsTUFBTSxDQUFDLE1BQWtCLEVBQUUsTUFBVztJQUNuRCxNQUFNLEdBQUcsR0FBRyxNQUFNLE1BQU0sQ0FBQyxNQUFNLENBQUMsRUFBRSxFQUFFLEVBQUUsTUFBTSxFQUFFLENBQUMsQ0FBQTtJQUMvQyxNQUFNLENBQUMsS0FBSyxDQUFDLGdCQUFnQixFQUFFLEdBQUcsQ0FBQyxDQUFBO0lBQ25DLE9BQU8sR0FBRyxDQUFBO0FBQ1osQ0FBQztBQUVELE1BQU0sQ0FBQyxPQUFPLE9BQU8sVUFBVyxTQUFRLEVBQUU7SUFDeEMsWUFBWSxHQUFXLEVBQUUsT0FBZ0I7UUFDdkMsS0FBSyxDQUFDLEdBQUcsRUFBRSxPQUFPLENBQUMsQ0FBQTtJQUNyQixDQUFDO0lBR00sS0FBSyxDQUFDLHNCQUFzQixDQUFDLGdCQUF3QixFQUFFLElBQTRCO1FBQ3hGLE1BQU0sR0FBRyxHQUFHLE1BQU0sSUFBSSxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQzdCLHFCQUFxQixnQkFBZ0IsY0FBYyxFQUNuRCxJQUFJLENBQ0wsQ0FBQztRQUNGLE1BQU0sQ0FBQyxLQUFLLENBQUMsMkJBQTJCLEVBQUUsR0FBRyxDQUFDLENBQUE7UUFDOUMsT0FBTyxHQUFHLENBQUE7SUFDWixDQUFDO0lBR00sS0FBSyxDQUFDLHNCQUFzQixDQUFDLGdCQUF3QixFQUFFLElBQTRCO1FBQ3hGLE1BQU0sR0FBRyxHQUFHLE1BQU0sSUFBSSxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQzdCLHFCQUFxQixnQkFBZ0IscUJBQXFCLEVBQzFELElBQUksQ0FDTCxDQUFDO1FBQ0YsTUFBTSxDQUFDLEtBQUssQ0FBQyw2QkFBNkIsRUFBRSxHQUFHLENBQUMsQ0FBQTtRQUNoRCxPQUFPLEdBQUcsQ0FBQTtJQUNaLENBQUM7SUFHTSxLQUFLLENBQUMsc0JBQXNCLENBQUMsZ0JBQXdCLEVBQUUsSUFBNEI7UUFDeEYsTUFBTSxHQUFHLEdBQUcsTUFBTSxJQUFJLENBQUMsR0FBRyxDQUFDLElBQUksQ0FDN0IscUJBQXFCLGdCQUFnQixxQkFBcUIsRUFDMUQsSUFBSSxDQUNMLENBQUM7UUFDRixNQUFNLENBQUMsS0FBSyxDQUFDLDZCQUE2QixFQUFFLEdBQUcsQ0FBQyxDQUFBO1FBQ2hELE9BQU8sR0FBRyxDQUFBO0lBQ1osQ0FBQztDQUVGO0FBN0JDO0lBREMsS0FBSyxDQUFDLGlCQUFpQixFQUFFLE1BQU0sQ0FBQzs7Ozt3REFRaEM7QUFHRDtJQURDLEtBQUssQ0FBQyxpQkFBaUIsRUFBRSxNQUFNLENBQUM7Ozs7d0RBUWhDO0FBR0Q7SUFEQyxLQUFLLENBQUMsaUJBQWlCLEVBQUUsTUFBTSxDQUFDOzs7O3dEQVFoQyJ9