import Bank from './Txs/Bank';
import { encodeBase64 } from './utils';
class Account {
    constructor(controller, keyPair, mnemonic) {
        // public account: IAccount
        this.qos = 0;
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
    async sendTransferTx() {
        const tx = new Bank(this.rpc, this);
        const res = await tx.execTransferTx('qosacc12z5jn6c3qu3j2zy80ydwjm8pjwu3h8tqk3cwya', {
            base: {
                'from': this.address,
                max_gas: '200000'
            },
            qos: '1000'
        });
        return res;
    }
}
export default Account;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiQWNjb3VudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9jb3JlL0FjY291bnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQ0EsT0FBTyxJQUFJLE1BQU0sWUFBWSxDQUFDO0FBRTlCLE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSxTQUFTLENBQUM7QUFFdkMsTUFBTSxPQUFPO0lBV1gsWUFBWSxVQUFrQixFQUFFLE9BQWtCLEVBQUUsUUFBaUI7UUFUckUsMkJBQTJCO1FBQ3BCLFFBQUcsR0FBVyxDQUFDLENBQUM7UUFTckIsSUFBSSxDQUFDLEdBQUcsR0FBRyxVQUFVLENBQUM7UUFDdEIsSUFBSSxPQUFPLEVBQUU7WUFDWCxJQUFJLENBQUMsUUFBUSxHQUFHLFFBQVEsQ0FBQztZQUN6QixJQUFJLENBQUMsT0FBTyxHQUFHLE9BQU8sQ0FBQztZQUN2QixJQUFJLENBQUMsT0FBTyxHQUFHLElBQUksQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLFVBQVUsQ0FBQyxPQUFPLENBQUMsU0FBUyxDQUFDLENBQUM7WUFDMUQsSUFBSSxDQUFDLE1BQU0sR0FBRyxZQUFZLENBQUMsT0FBTyxDQUFDLFNBQVMsQ0FBQyxDQUFDO1lBQzlDLElBQUksQ0FBQyxVQUFVLEdBQUcsWUFBWSxDQUFDLE9BQU8sQ0FBQyxVQUFVLENBQUMsQ0FBQztZQUNuRCxJQUFJLENBQUMsWUFBWSxHQUFHLE9BQU8sQ0FBQyxZQUFZLENBQUM7U0FDMUM7SUFDSCxDQUFDO0lBRU0sS0FBSyxDQUFDLGNBQWM7UUFDekIsTUFBTSxFQUFFLEdBQUcsSUFBSSxJQUFJLENBQUMsSUFBSSxDQUFDLEdBQUcsRUFBRSxJQUFJLENBQUMsQ0FBQztRQUNwQyxNQUFNLEdBQUcsR0FBRyxNQUFNLEVBQUUsQ0FBQyxjQUFjLENBQ2pDLCtDQUErQyxFQUMvQztZQUNFLElBQUksRUFBRTtnQkFDSixNQUFNLEVBQUUsSUFBSSxDQUFDLE9BQU87Z0JBQ3BCLE9BQU8sRUFBRSxRQUFRO2FBQ2xCO1lBQ0QsR0FBRyxFQUFFLE1BQU07U0FDWixDQUFDLENBQUM7UUFDTCxPQUFPLEdBQUcsQ0FBQztJQUNiLENBQUM7Q0FDRjtBQUVELGVBQWUsT0FBTyxDQUFDIn0=