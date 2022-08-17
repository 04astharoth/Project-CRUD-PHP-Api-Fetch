const formdata = document.querySelector("#formdata");
formdata.addEventListener("submit", (e) => {
	e.preventDefault();
	const datos = new FormData(formdata);
	//let nombres = datos.get("nombres");
	//let apellidos = datos.get("apellidos");
	//let genero = datos.get("genero");
	//const obj = { nombres: nombres, apellidos: apellidos, genero: genero };
	const obj = Object.fromEntries(datos.entries());
	console.log(obj);
	//console.log(datos);
	let url = "../../controller/controller.php?op=guardar";
	fetch(url, {
		method: "post",
		body: datos,
	})
		.then((data) => data.json())
		.then((data) => {
			console.log(`Success: ${data}`);
		})
		.catch((error) => console.log(`error: ${error}`));
});
