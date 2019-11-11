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
const log_1 = __importDefault(require("../utils/log"));
const Tx_1 = __importDefault(require("./Tx"));
async function sendTx(target, result) {
    const res = await target.sendTx({ tx: result });
    log_1.default.debug('res in sendTX ', res);
    return res;
}
class Delegation extends Tx_1.default {
    constructor(rpc, account) {
        super(rpc, account);
    }
    async execCreateDelegationTx(validatorAddress, data) {
        const res = await this.rpc.post(`/stake/delegators/${validatorAddress}/delegations`, data);
        log_1.default.debug('execCreateDelegate result', res);
        return res;
    }
    async execModifyDelegationTx(validatorAddress, data) {
        const res = await this.rpc.post(`/stake/delegators/${validatorAddress}/modify_delegations`, data);
        log_1.default.debug('execModifyDelegation result', res);
        return res;
    }
    async execUnbondDelegationTx(validatorAddress, data) {
        const res = await this.rpc.post(`/stake/delegators/${validatorAddress}/unbond_delegations`, data);
        log_1.default.debug('execUnbondDelegation result', res);
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiRGVsZWdhdGlvbi5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9jb3JlL1R4cy9EZWxlZ2F0aW9uLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7O0FBQ0EsbURBQTRDO0FBQzVDLHlDQUFtRDtBQUduRCx1REFBa0M7QUFDbEMsOENBQXNCO0FBZ0J0QixLQUFLLFVBQVUsTUFBTSxDQUFDLE1BQWtCLEVBQUUsTUFBVztJQUNuRCxNQUFNLEdBQUcsR0FBRyxNQUFNLE1BQU0sQ0FBQyxNQUFNLENBQUMsRUFBRSxFQUFFLEVBQUUsTUFBTSxFQUFFLENBQUMsQ0FBQTtJQUMvQyxhQUFNLENBQUMsS0FBSyxDQUFDLGdCQUFnQixFQUFFLEdBQUcsQ0FBQyxDQUFBO0lBQ25DLE9BQU8sR0FBRyxDQUFBO0FBQ1osQ0FBQztBQUVELE1BQXFCLFVBQVcsU0FBUSxZQUFFO0lBQ3hDLFlBQVksR0FBVyxFQUFFLE9BQWdCO1FBQ3ZDLEtBQUssQ0FBQyxHQUFHLEVBQUUsT0FBTyxDQUFDLENBQUE7SUFDckIsQ0FBQztJQUdNLEtBQUssQ0FBQyxzQkFBc0IsQ0FBQyxnQkFBd0IsRUFBRSxJQUE0QjtRQUN4RixNQUFNLEdBQUcsR0FBRyxNQUFNLElBQUksQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUM3QixxQkFBcUIsZ0JBQWdCLGNBQWMsRUFDbkQsSUFBSSxDQUNMLENBQUM7UUFDRixhQUFNLENBQUMsS0FBSyxDQUFDLDJCQUEyQixFQUFFLEdBQUcsQ0FBQyxDQUFBO1FBQzlDLE9BQU8sR0FBRyxDQUFBO0lBQ1osQ0FBQztJQUdNLEtBQUssQ0FBQyxzQkFBc0IsQ0FBQyxnQkFBd0IsRUFBRSxJQUE0QjtRQUN4RixNQUFNLEdBQUcsR0FBRyxNQUFNLElBQUksQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUM3QixxQkFBcUIsZ0JBQWdCLHFCQUFxQixFQUMxRCxJQUFJLENBQ0wsQ0FBQztRQUNGLGFBQU0sQ0FBQyxLQUFLLENBQUMsNkJBQTZCLEVBQUUsR0FBRyxDQUFDLENBQUE7UUFDaEQsT0FBTyxHQUFHLENBQUE7SUFDWixDQUFDO0lBR00sS0FBSyxDQUFDLHNCQUFzQixDQUFDLGdCQUF3QixFQUFFLElBQTRCO1FBQ3hGLE1BQU0sR0FBRyxHQUFHLE1BQU0sSUFBSSxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQzdCLHFCQUFxQixnQkFBZ0IscUJBQXFCLEVBQzFELElBQUksQ0FDTCxDQUFDO1FBQ0YsYUFBTSxDQUFDLEtBQUssQ0FBQyw2QkFBNkIsRUFBRSxHQUFHLENBQUMsQ0FBQTtRQUNoRCxPQUFPLEdBQUcsQ0FBQTtJQUNaLENBQUM7Q0FFRjtBQTdCQztJQURDLGlCQUFLLENBQUMsd0JBQWlCLEVBQUUsTUFBTSxDQUFDOzs7O3dEQVFoQztBQUdEO0lBREMsaUJBQUssQ0FBQyx3QkFBaUIsRUFBRSxNQUFNLENBQUM7Ozs7d0RBUWhDO0FBR0Q7SUFEQyxpQkFBSyxDQUFDLHdCQUFpQixFQUFFLE1BQU0sQ0FBQzs7Ozt3REFRaEM7QUFqQ0gsNkJBbUNDIn0=