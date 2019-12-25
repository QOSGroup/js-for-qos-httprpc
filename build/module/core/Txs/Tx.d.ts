import QOSRpc from '../..';
import Account from '../Account';
export default class Tx {
    rpc: QOSRpc;
    account: Account;
    constructor(rpc: QOSRpc, account: Account);
    sendTx({ tx, mode }: {
        tx: string;
        mode?: 'block' | 'sync' | 'async';
    }): Promise<void | import("axios").AxiosResponse<any>>;
}
