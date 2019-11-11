import Account from '../Account';
import QOSRpc from '../QOSRpc';
import { IQSC } from '../types/common';
import { IBaseInput } from '../types/IBaseInput';
import Tx from './Tx';
export interface ITransferInput extends IBaseInput {
    qos: string;
    qscs?: IQSC[];
}
export default class Bank extends Tx {
    constructor(rpc: QOSRpc, account: Account);
    execTransferTx(address: string, data: ITransferInput): Promise<import("axios").AxiosResponse<any>>;
    execCheckTx(data: ITransferInput): Promise<import("axios").AxiosResponse<any>>;
}
