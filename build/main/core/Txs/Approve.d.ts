import Account from '../Account';
import QOSRpc from '../QOSRpc';
import { IQSC } from '../types/common';
import { IBaseInput } from '../types/IBaseInput';
import Tx from './Tx';
export interface IApproveInput extends IBaseInput {
    qos: string;
    qscs?: IQSC[];
}
export default class Approve extends Tx {
    constructor(rpc: QOSRpc, account: Account);
    execApproveTx(address: string, data: IApproveInput): Promise<import("axios").AxiosResponse<any>>;
    execCancelApproveTx(address: string, data: IApproveInput): Promise<import("axios").AxiosResponse<any>>;
    execIncreaseApproveTx(address: string, data: IApproveInput): Promise<import("axios").AxiosResponse<any>>;
    execDecreaseApproveTx(address: string, data: IApproveInput): Promise<import("axios").AxiosResponse<any>>;
    execUseApproveTx(address: string, data: IApproveInput): Promise<import("axios").AxiosResponse<any>>;
}
