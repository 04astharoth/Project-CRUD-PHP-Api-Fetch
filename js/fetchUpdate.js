const editar = (id) => {
	let url = "../../controller/controller.php?op=editar";
	let data = new FormData();
	data.append("id", id);
	let id_persona, nombres, apellidos, genero, m, f;
	fetch(url, {
		method: "post",
		body: data,
	})
		.then((response) => response.json())
		.then((response) => {
			console.log("Get reg", response);
			for (const reg of response) {
				id_persona = reg.id_persona;
				nombres = reg.nombres;
				apellidos = reg.apellidos;
				genero = reg.genero;
				if (genero == "Masculino") {
					m = 'value="Masculino" selected';
					f = 'value="Femenino"';
				} else if (genero == "Femenino") {
					m = 'value="Masculino"';
					f = 'value="Femenino" selected';
				}
			}
			let ModalUpdateform = `
			<form id="UpdateForm" class="g-3">
				<input type="text" class="form-control mb-3" value="${nombres}" name="nombresUdt">
				<input type="text" class="form-control mb-3" value="${apellidos}" name="apellidosUdt">
				<select name="generoUdt" class="form-control mb-3">
					<option ${m}>Masculino</option>
					<option ${f}>Femenino</option>
				</select>
				<input type="text" class="form-control" value="${id_persona}" hidden="true" name="idUdt">
			</form>
				`;

			Swal.fire({
				title: "Actualizar Persona",
				html: ModalUpdateform,
				showDenyButton: true,
				confirmButtonText: "Aceptar",
				denyButtonText: "Cancelar",
				confirmButtonColor: "#3085d6",
				showLoaderOnConfirm: true,
				preConfirm: () => {
					return fetch(`../../controller/controller.php?op=update`, {
						method: "post",
						body: new FormData(document.getElementById("UpdateForm")),
					})
						.then((response) => {
							if (!response.ok) {
								throw new Error(response.statusText);
							}
							return response.json();
						})
						.catch((error) => {
							Swal.showValidationMessage(`Error en Solicitud: ${error}`);
						});
				},
			}).then((result) => {
				if (result.isConfirmed) {
					console.log("Updated reg:", result);
					dibujarTabla(result.value);
					Swal.fire("Exito", "Registro actualizado con exito", "success");
				} else if (result.isDenied) {
					Swal.fire("Los Cambios no fueron guardados", "", "info");
				}
			});
		})
		.catch((error) => console.log("error", error));
};
