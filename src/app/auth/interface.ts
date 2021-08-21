export interface IRegister {
    firstname: string,
    lastname: string,
    position: string,
    password: string,
    email: string,
    confirmPassword: string;
}


export interface ILogin {
    email: string,
    password: string
}

export interface IRespons {
    auth: boolean,
    message: string,
    token?: string,
    position: string,
    fullname: string
}