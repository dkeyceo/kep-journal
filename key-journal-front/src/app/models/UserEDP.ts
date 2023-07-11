export class UserEDP {

    id?: number;
    acckId: number;
    acckName?: string;
    acck: Map<number, string>;
    userPIB: string;
    userResponsiblePIB: string;
    dateFrom: Date;
    dateTo: Date;
    identityZNOK: string;

    
    constructor(id: number, acckId: number, acckName: string, userPIB: string,
        userResponsiblePIB: string, dateFrom: Date, dateTo: Date, identityZNOK: string, acck: Map<number, string>) {
        this.acckId = acckId;
        this.acckName = acckName;
        this.userPIB = userPIB;
        this.userResponsiblePIB = userResponsiblePIB;
        this.dateFrom = dateFrom;
        this.dateTo = dateTo;
        this.identityZNOK = identityZNOK;
        this.acck = acck;
    }
}