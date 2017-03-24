# RENIEC-SUNAT-JS
   
## Instalación

### Tecactus CDN

Referencia el archivo

```html
<!-- Última versión compilada y minificada -->
<script src="https://tecactus-4b42.kxcdn.com/reniec-sunat-js.min.js"></script>
```

### Instalar con Bower

```bash
bower install reniec-sunat-js
```

### Instalar con npm

```bash
npm install reniec-sunat-js
```

## Uso

### Para consultar DNI

```html
<!-- Última versión compilada y minificada -->
<script src="https://tecactus-4b42.kxcdn.com/reniec-sunat-js.min.js"></script>

<!-- Ejemplo -->
<script>
	var tecactusApi = new TecactusApi("tu-token-de-acceso-personal")
	
	tecactusApi.Reniec.getDni("41235678")
		.then(function (response) {
			console.log("consulta correcta!")
			console.log(response.data)
		})
		.catch(function (response) {
			console.log("algo ocurrió")
			console.log("código de error: " + response.code)
			console.log("mensaje de respuesta: " + response.status)
			console.log(response.data)
		})
</script>
```

### Para consultar RUC

```html
<!-- Última versión compilada y minificada -->
<script src="https://tecactus-4b42.kxcdn.com/reniec-sunat-js.min.js"></script>

<!-- Ejemplo -->
<script>
	var tecactusApi = new TecactusApi("tu-token-de-acceso-personal")
	
	// consulta Sunat usando número de RUC
	tecactusApi.Sunat.getByRuc("20123456789")
		.then(function (response) {
			console.log("consulta correcta!")
			console.log(response.data)
		})
		.catch(function (response) {
			console.log("algo ocurrió")
			console.log("código de error: " + response.code)
			console.log("mensaje de respuesta: " + response.status)
			console.log(response.data)
		})
	
	// consulta Sunat usando número de DNI
	tecactusApi.Sunat.getByDni("41235678")
		.then(function (response) {
			console.log("consulta correcta!")
			console.log(response.data)
		})
		.catch(function (response) {
			console.log("algo ocurrió")
			console.log("código de error: " + response.code)
			console.log("mensaje de respuesta: " + response.status)
			console.log(response.data)
		})
</script>
```

## Token de Acceso Personal

Para crear tokens de acceso personal debes de iniciar sesión en Tecactus:
[https://tecactus.com/auth/login](https://tecactus.com/auth/login)

Si no estas registrado aún, puedes hacerlo en:
[https://tecactus.com/auth/register](https://tecactus.com/auth/register)

Debes de activar tu cuenta si aún no lo has hecho.

Luego ver el panel de gestión de Tokens de acceso en:
[https://tecactus.com/developers/configuracion/tokens](https://tecactus.com/developers/configuracion/tokens)

