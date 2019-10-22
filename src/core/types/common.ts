export interface IKeyPair {
  publicKey: Uint8Array;
  privateKey: Uint8Array;
  bech32pubkey: string;
}

export interface IQSC {
  coin_name: string;
  amount: number;
}
