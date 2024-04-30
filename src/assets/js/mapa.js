function cargarMapa() {
	var mapContainer = document.getElementById("map");
	var width = window.innerWidth; // Ancho de la ventana

	// URL del mapa a cargar
	var mapaURL =
		width <= 600
			? "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3205.354783249824!2d-4.632524326443683!3d36.54555764827135!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd72e23ee9e1dd6d%3A0x79acdd9fc024eb95!2sComplejo%20Polideportivo%20Municipal%20Elola!5e0!3m2!1ses!2ses!4v1708000287468!5m2!1ses!2ses"
			: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3205.354783249824!2d-4.632524326443683!3d36.54555764827135!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd72e23ee9e1dd6d%3A0x79acdd9fc024eb95!2sComplejo%20Polideportivo%20Municipal%20Elola!5e0!3m2!1ses!2ses!4v1708000287468!5m2!1ses!2ses";

	// Crea el iframe y establece sus atributos
	var iframe = document.createElement("iframe");
	iframe.setAttribute("src", mapaURL);
	iframe.setAttribute("width", width <= 600 ? "400" : "600");
	iframe.setAttribute("height", width <= 600 ? "300" : "450");
	iframe.setAttribute("style", "border:0;");
	iframe.setAttribute("allowfullscreen", "");
	iframe.setAttribute("loading", "lazy");
	iframe.setAttribute("referrerpolicy", "no-referrer-when-downgrade");

	// Elimina cualquier contenido previo del contenedor y añade el iframe
	mapContainer.innerHTML = "";
	mapContainer.appendChild(iframe);
}

// Llama a la función cargarMapa() cuando la página se carga o se redimensiona
window.onload = cargarMapa;
window.onresize = cargarMapa;
