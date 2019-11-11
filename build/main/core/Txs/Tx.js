"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const log_1 = __importDefault(require("../utils/log"));
class Tx {
    constructor(rpc, account) {
        this.rpc = rpc;
        this.account = account;
    }
    async sendTx({ tx, mode = 'block' }) {
        log_1.default.debug('sendTx:===', JSON.stringify({ tx, mode }));
        const res = await this.rpc.request({
            method: 'POST',
            url: '/txs',
            data: { tx, mode }
        }).catch(err => console.log(err));
        return res;
    }
}
exports.default = Tx;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiVHguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi9zcmMvY29yZS9UeHMvVHgudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFFQSx1REFBa0M7QUFFbEMsTUFBcUIsRUFBRTtJQUdyQixZQUFZLEdBQVcsRUFBRSxPQUFnQjtRQUN2QyxJQUFJLENBQUMsR0FBRyxHQUFHLEdBQUcsQ0FBQztRQUNmLElBQUksQ0FBQyxPQUFPLEdBQUcsT0FBTyxDQUFDO0lBQ3pCLENBQUM7SUFFTSxLQUFLLENBQUMsTUFBTSxDQUFDLEVBQUUsRUFBRSxFQUFFLElBQUksR0FBRyxPQUFPLEVBQW9EO1FBQzFGLGFBQU0sQ0FBQyxLQUFLLENBQUMsWUFBWSxFQUFFLElBQUksQ0FBQyxTQUFTLENBQUMsRUFBRSxFQUFFLEVBQUUsSUFBSSxFQUFFLENBQUMsQ0FBQyxDQUFBO1FBQ3hELE1BQU0sR0FBRyxHQUFHLE1BQU8sSUFBSSxDQUFDLEdBQUcsQ0FBQyxPQUFPLENBQUM7WUFDbEMsTUFBTSxFQUFFLE1BQU07WUFDZCxHQUFHLEVBQUUsTUFBTTtZQUNYLElBQUksRUFBRSxFQUFFLEVBQUUsRUFBRSxJQUFJLEVBQUU7U0FDbkIsQ0FBQyxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLE9BQU8sQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQTtRQUNqQyxPQUFPLEdBQUcsQ0FBQTtJQUNaLENBQUM7Q0FDRjtBQWpCRCxxQkFpQkMifQ==