const d: Date = new Date();

export type Certificate = {
  id: string;
  name: string;
  authority: string;
  serialnumber?: string;
  validTill?: Date;
  createdAt?: Date;
  importetAt?: Date;
  isActive?: boolean;
  function:
    | "key"
    | "key-encipherment"
    | "data-encipherment"
    | "ident"
    | undefined;
  type: "pem" | "p12" | "pkcs" | undefined;
};
