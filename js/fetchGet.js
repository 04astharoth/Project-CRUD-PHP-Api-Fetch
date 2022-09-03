fetch("../../controller/controller.php?op=listar")
	.then((response) => response.json())
	//.then(text => console.log(text))
	.then((data) => {
			dibujarTabla(data);
	})
	.catch((err) => console.log(`error is: ${err}`));
