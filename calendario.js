function agregarEvt(texto,dia)
	{
		localStorage.setItem(dia,texto) //Guardar
		document.getElementById('notificacion').innerHTML = "Evento guardado"
		document.getElementById('notificacion').style.top="0px"
		setTimeout( function ()
		{
			document.getElementById('notificacion').style.top="-40px"
		}, 1000)
	}

	function crearAgenda()
	{
		if (localStorage.getItem('creados'))
		{
			document.getElementById('L7').value=localStorage.getItem('L7')
			document.getElementById('L9').value = localStorage.getItem('L9')
			document.getElementById('L11').value = localStorage.getItem('L11')
			document.getElementById('L13').value = localStorage.getItem('L13')
			document.getElementById('L15').value = localStorage.getItem('L15')

			document.getElementById('M7').value = localStorage.getItem('M7')
			document.getElementById('M9').value = localStorage.getItem('M9')
			document.getElementById('M11').value = localStorage.getItem('M11')
			document.getElementById('M13').value = localStorage.getItem('M13')
			document.getElementById('M15').value = localStorage.getItem('M15')

			document.getElementById('Mi7').value = localStorage.getItem('Mi7')
			document.getElementById('Mi9').value = localStorage.getItem('Mi9')
			document.getElementById('Mi11').value = localStorage.getItem('Mi11')
			document.getElementById('Mi13').value = localStorage.getItem('Mi13')
			document.getElementById('Mi15').value = localStorage.getItem('Mi15')

			document.getElementById('J7').value = localStorage.getItem('J7')
			document.getElementById('J9').value = localStorage.getItem('J9')
			document.getElementById('J11').value = localStorage.getItem('J11')
			document.getElementById('J13').value = localStorage.getItem('J13')
			document.getElementById('J15').value = localStorage.getItem('J15')

		Vdocument.getElementById('V7').value = localStorage.getItem('V7')
			document.getElementById('V9').value = localStorage.getItem('V9')
			document.getElementById('V11').value = localStorage.getItem('V11')
			document.getElementById('V13').value = localStorage.getItem('V13')
			document.getElementById('V15').value = localStorage.getItem('V15')
		}
		else
		{

			localStorage.setItem('creados', 'si')

			localStorage.setItem('L7', '')
			localStorage.setItem('L9', '')
			localStorage.setItem('L11', '')
			localStorage.setItem('L13', '')
			localStorage.setItem('L15', '')

			localStorage.setItem('M7', '')
			localStorage.setItem('M9', '')
			localStorage.setItem('M11', '')
			localStorage.setItem('M13', '')
			localStorage.setItem('M15', '')

			localStorage.setItem('Mi7', '')
			localStorage.setItem('Mi9', '')
			localStorage.setItem('Mi11', '')
			localStorage.setItem('Mi13', '')
			localStorage.setItem('Mi15', '')

			localStorage.setItem('J7', '')
			localStorage.setItem('J9', '')
			localStorage.setItem('J11', '')
			localStorage.setItem('J13', '')
			localStorage.setItem('J15', '')

			localStorage.setItem('V7', '')
			localStorage.setItem('V9', '')
			localStorage.setItem('V11', '')
			localStorage.setItem('V13', '')
			localStorage.setItem('V15', '')
		}
	}
	window.addEventListener('load', crearAgenda, true)