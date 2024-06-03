

export interface AuthType {

    _id: string;
    name:string;
    email:string;
    photo:string;
    role: "user" | "admin";
    gender: "male" | "female";
    age: number;
    dob: Date;
}