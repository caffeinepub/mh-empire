import type { Principal } from "@icp-sdk/core/principal";
export interface Some<T> {
    __kind__: "Some";
    value: T;
}
export interface None {
    __kind__: "None";
}
export type Option<T> = Some<T> | None;
export interface Submission {
    projectType: string;
    name: string;
    email: string;
    message: string;
}
export interface backendInterface {
    getAllSubmissions(): Promise<Array<Submission>>;
    submitContact(id: string, name: string, email: string, projectType: string, message: string): Promise<void>;
}
