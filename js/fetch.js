fetch("../../controller/controller.php?op=listar")
	.then((response) => response.json())
	//.then(text => console.log(text))
	.then((response) =>
		response.map((data) => {
			//console.log("Success", data);
			let tbody = document.querySelector("#data");
			//tbody.innerHTML="";
			let row = document.createElement("tr");
			// obteniendo data de la response
			for (const [key, value] of Object.entries(data)) {
				let elemento = key == "id_persona" ? "th" : "td";
				let td = document.createElement(elemento);
				//se adiciona el valor de la clave, del objeto, al td
				td.innerHTML = `${value}`;
				row.append(td);
			}
			// adicionando los botones update y delete
			let colAcciones = document.createElement("td");
			colAcciones.innerHTML =
				'<button type="button" class="btn btn-success"><i class="bi bi-arrow-repeat"></i></button><button type="button" class="btn btn-danger"><i class="bi bi-trash"></i></button>';
			row.appendChild(colAcciones);
			tbody.append(row);
		})
	)
	.catch((err) => console.log(`error is: ${err}`));
