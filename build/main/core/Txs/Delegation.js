"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const decorator_1 = require("../common/decorator");
const sign_1 = require("../common/sign");
const Tx_1 = __importDefault(require("./Tx"));
async function sendTx(target, result) {
    const res = await target.sendTx({ tx: result });
    return res;
}
class Delegation extends Tx_1.default {
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
    decorator_1.after(sign_1.componentSignData, sendTx),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, Object]),
    __metadata("design:returntype", Promise)
], Delegation.prototype, "execCreateDelegationTx", null);
__decorate([
    decorator_1.after(sign_1.componentSignData, sendTx),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, Object]),
    __metadata("design:returntype", Promise)
], Delegation.prototype, "execModifyDelegationTx", null);
__decorate([
    decorator_1.after(sign_1.componentSignData, sendTx),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, Object]),
    __metadata("design:returntype", Promise)
], Delegation.prototype, "execUnbondDelegationTx", null);
exports.default = Delegation;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiRGVsZWdhdGlvbi5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9jb3JlL1R4cy9EZWxlZ2F0aW9uLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7O0FBQ0EsbURBQTRDO0FBQzVDLHlDQUFtRDtBQUduRCw4Q0FBc0I7QUFnQnRCLEtBQUssVUFBVSxNQUFNLENBQUMsTUFBa0IsRUFBRSxNQUFXO0lBQ25ELE1BQU0sR0FBRyxHQUFHLE1BQU0sTUFBTSxDQUFDLE1BQU0sQ0FBQyxFQUFFLEVBQUUsRUFBRSxNQUFNLEVBQUUsQ0FBQyxDQUFBO0lBQy9DLE9BQU8sR0FBRyxDQUFBO0FBQ1osQ0FBQztBQUVELE1BQXFCLFVBQVcsU0FBUSxZQUFFO0lBQ3hDLFlBQVksR0FBVyxFQUFFLE9BQWdCO1FBQ3ZDLEtBQUssQ0FBQyxHQUFHLEVBQUUsT0FBTyxDQUFDLENBQUE7SUFDckIsQ0FBQztJQUdNLEtBQUssQ0FBQyxzQkFBc0IsQ0FBQyxnQkFBd0IsRUFBRSxJQUE0QjtRQUN4RixNQUFNLEdBQUcsR0FBRyxNQUFNLElBQUksQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUM3QixxQkFBcUIsZ0JBQWdCLGNBQWMsRUFDbkQsSUFBSSxDQUNMLENBQUM7UUFDRixPQUFPLEdBQUcsQ0FBQTtJQUNaLENBQUM7SUFHTSxLQUFLLENBQUMsc0JBQXNCLENBQUMsZ0JBQXdCLEVBQUUsSUFBNEI7UUFDeEYsTUFBTSxHQUFHLEdBQUcsTUFBTSxJQUFJLENBQUMsR0FBRyxDQUFDLElBQUksQ0FDN0IscUJBQXFCLGdCQUFnQixxQkFBcUIsRUFDMUQsSUFBSSxDQUNMLENBQUM7UUFDRixPQUFPLEdBQUcsQ0FBQTtJQUNaLENBQUM7SUFHTSxLQUFLLENBQUMsc0JBQXNCLENBQUMsZ0JBQXdCLEVBQUUsSUFBNEI7UUFDeEYsTUFBTSxHQUFHLEdBQUcsTUFBTSxJQUFJLENBQUMsR0FBRyxDQUFDLElBQUksQ0FDN0IscUJBQXFCLGdCQUFnQixxQkFBcUIsRUFDMUQsSUFBSSxDQUNMLENBQUM7UUFDRixPQUFPLEdBQUcsQ0FBQTtJQUNaLENBQUM7SUFFTSxLQUFLLENBQUMsc0JBQXNCLENBQUMsZ0JBQXdCO1FBQzFELE1BQU0sR0FBRyxHQUFHLE1BQU0sSUFBSSxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQzVCLHFCQUFxQixnQkFBZ0IsY0FBYyxDQUNwRCxDQUFDO1FBQ0YsT0FBTyxHQUFHLENBQUE7SUFDWixDQUFDO0lBRU0sS0FBSyxDQUFDLHNCQUFzQixDQUFDLGdCQUF3QixFQUFFLGdCQUF3QjtRQUNwRixNQUFNLEdBQUcsR0FBRyxNQUFNLElBQUksQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUM1QixxQkFBcUIsZ0JBQWdCLGVBQWUsZ0JBQWdCLEVBQUUsQ0FDdkUsQ0FBQztRQUNGLE9BQU8sR0FBRyxDQUFBO0lBQ1osQ0FBQztJQUVNLEtBQUssQ0FBQyxxQkFBcUI7UUFDaEMsTUFBTSxHQUFHLEdBQUcsTUFBTSxJQUFJLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FDNUIsbUJBQW1CLENBQ3BCLENBQUE7UUFDRCxPQUFPLEdBQUcsQ0FBQTtJQUNaLENBQUM7SUFFTSxLQUFLLENBQUMscUJBQXFCLENBQUMsZ0JBQXdCO1FBQ3pELE1BQU0sR0FBRyxHQUFHLE1BQU0sSUFBSSxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQzVCLHFCQUFxQixnQkFBZ0IsRUFBRSxDQUN4QyxDQUFBO1FBQ0QsT0FBTyxHQUFHLENBQUE7SUFDWixDQUFDO0NBSUY7QUF4REM7SUFEQyxpQkFBSyxDQUFDLHdCQUFpQixFQUFFLE1BQU0sQ0FBQzs7Ozt3REFPaEM7QUFHRDtJQURDLGlCQUFLLENBQUMsd0JBQWlCLEVBQUUsTUFBTSxDQUFDOzs7O3dEQU9oQztBQUdEO0lBREMsaUJBQUssQ0FBQyx3QkFBaUIsRUFBRSxNQUFNLENBQUM7Ozs7d0RBT2hDO0FBOUJILDZCQThEQyJ9