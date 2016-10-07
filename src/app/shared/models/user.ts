export class User {
    id: string;
    email: string;
    firstName: string;
    lastName: string;
    birthday: string;
    startedToWorkDate: string;
    totalKudos: number;
    weeklyKudos: number;
    subscribing: boolean;
    completed: boolean;

    constructor(response: any) {
        this.birthday = response.birthday;
        this.completed = response.completed;
        this.email = response.email;
        this.firstName = response.firstName;
        this.lastName = response.lastName;
        this.id = response.id;
        this.totalKudos = response.totalKudos;
        this.weeklyKudos = response.weeklyKudos;
    }

    constructor(id: string, email: string, firstName: string, lastName: string, birthday: string, startedToWorkDate: string, totalKudos: number, weeklyKudos: number, subscribing: boolean, completed: boolean) {
        this.id = id;
        this.email = email;
        this.firstName = firstName;
        this.lastName = lastName;
        this.birthday = birthday;
        this.startedToWorkDate = startedToWorkDate;
        this.totalKudos = totalKudos;
        this.weeklyKudos = weeklyKudos;
        this.subscribing = subscribing;
        this.completed = completed;
    }

}

