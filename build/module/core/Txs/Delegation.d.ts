import Account from '../Account';
import QOSRpc from '../QOSRpc';
import { IBaseInput } from '../types/IBaseInput';
import Tx from './Tx';
export interface ICreateDelegationInput extends IBaseInput {
    amount: string;
    is_compound?: boolean;
}
export interface IModifyDelegationInput extends IBaseInput {
    is_compound: boolean;
}
export interface IUnbondDelegationInput extends IBaseInput {
    unbond_amount?: string;
    unbond_all?: boolean;
}
export default class Delegation extends Tx {
    constructor(rpc: QOSRpc, account: Account);
    execCreateDelegationTx(validatorAddress: string, data: ICreateDelegationInput): Promise<import("axios").AxiosResponse<any>>;
    execModifyDelegationTx(validatorAddress: string, data: IModifyDelegationInput): Promise<import("axios").AxiosResponse<any>>;
    execUnbondDelegationTx(validatorAddress: string, data: IUnbondDelegationInput): Promise<import("axios").AxiosResponse<any>>;
    execQueryDelegationAll(delegatorAddress: string): Promise<import("axios").AxiosResponse<any>>;
    execQueryDelegationOne(delegatorAddress: string, validatorAddress: string): Promise<import("axios").AxiosResponse<any>>;
    execQueryValidatorAll(): Promise<import("axios").AxiosResponse<any>>;
    execQueryValidatorOne(validatorAddress: string): Promise<import("axios").AxiosResponse<any>>;
}
