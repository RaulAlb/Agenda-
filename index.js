function guardado()
{
	if(localStorage.getItem('activo'))
	{
		document.getElementById('notepad').value = localStorage.getItem('notepad');
	}
	else
	{
		localStorage.setItem('activo','si');
		localStorage.setItem('notepad','')
	}
}

window.addEventListener('load', guardado, true)

// Botones
function guardar(id,texto)
{
	localStorage.setItem(texto, id);
}

function saveAlert()
{
	window.alert('Nota guardada');
}