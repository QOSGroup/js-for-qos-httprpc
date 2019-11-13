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
class Bank extends Tx_1.default {
    constructor(rpc, account) {
        super(rpc, account);
    }
    async execTransferTx(address, data) {
        const res = await this.rpc.post(`/bank/accounts/${address}/transfers`, data);
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiQmFuay5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9jb3JlL1R4cy9CYW5rLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7O0FBQ0EsbURBQTRDO0FBQzVDLHlDQUFtRDtBQUluRCw4Q0FBc0I7QUFPdEIsS0FBSyxVQUFVLE1BQU0sQ0FBQyxNQUFZLEVBQUUsTUFBVztJQUM3QyxNQUFNLEdBQUcsR0FBRyxNQUFNLE1BQU0sQ0FBQyxNQUFNLENBQUMsRUFBRSxFQUFFLEVBQUUsTUFBTSxFQUFFLENBQUMsQ0FBQTtJQUMvQyxPQUFPLEdBQUcsQ0FBQTtBQUNaLENBQUM7QUFFRCxNQUFxQixJQUFLLFNBQVEsWUFBRTtJQUNsQyxZQUFZLEdBQVcsRUFBRSxPQUFnQjtRQUN2QyxLQUFLLENBQUMsR0FBRyxFQUFFLE9BQU8sQ0FBQyxDQUFBO0lBQ3JCLENBQUM7SUFHTSxLQUFLLENBQUMsY0FBYyxDQUFDLE9BQWUsRUFBRSxJQUFvQjtRQUMvRCxNQUFNLEdBQUcsR0FBRyxNQUFNLElBQUksQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUM3QixrQkFBa0IsT0FBTyxZQUFZLEVBQ3JDLElBQUksQ0FDTCxDQUFDO1FBQ0YsT0FBTyxHQUFHLENBQUE7SUFDWixDQUFDO0lBR00sS0FBSyxDQUFDLFdBQVcsQ0FBQyxJQUFvQjtRQUMzQyx1Q0FBdUM7UUFDdkMsb0JBQW9CO1FBQ3BCLE1BQU0sR0FBRyxHQUFHLE1BQU0sSUFBSSxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQzdCLHVCQUF1QixFQUN2QixJQUFJLENBQ0wsQ0FBQTtRQUNELE9BQU8sR0FBRyxDQUFBO0lBQ1osQ0FBQztJQUVNLEtBQUssQ0FBQyxnQkFBZ0IsQ0FBQyxjQUFzQjtRQUNsRCxNQUFNLEdBQUcsR0FBRyxNQUFNLElBQUksQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUMxQixhQUFhLGNBQWMsRUFBRSxDQUNoQyxDQUFBO1FBQ0QsT0FBTyxHQUFHLENBQUE7SUFDWixDQUFDO0NBQ0Y7QUF6QkM7SUFEQyxpQkFBSyxDQUFDLHdCQUFpQixFQUFFLE1BQU0sQ0FBQzs7OzswQ0FPaEM7QUFHRDtJQURDLGlCQUFLLENBQUMsd0JBQWlCLEVBQUUsTUFBTSxDQUFDOzs7O3VDQVNoQztBQXZCSCx1QkErQkMifQ==