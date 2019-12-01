import Account from './Account';
import SecretKey from './SecretKey';
import Tx from './Tx';
import { IBaseInput } from './types/IBaseInput';
export declare class QOSRpc {
    readonly request: import("axios").AxiosInstance;
    readonly tx: Tx;
    config: {
        readonly baseUrl: string;
    };
    key: SecretKey;
    private _tx;
    constructor(config: {
        readonly baseUrl: string;
    });
    post(url: string, data: IBaseInput): Promise<import("axios").AxiosResponse<any>>;
    get(url: string): Promise<import("axios").AxiosResponse<any>>;
    generateMnemonic(): string;
    importAccount(mnemonic: string): Account;
    /**
     * 根据私钥恢复账户
     * @param {string} privateKey 私钥
     */
    recoveryAccountByPrivateKey(privateKey: string): Account;
    verifyBech32StringByAccAddress(accAddress: string): any;
}
export default QOSRpc;
