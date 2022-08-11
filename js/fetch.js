fetch("../../controller/controller.php")
	.then((response) => response.json())
	//.then(text => console.log(text))
	.then((response) =>
		response.map((data) => {
			console.log(data);
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
			tbody.append(row);
			//   let resultDiv = document.querySelector("#result")
			//   let element = document.createElement('p');
			//   element.innerHTML = JSON.stringify(data)
			//   resultDiv.append(element);
		})
	)
	.catch((err) => console.log(`error is: ${err}`));
