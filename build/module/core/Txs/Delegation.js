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
    return res;
}
export default class Delegation extends Tx {
    constructor(rpc, account) {
        super(rpc, account);
    }
    async execCreateDelegationTx(validatorAddress, data) {
        const res = await this.rpc.post(`/stake/delegators/${validatorAddress}/delegations`, data);
        return res;
    }
    async execModifyDelegationTx(validatorAddress, data) {
        const res = await this.rpc.post(`/stake/delegators/${validatorAddress}/modify_delegations`, data);
        return res;
    }
    async execUnbondDelegationTx(validatorAddress, data) {
        const res = await this.rpc.post(`/stake/delegators/${validatorAddress}/unbond_delegations`, data);
        return res;
    }
    async execQueryDelegationAll(delegatorAddress) {
        const res = await this.rpc.get(`/stake/delegators/${delegatorAddress}/delegations`);
        return res;
    }
    async execQueryDelegationOne(delegatorAddress, validatorAddress) {
        const res = await this.rpc.get(`/stake/delegators/${delegatorAddress}/validators/${validatorAddress}`);
        return res;
    }
    async execQueryValidatorAll() {
        const res = await this.rpc.get('/stake/validators');
        return res;
    }
    async execQueryValidatorOne(validatorAddress) {
        const res = await this.rpc.get(`/stake/validators/${validatorAddress}`);
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiRGVsZWdhdGlvbi5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9jb3JlL1R4cy9EZWxlZ2F0aW9uLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUNBLE9BQU8sRUFBRSxLQUFLLEVBQUUsTUFBTSxxQkFBcUIsQ0FBQztBQUM1QyxPQUFPLEVBQUUsaUJBQWlCLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUduRCxPQUFPLEVBQUUsTUFBTSxNQUFNLENBQUM7QUFnQnRCLEtBQUssVUFBVSxNQUFNLENBQUMsTUFBa0IsRUFBRSxNQUFXO0lBQ25ELE1BQU0sR0FBRyxHQUFHLE1BQU0sTUFBTSxDQUFDLE1BQU0sQ0FBQyxFQUFFLEVBQUUsRUFBRSxNQUFNLEVBQUUsQ0FBQyxDQUFBO0lBQy9DLE9BQU8sR0FBRyxDQUFBO0FBQ1osQ0FBQztBQUVELE1BQU0sQ0FBQyxPQUFPLE9BQU8sVUFBVyxTQUFRLEVBQUU7SUFDeEMsWUFBWSxHQUFXLEVBQUUsT0FBZ0I7UUFDdkMsS0FBSyxDQUFDLEdBQUcsRUFBRSxPQUFPLENBQUMsQ0FBQTtJQUNyQixDQUFDO0lBR00sS0FBSyxDQUFDLHNCQUFzQixDQUFDLGdCQUF3QixFQUFFLElBQTRCO1FBQ3hGLE1BQU0sR0FBRyxHQUFHLE1BQU0sSUFBSSxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQzdCLHFCQUFxQixnQkFBZ0IsY0FBYyxFQUNuRCxJQUFJLENBQ0wsQ0FBQztRQUNGLE9BQU8sR0FBRyxDQUFBO0lBQ1osQ0FBQztJQUdNLEtBQUssQ0FBQyxzQkFBc0IsQ0FBQyxnQkFBd0IsRUFBRSxJQUE0QjtRQUN4RixNQUFNLEdBQUcsR0FBRyxNQUFNLElBQUksQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUM3QixxQkFBcUIsZ0JBQWdCLHFCQUFxQixFQUMxRCxJQUFJLENBQ0wsQ0FBQztRQUNGLE9BQU8sR0FBRyxDQUFBO0lBQ1osQ0FBQztJQUdNLEtBQUssQ0FBQyxzQkFBc0IsQ0FBQyxnQkFBd0IsRUFBRSxJQUE0QjtRQUN4RixNQUFNLEdBQUcsR0FBRyxNQUFNLElBQUksQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUM3QixxQkFBcUIsZ0JBQWdCLHFCQUFxQixFQUMxRCxJQUFJLENBQ0wsQ0FBQztRQUNGLE9BQU8sR0FBRyxDQUFBO0lBQ1osQ0FBQztJQUVNLEtBQUssQ0FBQyxzQkFBc0IsQ0FBQyxnQkFBd0I7UUFDMUQsTUFBTSxHQUFHLEdBQUcsTUFBTSxJQUFJLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FDNUIscUJBQXFCLGdCQUFnQixjQUFjLENBQ3BELENBQUM7UUFDRixPQUFPLEdBQUcsQ0FBQTtJQUNaLENBQUM7SUFFTSxLQUFLLENBQUMsc0JBQXNCLENBQUMsZ0JBQXdCLEVBQUUsZ0JBQXdCO1FBQ3BGLE1BQU0sR0FBRyxHQUFHLE1BQU0sSUFBSSxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQzVCLHFCQUFxQixnQkFBZ0IsZUFBZSxnQkFBZ0IsRUFBRSxDQUN2RSxDQUFDO1FBQ0YsT0FBTyxHQUFHLENBQUE7SUFDWixDQUFDO0lBRU0sS0FBSyxDQUFDLHFCQUFxQjtRQUNoQyxNQUFNLEdBQUcsR0FBRyxNQUFNLElBQUksQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUM1QixtQkFBbUIsQ0FDcEIsQ0FBQTtRQUNELE9BQU8sR0FBRyxDQUFBO0lBQ1osQ0FBQztJQUVNLEtBQUssQ0FBQyxxQkFBcUIsQ0FBQyxnQkFBd0I7UUFDekQsTUFBTSxHQUFHLEdBQUcsTUFBTSxJQUFJLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FDNUIscUJBQXFCLGdCQUFnQixFQUFFLENBQ3hDLENBQUE7UUFDRCxPQUFPLEdBQUcsQ0FBQTtJQUNaLENBQUM7Q0FJRjtBQXhEQztJQURDLEtBQUssQ0FBQyxpQkFBaUIsRUFBRSxNQUFNLENBQUM7Ozs7d0RBT2hDO0FBR0Q7SUFEQyxLQUFLLENBQUMsaUJBQWlCLEVBQUUsTUFBTSxDQUFDOzs7O3dEQU9oQztBQUdEO0lBREMsS0FBSyxDQUFDLGlCQUFpQixFQUFFLE1BQU0sQ0FBQzs7Ozt3REFPaEMifQ==