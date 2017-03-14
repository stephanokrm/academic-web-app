import {Injectable} from '@angular/core';

@Injectable()
export class TranslateService {

    private INVALID_CREDENTIALS: string = 'Credenciais Inválidas';
    private INVALID_CREDENTIALS_MESSAGE: string = 'As credenciais do usuário estavam incorretas.';

    constructor() {
    }

    translate(message) {
        switch (message) {
            case 'invalid_credentials':
                return this.INVALID_CREDENTIALS;
            case 'The user credentials were incorrect.':
                return this.INVALID_CREDENTIALS_MESSAGE;
        }
    }

}
