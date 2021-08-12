export interface IPatientRegister{
    firstname: string,
    lastname: string,
    contact: number,
    address: string
}

export interface IInitialize {
    getDrugs?: string,
    postDrugs?: string,
    postLab?: string,
    getLab?: string,
    symptoms?: string,
    illness?: string,
    appearance?: {type: {
        temperature: Number, weight: Number, height: Number, bloodLevel: Number
    }},
    key: string,
    nhis:boolean,
    done?: boolean,
    payment?: number
}

export interface IStaff {
    firstname: string,
    lasname: string,
    position: string,
    email: string
}