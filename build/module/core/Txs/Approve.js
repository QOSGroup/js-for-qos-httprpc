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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiQXBwcm92ZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9jb3JlL1R4cy9BcHByb3ZlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUNBLE9BQU8sRUFBRSxLQUFLLEVBQUUsTUFBTSxxQkFBcUIsQ0FBQztBQUM1QyxPQUFPLEVBQUUsaUJBQWlCLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUluRCxPQUFPLEVBQUUsTUFBTSxNQUFNLENBQUM7QUFPdEIsS0FBSyxVQUFVLE1BQU0sQ0FBQyxNQUFlLEVBQUUsTUFBVztJQUM5QyxNQUFNLEdBQUcsR0FBRyxNQUFNLE1BQU0sQ0FBQyxNQUFNLENBQUMsRUFBRSxFQUFFLEVBQUUsTUFBTSxFQUFFLENBQUMsQ0FBQTtJQUMvQyxPQUFPLEdBQUcsQ0FBQTtBQUNkLENBQUM7QUFFRCxNQUFNLENBQUMsT0FBTyxPQUFPLE9BQVEsU0FBUSxFQUFFO0lBQ25DLFlBQVksR0FBVyxFQUFFLE9BQWdCO1FBQ3ZDLEtBQUssQ0FBQyxHQUFHLEVBQUUsT0FBTyxDQUFDLENBQUE7SUFDckIsQ0FBQztJQUdJLEtBQUssQ0FBQyxhQUFhLENBQUMsT0FBZSxFQUFFLElBQW1CO1FBQzdELE1BQU0sR0FBRyxHQUFHLE1BQU0sSUFBSSxDQUFDLEdBQUcsQ0FBQyxPQUFPLENBQUM7WUFDakMsTUFBTSxFQUFFLE1BQU07WUFDZCxHQUFHLEVBQUUscUJBQXFCLE9BQU8sa0JBQWtCO1lBQ25ELElBQUk7U0FDTCxDQUFDLENBQUE7UUFDRixPQUFPLEdBQUcsQ0FBQTtJQUNaLENBQUM7SUFHTSxLQUFLLENBQUMsbUJBQW1CLENBQUMsT0FBZSxFQUFFLElBQW1CO1FBQ25FLE1BQU0sR0FBRyxHQUFHLE1BQU0sSUFBSSxDQUFDLEdBQUcsQ0FBQyxPQUFPLENBQUM7WUFDakMsTUFBTSxFQUFFLE1BQU07WUFDZCxHQUFHLEVBQUUscUJBQXFCLE9BQU8sa0JBQWtCO1lBQ25ELElBQUk7U0FDTCxDQUFDLENBQUE7UUFDRixPQUFPLEdBQUcsQ0FBQTtJQUNaLENBQUM7SUFFTSxLQUFLLENBQUMscUJBQXFCLENBQUMsT0FBZSxFQUFFLElBQW1CO1FBQ3JFLE1BQU0sR0FBRyxHQUFHLE1BQU0sSUFBSSxDQUFDLEdBQUcsQ0FBQyxPQUFPLENBQUM7WUFDakMsTUFBTSxFQUFFLE1BQU07WUFDZCxHQUFHLEVBQUUscUJBQXFCLE9BQU8sb0JBQW9CO1lBQ3JELElBQUk7U0FDTCxDQUFDLENBQUE7UUFDRixPQUFPLEdBQUcsQ0FBQTtJQUNaLENBQUM7SUFHTSxLQUFLLENBQUMscUJBQXFCLENBQUMsT0FBZSxFQUFFLElBQW1CO1FBQ3JFLE1BQU0sR0FBRyxHQUFHLE1BQU0sSUFBSSxDQUFDLEdBQUcsQ0FBQyxPQUFPLENBQUM7WUFDakMsTUFBTSxFQUFFLE1BQU07WUFDZCxHQUFHLEVBQUUscUJBQXFCLE9BQU8sb0JBQW9CO1lBQ3JELElBQUk7U0FDTCxDQUFDLENBQUE7UUFDRixPQUFPLEdBQUcsQ0FBQTtJQUNaLENBQUM7SUFHTSxLQUFLLENBQUMsZ0JBQWdCLENBQUMsT0FBZSxFQUFFLElBQW1CO1FBQ2hFLE1BQU0sR0FBRyxHQUFHLE1BQU0sSUFBSSxDQUFDLEdBQUcsQ0FBQyxPQUFPLENBQUM7WUFDakMsTUFBTSxFQUFFLE1BQU07WUFDZCxHQUFHLEVBQUUscUJBQXFCLE9BQU8sZUFBZTtZQUNoRCxJQUFJO1NBQ0wsQ0FBQyxDQUFBO1FBQ0YsT0FBTyxHQUFHLENBQUE7SUFDWixDQUFDO0NBQ0Y7QUEvQ0M7SUFEQyxLQUFLLENBQUMsaUJBQWlCLEVBQUUsTUFBTSxDQUFDOzs7OzRDQVFoQztBQUdEO0lBREMsS0FBSyxDQUFDLGlCQUFpQixFQUFFLE1BQU0sQ0FBQzs7OztrREFRaEM7QUFZRDtJQURDLEtBQUssQ0FBQyxpQkFBaUIsRUFBRSxNQUFNLENBQUM7Ozs7b0RBUWhDO0FBR0Q7SUFEQyxLQUFLLENBQUMsaUJBQWlCLEVBQUUsTUFBTSxDQUFDOzs7OytDQVFoQyJ9