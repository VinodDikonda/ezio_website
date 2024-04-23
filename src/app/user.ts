export class User{
    id!:String;
    name!:String;
    email!:String;
    password!:String;
}

export class Service{
    id!:String;
    tittle!:String;
    discription!:String;
    fa_logo!:String;
}

export class Works{
    id!:string;
    tittle!:string;
    discription!:string;
    file!:Blob|string;
}
export class Client{
    id!:string;
    comName!:string;
    tittle!:string;
    discription!:string;
    file!:Blob|string;

}
export class Product{
    id!:string;
    tittle!:string;
    discription!:string;
    file!:Blob|string;
}
export class Team{
    id!:string;
    name!:string;
    work!:string;
    file!:Blob|string;
}

export class Grouppic{
    id!:string;
    file!:Blob|string;
}

export class Carrer{
    id!:string;
    job_name!:string;
    qualification!:string;
    job_type!:string;
    job_experience!:string;
    skills!:string;
    disc1!:string;
    disc2!:string;
    disc3!:string;
    disc4!:string;
    disc5!:string;
    disc6!:string;
    disc7!:string;
    disc8!:string;
    disc9!:string;
    disc10!:string;
}


export class Email_Career{
    subject!:string;
    name!:string;
    phone_no!:string;
    email!:string;
    year!:string;
    months!:string;
    file:File | undefined;
}

export class Blog{
    id!:string;
    subject!:string;
    tittle!:string;
    discription!:string;
    discription1!:string;
    discription2!:string;
    disclaimer!:string;
    file!:Blob|string;
}

export class Email_Contact{
    name!:string;
    subject!:string;
    email!:string;
    msg!:string;
}



