import QOSRpc from './QOSRpc';

class Tx {
  public rpc: QOSRpc;
  constructor(controller: QOSRpc) {
    this.rpc = controller;
  }
  public async sendTx() {
    const res = await this.rpc.request.post('/bank/accounts/qosacc12z5jn6c3qu3j2zy80ydwjm8pjwu3h8tqk3cwya/transfers',
      {
        'base': {
          'from': 'qosacc1kcj2ktlvqgdrznprtf5ypgkewm2dh5sc3enx5l'
        },
        'qos': '1000'
      })
    return res
  }
}

export default Tx