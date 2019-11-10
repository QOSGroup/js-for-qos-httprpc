import Account from './Account';
import SecretKey from './SecretKey';
import Tx from './Tx';
declare class QOSRpc {
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
    newAccount(mnemonic: string): Account;
    /**
     * 根据私钥恢复账户
     * @param {string} privateKey 私钥
     */
    recoveryAccountByPrivateKey(privateKey: any): Account;
}
export default QOSRpc;
