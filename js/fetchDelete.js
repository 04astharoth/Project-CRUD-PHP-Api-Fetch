const eliminar = (id) => {
	let url = "../../controller/controller.php?op=eliminar";
	var data = new FormData();
	data.append("id", id);

	fetch(url, {
		method: "post",
		body: data,
	})
		.then((data) => data.text())
		.then((text) => {
			console.log(text);
		});
};
