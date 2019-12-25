import Approve from './Txs/Approve';
import Bank from './Txs/Bank';
import Delegation from './Txs/Delegation';
// import { ITransferInput } from './'
class Account {
    constructor(controller, Acc, mnemonic) {
        // public account: IAccount
        this.qos = 0;
        this.rpc = controller;
        if (Acc) {
            this.mnemonic = mnemonic;
            this.keypair = Acc.keyPair;
            this.privateKey = Acc.keyPair.hexPrivateKey;
            // this.pubKey = Acc.keyPair.pubKey;
            this.address = Acc.address;
            this.privateKeyBz = Acc.keyPair.privateKey;
            this.pubKeyBz = Acc.keyPair.pubKey;
        }
    }
    async sendTransferTx(toAddress, data) {
        const tx = new Bank(this.rpc, this);
        const res = await tx.execTransferTx(toAddress, data);
        return res;
    }
    async sendCreateDelegateTx(validatorAddress, data) {
        const tx = new Delegation(this.rpc, this);
        const res = await tx.execCreateDelegationTx(validatorAddress, data);
        return res;
    }
    async sendModifyDelegationTx(validatorAddress, data) {
        const tx = new Delegation(this.rpc, this);
        const res = await tx.execModifyDelegationTx(validatorAddress, data);
        return res;
    }
    async sendUnbondDelegationTx(validatorAddress, data) {
        const tx = new Delegation(this.rpc, this);
        const res = await tx.execUnbondDelegationTx(validatorAddress, data);
        return res;
    }
    async sendCheckTx(data) {
        const tx = new Bank(this.rpc, this);
        const res = await tx.execCheckTx(data);
        return res;
    }
    async sendApproveTx(toAddress, data) {
        const tx = new Approve(this.rpc, this);
        const res = await tx.execApproveTx(toAddress, data);
        return res;
    }
    async sendCancelApproveTx(toAddress, data) {
        const tx = new Approve(this.rpc, this);
        const res = await tx.execCancelApproveTx(toAddress, data);
        return res;
    }
    async sendIncreaseApproveTx(toAddress, data) {
        const tx = new Approve(this.rpc, this);
        const res = await tx.execIncreaseApproveTx(toAddress, data);
        return res;
    }
    async sendDecreaseApproveTx(toAddress, data) {
        const tx = new Approve(this.rpc, this);
        const res = await tx.execDecreaseApproveTx(toAddress, data);
        return res;
    }
    async sendUseApproveTx(toAddress, data) {
        const tx = new Approve(this.rpc, this);
        const res = await tx.execUseApproveTx(toAddress, data);
        return res;
    }
    async queryDelagationAll(deleagtorAddress) {
        const tx = new Delegation(this.rpc, this);
        const res = await tx.execQueryDelegationAll(deleagtorAddress);
        return res;
    }
    async queryDelagationOne(deleagtorAddress, validatorAddress) {
        const tx = new Delegation(this.rpc, this);
        const res = await tx.execQueryDelegationOne(deleagtorAddress, validatorAddress);
        return res;
    }
    async queryValidatorAll() {
        const tx = new Delegation(this.rpc, this);
        const res = await tx.execQueryValidatorAll();
        return res;
    }
    async queryValidatorOne(validatorAddress) {
        const tx = new Delegation(this.rpc, this);
        const res = await tx.execQueryValidatorOne(validatorAddress);
        return res;
    }
    async queryAccount(accountAddress) {
        const tx = new Bank(this.rpc, this);
        const res = await tx.execQueryAccount(accountAddress);
        return res;
    }
}
export default Account;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiQWNjb3VudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9jb3JlL0FjY291bnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQ0EsT0FBTyxPQUEwQixNQUFNLGVBQWUsQ0FBQztBQUN2RCxPQUFPLElBQXdCLE1BQU0sWUFBWSxDQUFDO0FBQ2xELE9BQU8sVUFBc0YsTUFBTSxrQkFBa0IsQ0FBQztBQUV0SCxzQ0FBc0M7QUFFdEMsTUFBTSxPQUFPO0lBWVgsWUFBWSxVQUFrQixFQUFFLEdBQVUsRUFBRSxRQUFpQjtRQVY3RCwyQkFBMkI7UUFDcEIsUUFBRyxHQUFXLENBQUMsQ0FBQztRQVVyQixJQUFJLENBQUMsR0FBRyxHQUFHLFVBQVUsQ0FBQztRQUN0QixJQUFJLEdBQUcsRUFBRTtZQUNQLElBQUksQ0FBQyxRQUFRLEdBQUcsUUFBUSxDQUFDO1lBQ3pCLElBQUksQ0FBQyxPQUFPLEdBQUcsR0FBRyxDQUFDLE9BQU8sQ0FBQztZQUMzQixJQUFJLENBQUMsVUFBVSxHQUFHLEdBQUcsQ0FBQyxPQUFPLENBQUMsYUFBYSxDQUFDO1lBQzVDLG9DQUFvQztZQUNwQyxJQUFJLENBQUMsT0FBTyxHQUFHLEdBQUcsQ0FBQyxPQUFPLENBQUM7WUFDM0IsSUFBSSxDQUFDLFlBQVksR0FBRyxHQUFHLENBQUMsT0FBTyxDQUFDLFVBQVUsQ0FBQztZQUMzQyxJQUFJLENBQUMsUUFBUSxHQUFHLEdBQUcsQ0FBQyxPQUFPLENBQUMsTUFBTSxDQUFDO1NBQ3BDO0lBQ0gsQ0FBQztJQUVNLEtBQUssQ0FBQyxjQUFjLENBQUMsU0FBaUIsRUFBRSxJQUFvQjtRQUNqRSxNQUFNLEVBQUUsR0FBRyxJQUFJLElBQUksQ0FBQyxJQUFJLENBQUMsR0FBRyxFQUFFLElBQUksQ0FBQyxDQUFDO1FBQ3BDLE1BQU0sR0FBRyxHQUFHLE1BQU0sRUFBRSxDQUFDLGNBQWMsQ0FBQyxTQUFTLEVBQUUsSUFBSSxDQUFDLENBQUM7UUFDckQsT0FBTyxHQUFHLENB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