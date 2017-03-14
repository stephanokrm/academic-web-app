import {Env} from '../app.env';

export class User {
    private name: string;
    public email: string;
    public username: string;
    private password: string;
    private client_secret: string = Env.CLIENT_SECRET;
    private client_id: number = Env.CLIENT_ID;
    private grant_type: string = Env.GRANT_TYPE;
}
