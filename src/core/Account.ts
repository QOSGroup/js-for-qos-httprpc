import QOSRpc from './QOSRpc';
import Approve, { IApproveInput } from './Txs/Approve';
import Bank, { ITransferInput } from './Txs/Bank';
import { IKeyPair } from './types/common';
import { encodeBase64 } from './utils';
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
    // const res = await tx.execTransferTx(
    //   toAddress,
    //   {
    //     base: {
    //       from: data.base.from,
    //       max_gas: data.base.max_gas
    //     },
    //     qos: data.qos,
    //     qscs: data.qscs
    //   });
      const res = await tx.execTransferTx(toAddress, data);
    return res;
  }

  public async sendCheckTx(data: ITransferInput) {
    const tx = new Bank(this.rpc, this);
    const res = await tx.execCheckTx(data);
    return res;
  }

  public async sendApproveTx(toAddress: string, data: IApproveInput) {
    const tx = new Approve(this.rpc, this);
    const res = await tx.execApproveTx(
      toAddress,
      {
        base: {
          from: data.base.from,
          max_gas: data.base.max_gas
        },
        qos: data.qos,
        qscs:data.qscs
      });
    return res;
  }

  public async sendCancelApproveTx(toAddress: string, data: IApproveInput) {
    const tx = new Approve(this.rpc, this);
    const res = await tx.execCancelApproveTx(
      toAddress,
      {
        base: {
          from: data.base.from,
          max_gas: data.base.max_gas
        },
        qos: data.qos,
        qscs:data.qscs
      });
    return res;
  }

  public async sendIncreaseApproveTx(toAddress: string, data: IApproveInput) {
    const tx = new Approve(this.rpc, this);
    const res = await tx.execIncreaseApproveTx(
      toAddress,
      {
        base: {
          from: data.base.from,
          max_gas: data.base.max_gas
        },
        qos: data.qos,
        qscs:data.qscs
      });
    return res;
  }

  public async sendDecreaseApproveTx(toAddress: string, data: IApproveInput) {
    const tx = new Approve(this.rpc, this);
    const res = await tx.execDecreaseApproveTx(
      toAddress,
      {
        base: {
          from: data.base.from,
          max_gas: data.base.max_gas
        },
        qos: data.qos,
        qscs:data.qscs
      });
    return res;
  }

  public async sendUseApproveTx(toAddress: string, data: IApproveInput) {
    const tx = new Approve(this.rpc, this);
    const res = await tx.execUseApproveTx(
      toAddress,
      {
        base: {
          from: data.base.from,
          max_gas: data.base.max_gas
        },
        qos: data.qos,
        qscs:data.qscs
      });
    return res;
  }
}

export default Account;
