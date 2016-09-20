export class Credentials {

    constructor(public email: string,
                public password: string) {
    }

}

export class RegistrationCredentials extends Credentials {

    constructor(public email: string,
                public password: string,
                public fullName: string) {
        super(email, password);
    }

}