const eliminar = (id) => {
	let url = "../../controller/controller.php?op=eliminar";
	var data = new FormData();
	data.append("id", id);
	Swal.fire({
		title: "¿Esta seguro de eliminar esta persona?",
		text: "Este cambio no podra ser revertido!",
		icon: "warning",
		showDenyButton: true,
		confirmButtonText: "Eliminar",
		confirmButtonColor: "#d33",
		denyButtonText: "Cancelar",
		denyButtonColor: "#aaa",
		showLoaderOnConfirm: true,
		preConfirm: () => {
			return (
				fetch(url, {
					method: "post",
					body: data,
				})
					//.then((response) => response.json())
					.then((response) => {
						if (!response.ok) {
							throw new Error(response.statusText);
						}
						return response.json();
					})
					.catch((error) => {
						Swal.showValidationMessage(`Error en Solicitud: ${error}`);
					})
			);
		},
	}).then((result) => {
		if (result.isConfirmed) {
			console.log("Delete reg:", result);
			dibujarTabla(result.value);
			Swal.fire("Registro eliminado con exito", "", "error");
		} else if (result.isDenied) {
			Swal.fire("Los Cambios no fueron guardados", "", "info");
		}
	});
};
