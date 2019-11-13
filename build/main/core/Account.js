"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Approve_1 = __importDefault(require("./Txs/Approve"));
const Bank_1 = __importDefault(require("./Txs/Bank"));
const Delegation_1 = __importDefault(require("./Txs/Delegation"));
const utils_1 = require("./utils");
const log_1 = __importDefault(require("./utils/log"));
// import { ITransferInput } from './'
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
    async sendTransferTx(toAddress, data) {
        const tx = new Bank_1.default(this.rpc, this);
        const res = await tx.execTransferTx(toAddress, data);
        log_1.default.debug('transfer result', res);
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiQWNjb3VudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9jb3JlL0FjY291bnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFDQSw0REFBdUQ7QUFDdkQsc0RBQWtEO0FBQ2xELGtFQUFzSDtBQUV0SCxtQ0FBdUM7QUFDdkMsc0RBQWlDO0FBQ2pDLHNDQUFzQztBQUV0QyxNQUFNLE9BQU87SUFXWCxZQUFZLFVBQWtCLEVBQUUsT0FBa0IsRUFBRSxRQUFpQjtRQVRyRSwyQkFBMkI7UUFDcEIsUUFBRyxHQUFXLENBQUMsQ0FBQztRQVNyQixJQUFJLENBQUMsR0FBRyxHQUFHLFVBQVUsQ0FBQztRQUN0QixJQUFJLE9BQU8sRUFBRTtZQUNYLElBQUksQ0FBQyxRQUFRLEdBQUcsUUFBUSxDQUFDO1lBQ3pCLElBQUksQ0FBQyxPQUFPLEdBQUcsT0FBTyxDQUFDO1lBQ3ZCLElBQUksQ0FBQyxPQUFPLEdBQUcsSUFBSSxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsVUFBVSxDQUFDLE9BQU8sQ0FBQyxTQUFTLENBQUMsQ0FBQztZQUMxRCxJQUFJLENBQUMsTUFBTSxHQUFHLG9CQUFZLENBQUMsT0FBTyxDQUFDLFNBQVMsQ0FBQyxDQUFDO1lBQzlDLElBQUksQ0FBQyxVQUFVLEdBQUcsb0JBQVksQ0FBQyxPQUFPLENBQUMsVUFBVSxDQUFDLENBQUM7WUFDbkQsSUFBSSxDQUFDLFlBQVksR0FBRyxPQUFPLENBQUMsWUFBWSxDQUFDO1NBQzFDO0lBQ0gsQ0FBQztJQUVNLEtBQUssQ0FBQyxjQUFjLENBQUMsU0FBaUIsRUFBRSxJQUFvQjtRQUNqRSxNQUFNLEVBQUUsR0FBRyxJQUFJLGNBQUksQ0FBQyxJQUFJLENBQUMsR0FBRyxFQUFFLElBQUksQ0FBQyxDQUFDO1FBQ25DLE1BQU0sR0FBRyxHQUFHLE1BQU0sRUFBRSxDQUFDLGNBQWMsQ0FBQyxTQUFTLEVBQUUsSUFBSSxDQUFDLENBQUM7UUFDdEQsYUFBTSxDQUFDLEtBQUss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