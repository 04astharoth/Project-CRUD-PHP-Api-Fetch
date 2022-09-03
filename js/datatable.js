const dibujarTabla = (data) => {
	let tbody = document.querySelector("#data");
	tbody.innerHTML = "";
	if (data.length > 0) {
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
	} else {
		tbody.innerHTML += `
            <tr>
            <th class="text-center" colspan="5" >No hay Registros en la Base de datos.${data}</th>
            </td>
            </tr>
            `;
	}
};
