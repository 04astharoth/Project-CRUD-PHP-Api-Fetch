const dibujarTabla = (data) => {
	let tbody = document.querySelector("#data");
	tbody.innerHTML = "";
	for (let registro of data) {
		tbody.innerHTML += `
         <tr>
         <th class="text-center">${registro.id_persona}</th>
         <td class="text-center">${registro.nombres}</td>
         <td class="text-center">${registro.apellidos}</td>
         <td class="text-center">${registro.genero}</td>
         <td class="text-center">
         <button class="btn btn-primary btn-sm" onclick="editar(${registro.id_persona})">Editar</button>
         <button class="btn btn-danger btn-sm" onclick="eliminar(${registro.id_persona})">Eliminar</button>
         </td>
         </tr>
         `;
	}
};

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
			console.log(`Success: ${JSON.stringify(data)}`);
			dibujarTabla(data);
			formdata.reset();
		})
		.catch((error) => console.log(`error: ${error}`));
});
