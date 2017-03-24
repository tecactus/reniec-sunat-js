import HttpClient from './../common/HttpClient';

export default class Reniec {
	constructor (token) {
    this.options = {
      method: 'POST',
      url: 'api/reniec/dni',
      headers: {
        'Accept': 'application/json;charset=utf-8',
        'Content-Type': 'application/json',
        'Authorization': 'Bearer ' + token
      },
      params: {
        dni: null
      }
    }
	}
  getDni (dni, callback, error) {
    if (this.validate(dni)) {
      this.options.params.dni = dni;
      var http = new HttpClient(this.options);
      return http.send();
    } else {
      console.error("debe de especificar un número de DNI válido.");
    }
  }
  validate (dni) {
    if (dni) {
      return !isNaN(parseFloat(dni)) && isFinite(dni) && dni.toString().length == 8;
    }
    return false;
  }
}