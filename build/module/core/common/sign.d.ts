import Account from '../Account';
import Tx from '../Txs/Tx';
export declare function sign(account: Account, data: any): string;
export declare function componentSignData(target: Tx, res: any): Promise<any>;
