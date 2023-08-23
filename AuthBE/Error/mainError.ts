export enum HTTP {
    OK = 200,
    CREATED = 201,
    BAD_REQUEST = 404,
    BAD
}

interface iError {
    name: string;
    message: string;
    status: string;
    success: boolean;
}

export class mainError extends Error {
    public readonly name: string;
    public readonly message: string;
    public readonly status: string;
    public readonly success: boolean = true;

    constructor(args: iError) {
    super (args.message);

    Object.setPrototypeOf(this, new.target.prototype);

    this.name = args.name;
    this.message = args.message;
    this.status = args.status;

    if (this.success !== undefined) {
        this.success = args.success
    }

    Error.captureStackTrace(this);
    }
}



