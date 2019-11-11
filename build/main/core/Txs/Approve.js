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
    // logger.debug(res)
    return res;
}
class Approve extends Tx_1.default {
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
    decorator_1.after(sign_1.componentSignData, sendTx),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, Object]),
    __metadata("design:returntype", Promise)
], Approve.prototype, "execApproveTx", null);
__decorate([
    decorator_1.after(sign_1.componentSignData, sendTx),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, Object]),
    __metadata("design:returntype", Promise)
], Approve.prototype, "execCancelApproveTx", null);
__decorate([
    decorator_1.after(sign_1.componentSignData, sendTx),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, Object]),
    __metadata("design:returntype", Promise)
], Approve.prototype, "execDecreaseApproveTx", null);
__decorate([
    decorator_1.after(sign_1.componentSignData, sendTx),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, Object]),
    __metadata("design:returntype", Promise)
], Approve.prototype, "execUseApproveTx", null);
exports.default = Approve;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiQXBwcm92ZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9jb3JlL1R4cy9BcHByb3ZlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7O0FBQ0EsbURBQTRDO0FBQzVDLHlDQUFtRDtBQUluRCw4Q0FBc0I7QUFPdEIsS0FBSyxVQUFVLE1BQU0sQ0FBQyxNQUFlLEVBQUUsTUFBVztJQUM5QyxNQUFNLEdBQUcsR0FBRyxNQUFNLE1BQU0sQ0FBQyxNQUFNLENBQUMsRUFBRSxFQUFFLEVBQUUsTUFBTSxFQUFFLENBQUMsQ0FBQTtJQUMvQyxvQkFBb0I7SUFDcEIsT0FBTyxHQUFHLENBQUE7QUFDZCxDQUFDO0FBRUQsTUFBcUIsT0FBUSxTQUFRLFlBQUU7SUFDbkMsWUFBWSxHQUFXLEVBQUUsT0FBZ0I7UUFDdkMsS0FBSyxDQUFDLEdBQUcsRUFBRSxPQUFPLENBQUMsQ0FBQTtJQUNyQixDQUFDO0lBR0ksS0FBSyxDQUFDLGFBQWEsQ0FBQyxPQUFlLEVBQUUsSUFBbUI7UUFDN0QsTUFBTSxHQUFHLEdBQUcsTUFBTSxJQUFJLENBQUMsR0FBRyxDQUFDLE9BQU8sQ0FBQztZQUNqQyxNQUFNLEVBQUUsTUFBTTtZQUNkLEdBQUcsRUFBRSxxQkFBcUIsT0FBTyxrQkFBa0I7WUFDbkQsSUFBSTtTQUNMLENBQUMsQ0FBQTtRQUNGLE9BQU8sR0FBRyxDQUFBO0lBQ1osQ0FBQztJQUdNLEtBQUssQ0FBQyxtQkFBbUIsQ0FBQyxPQUFlLEVBQUUsSUFBbUI7UUFDbkUsTUFBTSxHQUFHLEdBQUcsTUFBTSxJQUFJLENBQUMsR0FBRyxDQUFDLE9BQU8sQ0FBQztZQUNqQyxNQUFNLEVBQUUsTUFBTTtZQUNkLEdBQUcsRUFBRSxxQkFBcUIsT0FBTyxrQkFBa0I7WUFDbkQsSUFBSTtTQUNMLENBQUMsQ0FBQTtRQUNGLE9BQU8sR0FBRyxDQUFBO0lBQ1osQ0FBQztJQUVNLEtBQUssQ0FBQyxxQkFBcUIsQ0FBQyxPQUFlLEVBQUUsSUFBbUI7UUFDckUsTUFBTSxHQUFHLEdBQUcsTUFBTSxJQUFJLENBQUMsR0FBRyxDQUFDLE9BQU8sQ0FBQztZQUNqQyxNQUFNLEVBQUUsTUFBTTtZQUNkLEdBQUcsRUFBRSxxQkFBcUIsT0FBTyxvQkFBb0I7WUFDckQsSUFBSTtTQUNMLENBQUMsQ0FBQTtRQUNGLE9BQU8sR0FBRyxDQUFBO0lBQ1osQ0FBQztJQUdNLEtBQUssQ0FBQyxxQkFBcUIsQ0FBQyxPQUFlLEVBQUUsSUFBbUI7UUFDckUsTUFBTSxHQUFHLEdBQUcsTUFBTSxJQUFJLENBQUMsR0FBRyxDQUFDLE9BQU8sQ0FBQztZQUNqQyxNQUFNLEVBQUUsTUFBTTtZQUNkLEdBQUcsRUFBRSxxQkFBcUIsT0FBTyxvQkFBb0I7WUFDckQsSUFBSTtTQUNMLENBQUMsQ0FBQTtRQUNGLE9BQU8sR0FBRyxDQUFBO0lBQ1osQ0FBQztJQUdNLEtBQUssQ0FBQyxnQkFBZ0IsQ0FBQyxPQUFlLEVBQUUsSUFBbUI7UUFDaEUsTUFBTSxHQUFHLEdBQUcsTUFBTSxJQUFJLENBQUMsR0FBRyxDQUFDLE9BQU8sQ0FBQztZQUNqQyxNQUFNLEVBQUUsTUFBTTtZQUNkLEdBQUcsRUFBRSxxQkFBcUIsT0FBTyxlQUFlO1lBQ2hELElBQUk7U0FDTCxDQUFDLENBQUE7UUFDRixPQUFPLEdBQUcsQ0FBQTtJQUNaLENBQUM7Q0FDRjtBQS9DQztJQURDLGlCQUFLLENBQUMsd0JBQWlCLEVBQUUsTUFBTSxDQUFDOzs7OzRDQVFoQztBQUdEO0lBREMsaUJBQUssQ0FBQyx3QkFBaUIsRUFBRSxNQUFNLENBQUM7Ozs7a0RBUWhDO0FBWUQ7SUFEQyxpQkFBSyxDQUFDLHdCQUFpQixFQUFFLE1BQU0sQ0FBQzs7OztvREFRaEM7QUFHRDtJQURDLGlCQUFLLENBQUMsd0JBQWlCLEVBQUUsTUFBTSxDQUFDOzs7OytDQVFoQztBQXBESCwwQkFxREMifQ==