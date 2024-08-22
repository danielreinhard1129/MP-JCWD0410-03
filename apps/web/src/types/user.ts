export interface User {
  id: number;
  name: string;
  email: string;
  role: Role;
}

export enum Role {
  ORGANIZERS = "ORGANIZERS",
  CUSTOMERS = "CUSTOMERS",
}
