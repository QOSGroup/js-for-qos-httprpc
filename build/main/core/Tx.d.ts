import QOSRpc from './QOSRpc';
declare class Tx {
    rpc: QOSRpc;
    constructor(controller: QOSRpc);
    sendTx(): Promise<import("axios").AxiosResponse<any>>;
}
export default Tx;
