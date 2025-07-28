<script>
  // Animation d'entrée (après chargement)
  document.addEventListener("DOMContentLoaded", () => {
    document.body.classList.add("page-visible");
  });

  // Animation de sortie quand on clique sur un lien
  document.querySelectorAll("a.link-transition").forEach(link => {
    link.addEventListener("click", function(e) {
      e.preventDefault();
      const url = this.href;

      // Lance l'animation de sortie
      document.body.classList.remove("page-visible");
      document.body.classList.add("page-exit");

      // Après 500ms, on change de page
      setTimeout(() => {
        window.location.href = url;
      }, 500);
    });
  });
</script>