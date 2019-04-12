export interface Vote {
  _id?: {$oid: string};
  name?: string;
  count: number;
}
