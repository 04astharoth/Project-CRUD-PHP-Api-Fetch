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
			console.log("Success", response);
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
			let ModalUpdateform = document.createElement("form");
			ModalUpdateform.setAttribute("id", "dataUpdate");
			ModalUpdateform.innerHTML = `
				<div class="row gy-3 justify-content-center">
					<div class="col-9">
						<input type="text" class="form-control" value="${nombres}" name="nombresUdt">
					</div>
					<div class="col-9">
						<input type="text" class="form-control" value="${apellidos}" name="apellidosUdt">
					</div>
					<div class="col-9">
						<select name="generoUdt">
							<option value="${m}">Masculino</option>
							<option value="${f}">Femenino</option>
						</select>
					</div>
					<div class="col-md-12">
						<input type="text" class="form-control" value="${id_persona}" hidden="true" name="idUdt">
					</div>
				</div>`;

			swal({
				title: "Actualizar Persona",
				content: {
					element: ModalUpdateform,
					attributes: { id: "formUdt" },
				},
			});
		})
		.catch((error) => console.log("error", error));
};
