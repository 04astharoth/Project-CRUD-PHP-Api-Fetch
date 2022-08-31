fetch("../../controller/controller.php?op=listar")
	.then((response) => response.json())
	//.then(text => console.log(text))
	.then((data) => {
		//console.log("Success", data);
		if (data.length > 0) {
			dibujarTabla(data);
		} else {
			let tbody = document.querySelector("#data");
			tbody.innerHTML += `
            <tr>
            <th class="text-center" colspan="5" >No hay Registros en la Base de datos.</th>
            </td>
            </tr>
            `;
		}
	})
	.catch((err) => console.log(`error is: ${err}`));
