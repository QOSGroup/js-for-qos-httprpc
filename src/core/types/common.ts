export interface IKeyPair {
  publicKey: Uint8Array;
  secretKey: Uint8Array;
}

export interface IQSC {
  coin_name: string;
  amount: number;
}
