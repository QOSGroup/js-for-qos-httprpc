"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Approve_1 = __importDefault(require("./Txs/Approve"));
const Bank_1 = __importDefault(require("./Txs/Bank"));
const Delegation_1 = __importDefault(require("./Txs/Delegation"));
// import { ITransferInput } from './'
class Account {
    constructor(controller, keyPair, mnemonic) {
        // public account: IAccount
        this.qos = 0;
        this.rpc = controller;
        if (keyPair) {
            this.mnemonic = mnemonic;
            this.keypair = keyPair;
            this.privateKey = keyPair.privateKey;
            this.pubKey = keyPair.pubKey;
            this.address = keyPair.accAddress;
            this.privateKeyBz = keyPair.privateKeyBz;
            this.pubKeyBz = keyPair.pubKeyBz;
        }
    }
    async sendTransferTx(toAddress, data) {
        const tx = new Bank_1.default(this.rpc, this);
        const res = await tx.execTransferTx(toAddress, data);
        return res;
    }
    async sendCreateDelegateTx(validatorAddress, data) {
        const tx = new Delegation_1.default(this.rpc, this);
        const res = await tx.execCreateDelegationTx(validatorAddress, data);
        return res;
    }
    async sendModifyDelegationTx(validatorAddress, data) {
        const tx = new Delegation_1.default(this.rpc, this);
        const res = await tx.execModifyDelegationTx(validatorAddress, data);
        return res;
    }
    async sendUnbondDelegationTx(validatorAddress, data) {
        const tx = new Delegation_1.default(this.rpc, this);
        const res = await tx.execUnbondDelegationTx(validatorAddress, data);
        return res;
    }
    async sendCheckTx(data) {
        const tx = new Bank_1.default(this.rpc, this);
        const res = await tx.execCheckTx(data);
        return res;
    }
    async sendApproveTx(toAddress, data) {
        const tx = new Approve_1.default(this.rpc, this);
        const res = await tx.execApproveTx(toAddress, data);
        return res;
    }
    async sendCancelApproveTx(toAddress, data) {
        const tx = new Approve_1.default(this.rpc, this);
        const res = await tx.execCancelApproveTx(toAddress, data);
        return res;
    }
    async sendIncreaseApproveTx(toAddress, data) {
        const tx = new Approve_1.default(this.rpc, this);
        const res = await tx.execIncreaseApproveTx(toAddress, data);
        return res;
    }
    async sendDecreaseApproveTx(toAddress, data) {
        const tx = new Approve_1.default(this.rpc, this);
        const res = await tx.execDecreaseApproveTx(toAddress, data);
        return res;
    }
    async sendUseApproveTx(toAddress, data) {
        const tx = new Approve_1.default(this.rpc, this);
        const res = await tx.execUseApproveTx(toAddress, data);
        return res;
    }
    async queryDelagationAll(deleagtorAddress) {
        const tx = new Delegation_1.default(this.rpc, this);
        const res = await tx.execQueryDelegationAll(deleagtorAddress);
        return res;
    }
    async queryDelagationOne(deleagtorAddress, validatorAddress) {
        const tx = new Delegation_1.default(this.rpc, this);
        const res = await tx.execQueryDelegationOne(deleagtorAddress, validatorAddress);
        return res;
    }
    async queryValidatorAll() {
        const tx = new Delegation_1.default(this.rpc, this);
        const res = await tx.execQueryValidatorAll();
        return res;
    }
    async queryValidatorOne(validatorAddress) {
        const tx = new Delegation_1.default(this.rpc, this);
        const res = await tx.execQueryValidatorOne(validatorAddress);
        return res;
    }
    async queryAccount(accountAddress) {
        const tx = new Bank_1.default(this.rpc, this);
        const res = await tx.execQueryAccount(accountAddress);
        return res;
    }
}
exports.default = Account;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiQWNjb3VudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9jb3JlL0FjY291bnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFDQSw0REFBdUQ7QUFDdkQsc0RBQWtEO0FBQ2xELGtFQUFzSDtBQUV0SCxzQ0FBc0M7QUFFdEMsTUFBTSxPQUFPO0lBWVgsWUFBWSxVQUFrQixFQUFFLE9BQWtCLEVBQUUsUUFBaUI7UUFWckUsMkJBQTJCO1FBQ3BCLFFBQUcsR0FBVyxDQUFDLENBQUM7UUFVckIsSUFBSSxDQUFDLEdBQUcsR0FBRyxVQUFVLENBQUM7UUFDdEIsSUFBSSxPQUFPLEVBQUU7WUFDWCxJQUFJLENBQUMsUUFBUSxHQUFHLFFBQVEsQ0FBQztZQUN6QixJQUFJLENBQUMsT0FBTyxHQUFHLE9BQU8sQ0FBQztZQUN2QixJQUFJLENBQUMsVUFBVSxHQUFHLE9BQU8sQ0FBQyxVQUFVLENBQUM7WUFDckMsSUFBSSxDQUFDLE1BQU0sR0FBRyxPQUFPLENBQUMsTUFBTSxDQUFDO1lBQzdCLElBQUksQ0FBQyxPQUFPLEdBQUcsT0FBTyxDQUFDLFVBQVUsQ0FBQztZQUNsQyxJQUFJLENBQUMsWUFBWSxHQUFHLE9BQU8sQ0FBQyxZQUFZLENBQUM7WUFDekMsSUFBSSxDQUFDLFFBQVEsR0FBRyxPQUFPLENBQUMsUUFBUSxDQUFDO1NBQ2xDO0lBQ0gsQ0FBQztJQUVNLEtBQUssQ0FBQyxjQUFjLENBQUMsU0FBaUIsRUFBRSxJQUFvQjtRQUNqRSxNQUFNLEVBQUUsR0FBRyxJQUFJLGNBQUksQ0FBQyxJQUFJLENBQUMsR0FBRyxFQUFFLElBQUksQ0FBQyxDQUFDO1FBQ3BDLE1BQU0sR0FBRyxHQUFHLE1BQU0sRUFBRSxDQUFDLGNBQWMsQ0FBQyxTQUFTLEVBQUUsSUFBSSxDQUFDLENBQUM7UUFDckQsT0FBTyxHQUFHLENBQUM7SUFDYixDQUFDO0lBRU0sS0FBSyxDQUFDLG9CQUFvQixDQUFDLGdCQUF3QixFQUFFLElBQTRCO1FB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