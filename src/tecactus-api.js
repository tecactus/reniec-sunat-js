import Reniec from './api/reniec';
import Sunat from './api/sunat';

export default class TecactusApi {
	constructor (token) {
		this.token = token;
		this.Reniec = new Reniec(this.token);
		this.Sunat = new Sunat(this.token);
	}
}