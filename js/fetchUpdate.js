const editar = (id) => {
	let url = "../../controller/controller.php?op=editar";
	var data = new FormData();
    data.append('id',id);	
	fetch(url, {
		method: "post",
		body: data,
	})
		.then((response) => response.text())
		.then((text) => {
			console.log(text);
		});
};
