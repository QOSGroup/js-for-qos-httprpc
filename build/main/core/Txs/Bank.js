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
    log_1.default.debug('res in Bank sendTX ', res);
    return res;
}
class Bank extends Tx_1.default {
    constructor(rpc, account) {
        super(rpc, account);
    }
    async execTransferTx(address, data) {
        const res = await this.rpc.post(`/bank/accounts/${address}/transfers`, data);
        log_1.default.debug('execTransfer result', res);
        return res;
    }
    async execCheckTx(data) {
        // const res = await this.rpc.request({
        //   method: 'POST',
        const res = await this.rpc.post('/bank/accounts/checks', data);
        return res;
    }
    async execQueryAccount(accountAddress) {
        const res = await this.rpc.get(`/accounts/${accountAddress}`);
        log_1.default.debug('execQueryAccount result', res);
        return res;
    }
}
__decorate([
    decorator_1.after(sign_1.componentSignData, sendTx),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, Object]),
    __metadata("design:returntype", Promise)
], Bank.prototype, "execTransferTx", null);
__decorate([
    decorator_1.after(sign_1.componentSignData, sendTx),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], Bank.prototype, "execCheckTx", null);
exports.default = Bank;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiQmFuay5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9jb3JlL1R4cy9CYW5rLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7O0FBQ0EsbURBQTRDO0FBQzVDLHlDQUFtRDtBQUluRCx1REFBa0M7QUFDbEMsOENBQXNCO0FBT3RCLEtBQUssVUFBVSxNQUFNLENBQUMsTUFBWSxFQUFFLE1BQVc7SUFDN0MsTUFBTSxHQUFHLEdBQUcsTUFBTSxNQUFNLENBQUMsTUFBTSxDQUFDLEVBQUUsRUFBRSxFQUFFLE1BQU0sRUFBRSxDQUFDLENBQUE7SUFDL0MsYUFBTSxDQUFDLEtBQUssQ0FBQyxxQkFBcUIsRUFBRSxHQUFHLENBQUMsQ0FBQTtJQUN4QyxPQUFPLEdBQUcsQ0FBQTtBQUNaLENBQUM7QUFFRCxNQUFxQixJQUFLLFNBQVEsWUFBRTtJQUNsQyxZQUFZLEdBQVcsRUFBRSxPQUFnQjtRQUN2QyxLQUFLLENBQUMsR0FBRyxFQUFFLE9BQU8sQ0FBQyxDQUFBO0lBQ3JCLENBQUM7SUFHTSxLQUFLLENBQUMsY0FBYyxDQUFDLE9BQWUsRUFBRSxJQUFvQjtRQUMvRCxNQUFNLEdBQUcsR0FBRyxNQUFNLElBQUksQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUM3QixrQkFBa0IsT0FBTyxZQUFZLEVBQ3JDLElBQUksQ0FDTCxDQUFDO1FBQ0YsYUFBTSxDQUFDLEtBQUssQ0FBQyxxQkFBcUIsRUFBRSxHQUFHLENBQUMsQ0FBQTtRQUN4QyxPQUFPLEdBQUcsQ0FBQTtJQUNaLENBQUM7SUFHTSxLQUFLLENBQUMsV0FBVyxDQUFDLElBQW9CO1FBQzNDLHVDQUF1QztRQUN2QyxvQkFBb0I7UUFDcEIsTUFBTSxHQUFHLEdBQUcsTUFBTSxJQUFJLENBQUMsR0FBRyxDQUFDLElBQUksQ0FDN0IsdUJBQXVCLEVBQ3ZCLElBQUksQ0FDTCxDQUFBO1FBQ0QsT0FBTyxHQUFHLENBQUE7SUFDWixDQUFDO0lBRU0sS0FBSyxDQUFDLGdCQUFnQixDQUFDLGNBQXNCO1FBQ2xELE1BQU0sR0FBRyxHQUFHLE1BQU0sSUFBSSxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQzFCLGFBQWEsY0FBYyxFQUFFLENBQ2hDLENBQUE7UUFDRCxhQUFNLENBQUMsS0FBSyxDQUFDLHlCQUF5QixFQUFFLEdBQUcsQ0FBQyxDQUFBO1FBQzVDLE9BQU8sR0FBRyxDQUFBO0lBQ1osQ0FBQztDQUNGO0FBM0JDO0lBREMsaUJBQUssQ0FBQyx3QkFBaUIsRUFBRSxNQUFNLENBQUM7Ozs7MENBUWhDO0FBR0Q7SUFEQyxpQkFBSyxDQUFDLHdCQUFpQixFQUFFLE1BQU0sQ0FBQzs7Ozt1Q0FTaEM7QUF4QkgsdUJBaUNDIn0=