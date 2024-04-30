function toggleMenu() {
      var existingMenu = document.querySelector(".dropdown-menu");
      
      if (existingMenu) {
        existingMenu.remove();
      } else {
        var menu = document.createElement("div");
        menu.classList.add("dropdown-menu");
        menu.id = "menu";
        menu.innerHTML = `
          <ul>
            <li><a href="#Top" class="drop-menu-option">Noticia</a></li>
            <li><a href="#Top" class="drop-menu-option">Video</a></li>
            <li><a href="#Top" class="drop-menu-option">Podcasts</a></li>
            <li><a href="#Top" class="drop-menu-option">Fotos</a></li>
            <li><a href="#Top" class="drop-menu-option">Calendario</a></li>
            <li><a href="#Top" class="drop-menu-option">Equipo</a></li>
            <li><a href="#Top" class="drop-menu-option">Campo de Juego</a></li>
            <li><a href="#Top" class="drop-menu-option">Comunidad</a></li>
            <li><a href="#Top" class="drop-menu-option">Predicciones</a></li>
            <li><a href="#Top" class="drop-menu-option">Ver</a></li>
            <li><a href="#Top" class="drop-menu-option">Socios</a></li>
          </ul>
        `;
          // Agregar evento de clic a cada elemento de la lista
          var dropMenuOptions = menu.querySelectorAll('.drop-menu-option');
          dropMenuOptions.forEach(function(option) {
            option.addEventListener('click', () => menu.remove());
          });
        document.body.appendChild(menu);
      }
    }
    