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
		<form action="">
			<div class="row">
				<div class="col-md-3 ">
					<input type="text" name="nombres" id="nombres" class="form-control" placeholder="Nombres">
				</div>
				<div class="col-md-3">
					<input type="text" name="apellidos" id="apellidos" class="form-control" placeholder="Apellidos">
				</div>
				<div class="d-grid gap-2 col-3 mx-auto">
					<select name="genero" id="genero">
						<option value="">Seleccione Genero</option>
						<option value="Masculino">Masculino</option>
						<option value="Femenino">Femenino</option>
					</select>
				</div>
				<div class="d-grid gap-2 col-3 mx-auto">
					<button class="btn btn btn-primary" type="submit">Guardar</button>
				</div>
			</div>
		</form>
	</div>
	<div class="container mt-4">
		<table class="table">
			<thead>
				<tr>
					<th scope="col">#</th>
					<th scope="col">Nombres</th>
					<th scope="col">Apellidos</th>
					<th scope="col">Genero</th>
					<th scope="col">Acciones</th>
				</tr>
			</thead>
			<tbody>
				<tr>
					<th scope="row">1</th>
					<td>Mark</td>
					<td>Otto</td>
					<td>@mdo</td>
					<td>
						<button type="button" class="btn btn-success">
							<i class="bi bi-arrow-repeat"></i>
						</button>
						<button type="button" class="btn btn-danger">
							<i class="bi bi-trash"></i>
						</button>
					</td>
				</tr>
			</tbody>
		</table>
	</div>
	<script src="https://cdn.jsdelivr.net/npm/bootstrap@5.2.0/dist/js/bootstrap.bundle.min.js" integrity="sha384-A3rJD856KowSb7dwlZdYEkO39Gagi7vIsF0jrRAoQmDKKtQBHUuLZ9AsSv4jD4Xa" crossorigin="anonymous"></script>
</body>

</html>