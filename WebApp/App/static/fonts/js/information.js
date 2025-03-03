document.getElementById('informationForm').addEventListener('submit', async (event) => {
    event.preventDefault(); // Previene el comportamiento predeterminado del formulario

    const formData = new FormData(event.target);
    const data = Object.fromEntries(formData.entries()); // Convierte FormData a JSON

    try {
        const response = await fetch('/auth/api/information', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(data), // Envía los datos como JSON
        });

        const result = await response.json(); // Procesa la respuesta como JSON

        if (response.ok) {
            alert(result.message || 'Información registrada exitosamente.');
            window.location.href = '/auth/direction'; // Redirige al login tras registro exitoso
        } else {
            alert(result.message || 'Error al registrar la información.');
        }
    } catch (error) {
        console.error('Error:', error);
        alert('Ocurrió un error en la solicitud.');
    }
});
