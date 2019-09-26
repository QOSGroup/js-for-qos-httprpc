import Tx from './Tx';
import createAxioRequest from './utils/request';

class QOSRpc {
  public config: { readonly baseUrl: string; };
  private _tx!: Tx;

  constructor(config: { readonly baseUrl: string; }) {
    this.config = config;
  }

  public get request() {
    return createAxioRequest(this.config.baseUrl);
  }

  public get tx() {
    if (!this._tx) {
      this._tx = new Tx(this)
    }
    return this._tx
  }

}

export default QOSRpc