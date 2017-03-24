import HttpClient from './../common/HttpClient';

export default class Sunat {
	constructor (token) {
    this.options = {
      method: 'POST',
      url: null,
      headers: {
        'Accept': 'application/json;charset=utf-8',
        'Content-Type': 'application/json',
        'Authorization': 'Bearer ' + token
      },
      params: {
        ruc: null,
        dni: null
      }
    }
	}
  getByRuc (ruc, callback, error) {
    if (this.validateRuc(ruc)) {
      this.options.url = 'api/sunat/query/ruc';
      this.options.params.ruc = ruc;
      var http = new HttpClient(this.options);
      return http.send();
    } else {
      console.error("debe de especificar un número de RUC válido.");
    }
  }
	getByDni (dni, callback, error) {
    if (this.validateDni(dni)) {
      this.options.url = 'api/sunat/query/dni';
      this.options.params.dni = dni;
      var http = new HttpClient(this.options);
      return http.send();
    } else {
      console.error("debe de especificar un número de DNI válido.");
    }
	}
  validateDni (dni) {
    if (dni) {
      return !isNaN(parseFloat(dni)) && isFinite(dni) && dni.toString().length == 8;
    }
    return false;
  }
  validateRuc (ruc) {
    if (ruc) {
      return !isNaN(parseFloat(ruc)) && isFinite(ruc) && ruc.toString().length == 11;
    }
    return false;
  }
}