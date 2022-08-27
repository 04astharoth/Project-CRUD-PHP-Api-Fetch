let mensajes = document.querySelector("#mensajes");
const errorAlert = (alerta) => {
	mensajes.innerHTML = `
	<div class="row justify-content-md-center">
		<div class="col">
			<div class="alert alert-danger mb-0" role="alert">
				<h4 class="alert-heading">Error!</h4>
				<P class="mb-0">${alerta}</P>
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
	let sinErrores = true;

	if (nombres == "") {
		alerta += '*Debe rellenar el campo "Nombres"!<br>';
		errorAlert(alerta);
		sinErrores = false;
	}
	if (apellidos == "") {
		alerta += '*Debe rellenar el campo "Apellidos"!<br>';
		errorAlert(alerta);
		sinErrores = false;
	}
	if (genero == "") {
		alerta += '*Debe rellenar el campo "Genero"!';
		errorAlert(alerta);
		sinErrores = false;
	}
	return sinErrores;
};
