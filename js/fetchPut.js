const formdata = document.querySelector("#formdata");
formdata.addEventListener("submit", (e) => {
	e.preventDefault();
	const datos = new FormData(document.getElementById("formdata"));
	//const obj = Object.fromEntries(datos);
	let url = "../../controller/controller.php?op=guardar";
	fetch(url, {
		method: "post",
		body: datos,
	})
		.then((data) => data.json())
		.then((data) => {
			//console.log(`Success: ${JSON.stringify(data)}`);
			dibujarTabla(data);
			formdata.reset();
			swal.fire({
				title: "¡Registro Exitoso!",
				icon: "success",
			});
		})
		.catch((error) => console.log(`error: ${error}`));
});
