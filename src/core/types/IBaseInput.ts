interface IBase {
  from: string;
  chain_id?: string;
  nonce?: string;
  max_gas: number;
  height?: number;
  indent?: boolean;
  mode?: string;
}

export interface IBaseInput {
  base: IBase;
}