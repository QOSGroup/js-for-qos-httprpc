import QOSRpc from './QOSRpc';
import Approve, { IApproveInput } from './Txs/Approve';
import Bank, { ITransferInput } from './Txs/Bank';
import Delegation, { ICreateDelegationInput,  IModifyDelegationInput, IUnbondDelegationInput} from './Txs/Delegation';
import { IKeyPair } from './types/common';
import { encodeBase64 } from './utils';
import logger from './utils/log';
// import { ITransferInput } from './'

class Account {
  public readonly rpc: QOSRpc;
  // public account: IAccount
  public qos: number = 0;
  public mnemonic: string;
  public keypair: IKeyPair;
  public address: string;
  public pubKey: string;
  public privateKey: string;
  public bech32pubkey: string;

  constructor(controller: QOSRpc, keyPair?: IKeyPair, mnemonic?: string) {
    this.rpc = controller;
    if (keyPair) {
      this.mnemonic = mnemonic;
      this.keypair = keyPair;
      this.address = this.rpc.key.getAddress(keyPair.publicKey);
      this.pubKey = encodeBase64(keyPair.publicKey);
      this.privateKey = encodeBase64(keyPair.privateKey);
      this.bech32pubkey = keyPair.bech32pubkey;
    }
  }

  public async sendTransferTx(toAddress: string, data: ITransferInput) {
    const tx = new Bank(this.rpc, this);
     const res = await tx.execTransferTx(toAddress, data);
    logger.debug('transfer result', res);
    return res;
  }

  public async sendCreateDelegateTx(validatorAddress: string, data: ICreateDelegationInput) {
    const tx = new Delegation(this.rpc, this);
     const res = await tx.execCreateDelegationTx(validatorAddress, data);
    return res;
  }

  public async sendModifyDelegationTx(validatorAddress: string, data: IModifyDelegationInput) {
    const tx = new Delegation(this.rpc, this);
     const res = await tx.execModifyDelegationTx(validatorAddress, data);
    return res;
  }

  public async sendUnbondDelegationTx(validatorAddress: string, data: IUnbondDelegationInput) {
    const tx = new Delegation(this.rpc, this);
     const res = await tx.execUnbondDelegationTx(validatorAddress, data);
    return res;
  }

  public async sendCheckTx(data: ITransferInput) {
    const tx = new Bank(this.rpc, this);
    const res = await tx.execCheckTx(data);
    return res;
  }

  public async sendApproveTx(toAddress: string, data: IApproveInput) {
    const tx = new Approve(this.rpc, this);
    const res = await tx.execApproveTx(toAddress, data);
    return res;
  }

  public async sendCancelApproveTx(toAddress: string, data: IApproveInput) {
    const tx = new Approve(this.rpc, this);
    const res = await tx.execCancelApproveTx(toAddress, data);
    return res;
  }

  public async sendIncreaseApproveTx(toAddress: string, data: IApproveInput) {
    const tx = new Approve(this.rpc, this);
    const res = await tx.execIncreaseApproveTx(toAddress,data);
    return res;
  }

  public async sendDecreaseApproveTx(toAddress: string, data: IApproveInput) {
    const tx = new Approve(this.rpc, this);
    const res = await tx.execDecreaseApproveTx(toAddress,data);
    return res;
  }

  public async sendUseApproveTx(toAddress: string, data: IApproveInput) {
    const tx = new Approve(this.rpc, this);
    const res = await tx.execUseApproveTx(toAddress,data);
    return res;
  }

  public async queryDelagationAll(deleagtorAddress: string) {
    const tx = new Delegation(this.rpc, this);
    const res = await tx.execQueryDelegationAll(deleagtorAddress)
    return res
  }

  public async queryDelagationOne(deleagtorAddress: string, validatorAddress: string) {
    const tx = new Delegation(this.rpc, this);
    const res = await tx.execQueryDelegationOne(deleagtorAddress, validatorAddress)
    return res
  }

  public async queryValidatorOne(validatorAddress: string) {
    const tx = new Delegation(this.rpc, this);
    const res = await tx.execQueryValidatorOne(validatorAddress)
    return res
  }

  public async queryAccount(accountAddress) {
    const tx = new Bank(this.rpc, this);
    const res = await tx.execQueryAccount(accountAddress)
    return res;
  }


}

export default Account;
