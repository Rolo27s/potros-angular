document.addEventListener("DOMContentLoaded", function () {
	const footerContainer11 = document.querySelector(".footer-container-1-CLUB");
	const footerContainer12 = document.querySelector(".footer-container-1-FEFA");
	const footerContainer13 = document.querySelector(".footer-container-1-MAS");
	const footerContainer2 = document.querySelector(".footer-container-2");

	// Event listener para el primer enlace
	footerContainer11.addEventListener("click", function (e) {
		e.preventDefault();

		footerContainer11.style.borderBottom = "3px solid white";
		footerContainer12.style.borderBottom = "0px solid white";
		footerContainer13.style.borderBottom = "0px solid white";

		// Vacío el contenido
		footerContainer2.innerHTML = "";

		// Cambiar los estilos del contenedor
		footerContainer2.style.width = "100%";
		footerContainer2.style.display = "flex";

		// row o column en funcion del tamaño de la ventana
		function handleFlexDirection() {
			if (window.innerWidth < 1115) {
				footerContainer2.style.flexDirection = "column";
			} else {
				footerContainer2.style.flexDirection = "row";
			}
		}
		handleFlexDirection();

		footerContainer2.style.listStyle = "none";
		footerContainer2.style.justifyContent = "space-evenly";
		footerContainer2.style.backgroundColor = "#222222";

		// Recargo el contenido
		footerContainer2.innerHTML = `
			<li><a href="assets/pages/equipo.html">EQUIPO</a></li>
			<li><a href="assets/pages/noticias.html">NOTICIAS</a></li>
			<li><a href="assets/pages/videos.html">VIDEOS</a></li>
			<li><a href="assets/pages/fotos.html">FOTOS</a></li>
			<li><a href="assets/pages/campo.html">POLIDEPORTIVO</a></li>
			<li><a href="assets/pages/calendario.html">CALENDARIO</a></li>
			<li><a href="assets/pages/comunidad.html">COMUNIDAD</a></li>
			<li><a href="assets/pages/ver.html">DIA DE PARTIDO</a></li>
			<li><a href="assets/pages/entradas.html">ENTRADAS</a></li>
		`;
	});

	footerContainer12.addEventListener("click", function (e) {
		e.preventDefault();

		footerContainer11.style.borderBottom = "0px solid white";
		footerContainer12.style.borderBottom = "3px solid white";
		footerContainer13.style.borderBottom = "0px solid white";

		// Vacío el contenido
		footerContainer2.innerHTML = "";

		// Cambiar los estilos del contenedor
		footerContainer2.style.display = "grid";
		footerContainer2.style.gridTemplateColumns = "repeat(4, 1fr)";
		footerContainer2.style.gridTemplateRows = "repeat(3, 1fr)";
		footerContainer2.style.justifyItems = "center";
		footerContainer2.style.alignItems = "center";

		// Recargo el contenido
		footerContainer2.innerHTML = `
		<a
		title="Blue Devils"
		target="_blank"
		href="https://aljarafebluedevil.wixsite.com/pweb">
		<img src="assets/assets/teams/bluedevils.png" alt="bluedevils" />
		</a>
		<a
			title="Cordoba Bulls"
			target="_blank"
			href="http://www.cordobabulls.com/">
			<img src="assets/assets/teams/cordobabulls.png" alt="cordobabulls" />
		</a>
		<a
			title="Corsarios"
			target="_blank"
			href="https://www.facebook.com/malagacorsairs/?locale=es_ES">
			<img src="assets/assets/teams/corsarios.png" alt="corsarios" />
		</a>
		<a
			title="Jerez Jaguars"
			target="_blank"
			href="https://jerezjaguars.com/">
			<img src="assets/assets/teams/jerezjaguars.png" alt="Jerez Jaguars" />
		</a>
		<a
			title="Granada Lions"
			target="_blank"
			href="https://www.granadalions.es/">
			<img
				src="assets/assets/teams/legendsoflionsofficial.png"
				alt="Granada Lions" />
		</a>
		<a
			title="Montilla Circus"
			target="_blank"
			href="https://www.fefa.es/montilla-circus/">
			<img src="assets/assets/teams/montillacircus.png" alt="Montilla Circus" />
		</a>
		<a
			title="Outlaw"
			target="_blank"
			href="https://www.instagram.com/outlawsflag/?hl=es">
			<img src="assets/assets/teams/outlawflag.png" alt="Outlaw" />
		</a>
		<a
			title="Ohoenixfootballgrx"
			target="_blank"
			href="https://www.facebook.com/granadafootballcfa/">
			<img
				src="assets/assets/teams/phoenixfootballgrx.png"
				alt="Phoenixfootballgrx" />
		</a>
		<a title="pionerslh" target="_blank" href="https://www.pionerslh.com/">
			<img src="assets/assets/teams/pionerslh.png" alt="pionerslh" />
		</a>
		<a
			title="Fuengirola Potros"
			target="_blank"
			href="https://www.fuengirolapotros.com/">
			<img src="assets/assets/teams/potros.png" alt="Fuengirola Potros" />
		</a>
		<a
			title="Valkirias"
			target="_blank"
			href="https://www.facebook.com/valkiriasfootball/?show_switched_toast=0&show_invite_to_follow=0&show_switched_tooltip=0&show_podcast_settings=0&show_community_review_changes=0&show_community_rollback=0&show_follower_visibility_disclosure=0">
			<img
				src="assets/assets/teams/valkiriasfootball.png"
				alt="Valkirias" />
		</a>
		`;
	});

	footerContainer13.addEventListener("click", function (e) {
		e.preventDefault();

		footerContainer11.style.borderBottom = "0px solid white";
		footerContainer12.style.borderBottom = "0px solid white";
		footerContainer13.style.borderBottom = "3px solid white";

		// Vacío el contenido
		footerContainer2.innerHTML = "";

		// Cambiar los estilos del contenedor
		footerContainer2.style.width = "100%";
		footerContainer2.style.display = "flex";
		footerContainer2.style.flexDirection = "column";
		footerContainer2.style.alignItems = "center";
		footerContainer2.style.backgroundColor = "#222222";

		// Recargo el contenido
		footerContainer2.innerHTML = `
			<li><a href="https://www.fefa.es/">FEFA</a></li>
			<li><a href="https://www.fefa.es/lnfa-serie-a/">FEFA SERIE A</a></li>
			<li><a href="https://www.fefa.es/lnfa-serie-b/">FEFA SERIE B</a></li>
			<li><a href="https://www.fefa.es/team-spain/">SELECCIÓN ESPAÑOLA</a></li>
		`;
	});
});
