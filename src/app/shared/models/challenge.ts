export class Challenge {
    actions: any;
    amount: number;
    creatorFullName: string;
    creatorId: string;
    description: string;
    expirationDate: string;
    id: string;
    name: string;
    participantFullName: string;
    participantId: string;
    status: string;

    constructor(resp: any) {
        this.actions = resp.actions;
        this.amount = resp.amount;
        this.creatorFullName = resp.creatorFullName;
        this.creatorId = resp.creatorId;
        this.description = resp.description;
        this.expirationDate = resp.expirationDate;
        this.id = resp.id;
        this.name = resp.name;
        this.participantFullName = resp.participantFullName;
        this.participantId = resp.participantId;
        this.status = resp.status;
    }
}

export class ChallengeActions {
    cancelAllowed: boolean;
    acceptAllowed: boolean;
    declineAllowed: boolean;
    markAsCompletedAllowed: boolean;

    constructor(actions: any) {
        this.cancelAllowed = actions.actions.cancelAllowed;
        this.acceptAllowed = actions.actions.acceptAllowed;
        this.declineAllowed = actions.actions.declineAllowed;
        this.markAsCompletedAllowed = actions.actions.markAsCompletedAllowed;
    }
}
