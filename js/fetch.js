fetch("../../controller/controller.php")
	.then((response) => response.json())
	//.then(text => console.log(text))
	.then((response) =>
		response.map((data) => {
			//console.log("Success", data);
			let tbody = document.querySelector("#data");
			let row = document.createElement("tr");
			// obteniendo data de la response
			for (const [key, value] of Object.entries(data)) {
				let elemento = key == "id_persona" ? "th" : "td";
				let td = document.createElement(elemento);
				//element.innerHTML = `${key}: ${value}`
				td.innerHTML = `${value}`;
				row.append(td);
			}
			// adicionando los botones update y delete
			let colAcciones = document.createElement("td");
			colAcciones.innerHTML =
				'<button type="button" class="btn btn-success"><i class="bi bi-arrow-repeat"></i></button><button type="button" class="btn btn-danger"><i class="bi bi-trash"></i></button>';
			row.appendChild(colAcciones);
			tbody.append(row);
			//   let resultDiv = document.querySelector("#result")
			//   let element = document.createElement('p');
			//   element.innerHTML = JSON.stringify(data)
			//   resultDiv.append(element);
		})
	)
	.catch((err) => console.log(`error is: ${err}`));
