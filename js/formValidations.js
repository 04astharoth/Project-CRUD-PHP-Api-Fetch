let mensajes = document.querySelector("#mensajes");
const errorAlert = (alerta) => {
	mensajes.innerHTML = `
	<div class="row">
	<div class="col-md-5 offset-md-3">
	<div class="alert alert-danger" role="alert">
	<h4 class="alert-heading">Error!</h4>
	<P>${alerta}</P>
	</div>
	</div>
	</div>
	`;
};

const validate = (formFields) => {
	let nombres = formFields.get("nombres").trim();
	let apellidos = formFields.get("apellidos").trim();
	let genero = formFields.get("genero");
	let alerta = "";
	mensajes.innerHTML = "";
	let sinErrores = true

	if (nombres == "") {
		alerta += 'Debe rellenar el campo "Nombres"!';
		errorAlert(alerta);
		sinErrores = false;
	}
	if (apellidos == "") {
		alerta += '<br>*Debe rellenar el campo "Apellidos"!';
		errorAlert(alerta);
        sinErrores = false;
	}
	if (genero == "") {
		alerta += '<br>*Debe rellenar el campo "Genero"!';
		errorAlert(alerta);
		sinErrores = false;
	}
	return sinErrores;
};
