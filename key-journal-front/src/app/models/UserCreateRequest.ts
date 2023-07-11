export class UserCreateRequest {

    acckId: number;
    userPIB: string;
    userResponsiblePIB: string;
    dateFrom: Date;
    dateTo: Date;
    identityZNOK: string;

    
    constructor(acckId: number, userPIB: string,
        userResponsiblePIB: string, dateFrom: Date, dateTo: Date, identityZNOK: string) {
        this.acckId = acckId;
        this.userPIB = userPIB;
        this.userResponsiblePIB = userResponsiblePIB;
        this.dateFrom = dateFrom;
        this.dateTo = dateTo;
        this.identityZNOK = identityZNOK;
    }
}