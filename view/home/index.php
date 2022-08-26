<!DOCTYPE html>
<html lang="en">

<head>
	<meta charset="UTF-8">
	<meta http-equiv="X-UA-Compatible" content="IE=edge">
	<meta name="viewport" content="width=device-width, initial-scale=1.0">
	<title>Document</title>
	<link href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.0/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-gH2yIJqKdNHPEq0n4Mqa/HGKIhSkIHeL5AyhkYV8i59U5AR6csBvApHHNl/vI1Bx" crossorigin="anonymous">
	<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.3.0/font/bootstrap-icons.css" />
</head>

<body>
	<div class="container mt-3">
		<form action="" id="formdata">
			<div class="row gy-3">
				<div class="col-md-3 ">
					<input type="text" name="nombres" id="nombres" class="form-control" placeholder="Nombres">
				</div>
				<div class="col-md-3">
					<input type="text" name="apellidos" id="apellidos" class="form-control" placeholder="Apellidos">
				</div>
				<div class="d-grid gap-2 col-md-3">
					<select name="genero" id="genero" class="form-control">
						<option value="">Seleccione Genero</option>
						<option value="Masculino">Masculino</option>
						<option value="Femenino">Femenino</option>
					</select>
				</div>
				<div class="d-grid gap-2 col-md-3">
					<button class="btn btn btn-primary" type="submit">Guardar</button>
				</div>
			</div>
	</div>
	<br>
	<div class="container" id="mensajes"></div>
	<br>
	<div class="container mt-4">
		<table class="table table-bordered">
			<thead>
				<tr>
					<th scope="col" class="text-center">#</th>
					<th scope="col" class="text-center">Nombres</th>
					<th scope="col" class="text-center">Apellidos</th>
					<th scope="col" class="text-center">Genero</th>
					<th scope="col" class="text-center">Acciones</th>
				</tr>
			</thead>
			<tbody id="data"></tbody>
		</table>
		</form>
	</div>
	<script src="https://cdn.jsdelivr.net/npm/bootstrap@5.2.0/dist/js/bootstrap.bundle.min.js" integrity="sha384-A3rJD856KowSb7dwlZdYEkO39Gagi7vIsF0jrRAoQmDKKtQBHUuLZ9AsSv4jD4Xa" crossorigin="anonymous"></script>
	<script src="//cdn.jsdelivr.net/npm/sweetalert2@11"></script>
	<script src="../../js/datatable.js"></script>
	<script src="../../js/fetchGet.js"></script>
	<script src="../../js/fetchPut.js"></script>
	<script src="../../js/fetchUpdate.js"></script>
	<script src="../../js/fetchDelete.js"></script>
	<script src="../../js/formValidations.js"></script>
</body>

</html>