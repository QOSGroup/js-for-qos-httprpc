"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Bank_1 = __importDefault(require("./Txs/Bank"));
const utils_1 = require("./utils");
class Account {
    constructor(controller, keyPair, mnemonic) {
        // public account: IAccount
        this.qos = 0;
        this.rpc = controller;
        if (keyPair) {
            this.mnemonic = mnemonic;
            this.keypair = keyPair;
            this.address = this.rpc.key.getAddress(keyPair.publicKey);
            this.pubKey = utils_1.encodeBase64(keyPair.publicKey);
            this.privateKey = utils_1.encodeBase64(keyPair.privateKey);
            this.bech32pubkey = keyPair.bech32pubkey;
        }
    }
    async sendTransferTx() {
        const tx = new Bank_1.default(this.rpc, this);
        const res = await tx.execTransferTx('qosacc12z5jn6c3qu3j2zy80ydwjm8pjwu3h8tqk3cwya', {
            base: {
                'from': this.address,
                max_gas: '200000'
            },
            qos: '1000'
        });
        return res;
    }
}
exports.default = Account;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiQWNjb3VudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9jb3JlL0FjY291bnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFDQSxzREFBOEI7QUFFOUIsbUNBQXVDO0FBRXZDLE1BQU0sT0FBTztJQVdYLFlBQVksVUFBa0IsRUFBRSxPQUFrQixFQUFFLFFBQWlCO1FBVHJFLDJCQUEyQjtRQUNwQixRQUFHLEdBQVcsQ0FBQyxDQUFDO1FBU3JCLElBQUksQ0FBQyxHQUFHLEdBQUcsVUFBVSxDQUFDO1FBQ3RCLElBQUksT0FBTyxFQUFFO1lBQ1gsSUFBSSxDQUFDLFFBQVEsR0FBRyxRQUFRLENBQUM7WUFDekIsSUFBSSxDQUFDLE9BQU8sR0FBRyxPQUFPLENBQUM7WUFDdkIsSUFBSSxDQUFDLE9BQU8sR0FBRyxJQUFJLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxVQUFVLENBQUMsT0FBTyxDQUFDLFNBQVMsQ0FBQyxDQUFDO1lBQzFELElBQUksQ0FBQyxNQUFNLEdBQUcsb0JBQVksQ0FBQyxPQUFPLENBQUMsU0FBUyxDQUFDLENBQUM7WUFDOUMsSUFBSSxDQUFDLFVBQVUsR0FBRyxvQkFBWSxDQUFDLE9BQU8sQ0FBQyxVQUFVLENBQUMsQ0FBQztZQUNuRCxJQUFJLENBQUMsWUFBWSxHQUFHLE9BQU8sQ0FBQyxZQUFZLENBQUM7U0FDMUM7SUFDSCxDQUFDO0lBRU0sS0FBSyxDQUFDLGNBQWM7UUFDekIsTUFBTSxFQUFFLEdBQUcsSUFBSSxjQUFJLENBQUMsSUFBSSxDQUFDLEdBQUcsRUFBRSxJQUFJLENBQUMsQ0FBQztRQUNwQyxNQUFNLEdBQUcsR0FBRyxNQUFNLEVBQUUsQ0FBQyxjQUFjLENBQ2pDLCtDQUErQyxFQUMvQztZQUNFLElBQUksRUFBRTtnQkFDSixNQUFNLEVBQUUsSUFBSSxDQUFDLE9BQU87Z0JBQ3BCLE9BQU8sRUFBRSxRQUFRO2FBQ2xCO1lBQ0QsR0FBRyxFQUFFLE1BQU07U0FDWixDQUFDLENBQUM7UUFDTCxPQUFPLEdBQUcsQ0FBQztJQUNiLENBQUM7Q0FDRjtBQUVELGtCQUFlLE9BQU8sQ0FBQyJ9