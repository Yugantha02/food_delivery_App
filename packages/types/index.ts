export enum UserRole {
  CUSTOMER = "CUSTOMER",
  RESTAURANT_OWNER = "RESTAURANT_OWNER",
  DRIVER = "DRIVER",
}

export interface User {
    id: string;
    email: string;
    fName: string;
    lName: string;
    role: UserRole;
    createdAt: Date;
}

export interface helthCheckResponse {
    status: string;
    timeStamp: Date;
}