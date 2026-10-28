// MundoMarino - Controlador Interactivo (HTML, CSS y React)
(function () {
  "use strict";

  // Asegurar que los datos estén disponibles
  const data = window.OCEAN_DATA;
  if (!data) {
    console.error("Los datos de OCEAN_DATA no se encontraron.");
    return;
  }

  // Estado reactivo de la aplicación
  let state = {
    selectedCategory: "all",
    searchQuery: "",
    onlyEndangered: false,
    selectedAnimal: null,
    curiosityIndex: 0,
    mobileMenuOpen: false
  };

  const curiosities = [
    "La fosa de las Marianas alcanza los 11.034 metros de profundidad; si el Monte Everest se sumergiera allí, su cima aún quedaría cubierta por más de 2 kilómetros de agua.",
    "El corazón de una ballena azul es tan colosal que una persona podría nadar a través de sus arterias principales.",
    "El pulpo tiene tres corazones: dos bombean sangre a las branquias y el tercero al resto del cuerpo; además, su sangre es azul porque usa hemocianina rica en cobre.",
    "Las corrientes oceánicas como la Corriente del Golfo transportan más calor que todas las calderas y estufas de la humanidad juntas, manteniendo templado el clima de Europa.",
    "Más del 50% del oxígeno que respiramos en la Tierra no proviene de los bosques terrestres, sino del fitoplancton que flota en la superficie marina.",
    "Los caballitos de mar macho son los que quedan embarazados y dan a luz a cientos de crías a través de una bolsa incubadora especializada."
  ];

  // Elementos del DOM
  const animalsGrid = document.getElementById("animalsGrid");
  const endangeredGrid = document.getElementById("endangeredGrid");
  const conservationGrid = document.getElementById("conservationGrid");
  const noResults = document.getElementById("noResults");
  const searchInput = document.getElementById("searchInput");
  const clearSearchBtn = document.getElementById("clearSearchBtn");
  const endangeredToggle = document.getElementById("endangeredToggle");
  const categoryTabs = document.getElementById("categoryTabs");
  const speciesCounter = document.getElementById("speciesCounter");
  const resetFiltersBtn = document.getElementById("resetFiltersBtn");
  const resetFiltersEmptyBtn = document.getElementById("resetFiltersEmptyBtn");
  const factCounter = document.getElementById("factCounter");
  const factText = document.getElementById("factText");
  const nextFactBtn = document.getElementById("nextFactBtn");
  const mobileMenuBtn = document.getElementById("mobileMenuBtn");
  const mobileMenu = document.getElementById("mobileMenu");

  // Elementos del Modal
  const animalModal = document.getElementById("animalModal");
  const modalImg = document.getElementById("modalImg");
  const modalCategory = document.getElementById("modalCategory");
  const modalName = document.getElementById("modalName");
  const modalSci = document.getElementById("modalSci");
  const modalDesc = document.getElementById("modalDesc");
  const modalHabitat = document.getElementById("modalHabitat");
  const modalDiet = document.getElementById("modalDiet");
  const modalSize = document.getElementById("modalSize");
  const modalStatus = document.getElementById("modalStatus");
  const modalCuriosity = document.getElementById("modalCuriosity");
  const modalCloseBtn = document.getElementById("modalCloseBtn");
  const modalBottomCloseBtn = document.getElementById("modalBottomCloseBtn");

  // Renderizar tarjetas de animales con filtrado
  function renderAnimals() {
    if (!animalsGrid) return;

    const filtered = data.animals.filter(animal => {
      const matchesCat = state.selectedCategory === "all" || animal.category === state.selectedCategory;
      const q = state.searchQuery.toLowerCase().trim();
      const matchesSearch = !q ||
        animal.name.toLowerCase().includes(q) ||
        animal.scientificName.toLowerCase().includes(q) ||
        animal.habitat.toLowerCase().includes(q) ||
        animal.diet.toLowerCase().includes(q);
      const matchesEndangered = !state.onlyEndangered || animal.isEndangered;
      return matchesCat && matchesSearch && matchesEndangered;
    });

    // Actualizar contador
    if (speciesCounter) {
      speciesCounter.textContent = filtered.length;
    }

    if (filtered.length === 0) {
      animalsGrid.innerHTML = "";
      if (noResults) noResults.classList.remove("hidden-custom");
      return;
    }

    if (noResults) noResults.classList.add("hidden-custom");

    animalsGrid.innerHTML = filtered.map(animal => {
      const isRed = animal.statusColor === "rose" || animal.statusColor === "red";
      const isAmber = animal.statusColor === "amber";
      const badgeClass = isRed
        ? "bg-rose-950/80 text-rose-300 border-rose-500/40"
        : isAmber
        ? "bg-amber-950/80 text-amber-300 border-amber-500/40"
        : "bg-emerald-950/80 text-emerald-300 border-emerald-500/40";

      return `
        <div class="glass-panel rounded-3xl overflow-hidden flex flex-col justify-between group hover:-translate-y-2 transition-all duration-300">
          <div class="relative h-56 overflow-hidden">
            <img
              src="${animal.image}"
              alt="${animal.name}"
              class="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 ease-out"
              loading="lazy"
            />
            <div class="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/20 to-transparent"></div>

            <div class="absolute top-4 left-4">
              <span class="px-3 py-1 rounded-full text-[11px] font-bold tracking-wide uppercase bg-slate-950/80 backdrop-blur-md border border-cyan-500/30 text-cyan-300 shadow">
                ${animal.category}
              </span>
            </div>

            <div class="absolute top-4 right-4">
              <span class="px-3 py-1 rounded-full text-[11px] font-bold tracking-wide uppercase backdrop-blur-md shadow border ${badgeClass}">
                ${animal.status}
              </span>
            </div>

            <div class="absolute bottom-3 left-4 right-4">
              <h3 class="font-heading font-extrabold text-2xl text-white leading-tight drop-shadow-md">
                ${animal.name}
              </h3>
              <p class="text-xs text-cyan-300 italic font-serif">
                ${animal.scientificName}
              </p>
            </div>
          </div>

          <div class="p-6 flex flex-col justify-between flex-grow">
            <div>
              <p class="text-slate-300 text-xs sm:text-sm line-clamp-3 leading-relaxed mb-4">
                ${animal.description}
              </p>

              <div class="space-y-2 text-xs text-slate-400 mb-5">
                <div class="flex items-start gap-2">
                  <i class="fa-solid fa-location-dot text-cyan-400 w-4 mt-0.5"></i>
                  <span class="line-clamp-1"><strong class="text-slate-200">Hábitat:</strong> ${animal.habitat}</span>
                </div>
                <div class="flex items-start gap-2">
                  <i class="fa-solid fa-utensils text-emerald-400 w-4 mt-0.5"></i>
                  <span class="line-clamp-1"><strong class="text-slate-200">Dieta:</strong> ${animal.diet}</span>
                </div>
                <div class="flex items-start gap-2">
                  <i class="fa-solid fa-ruler-combined text-teal-400 w-4 mt-0.5"></i>
                  <span><strong class="text-slate-200">Tamaño:</strong> ${animal.size}</span>
                </div>
              </div>
            </div>

            <button
              data-id="${animal.id}"
              class="open-modal-btn w-full py-2.5 rounded-xl bg-cyan-950/70 hover:bg-cyan-600 text-cyan-300 hover:text-white border border-cyan-500/30 hover:border-transparent text-xs font-bold uppercase tracking-wider transition-all duration-200 flex items-center justify-center gap-2 group-hover:shadow-lg group-hover:shadow-cyan-500/20"
            >
              <i class="fa-solid fa-circle-info"></i>
              Ver Ficha Biológica Completa
            </button>
          </div>
        </div>
      `;
    }).join("");

    // Conectar botones de apertura modal
    animalsGrid.querySelectorAll(".open-modal-btn").forEach(btn => {
      btn.addEventListener("click", () => {
        const id = btn.getAttribute("data-id");
        openModal(id);
      });
    });
  }

  // Renderizar especies en peligro
  function renderEndangered() {
    if (!endangeredGrid) return;
    endangeredGrid.innerHTML = data.endangeredSpecies.map(sp => `
      <div class="glass-panel rounded-3xl p-6 border-rose-900/40 hover:border-rose-500/50 flex flex-col justify-between group transition-all duration-300">
        <div>
          <div class="flex items-center justify-between gap-3 mb-3">
            <span class="px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider bg-rose-950/80 text-rose-300 border border-rose-500/30">
              ${sp.iucn}
            </span>
            <span class="text-xs text-rose-400/90 font-mono font-semibold">
              ${sp.remaining}
            </span>
          </div>

          <h3 class="font-heading font-extrabold text-2xl text-white mb-0.5 group-hover:text-rose-300 transition-colors">
            ${sp.name}
          </h3>
          <p class="text-xs text-slate-400 italic font-serif mb-4">
            ${sp.sci}
          </p>

          <div class="space-y-3 text-xs">
            <div class="p-3 rounded-xl bg-slate-900/70 border border-slate-800">
              <div class="text-rose-400 font-bold uppercase tracking-wider text-[10px] mb-1">
                Amenaza Principal:
              </div>
              <p class="text-slate-300 leading-snug">
                ${sp.threat}
              </p>
            </div>

            <div class="p-3 rounded-xl bg-emerald-950/40 border border-emerald-900/30">
              <div class="text-emerald-400 font-bold uppercase tracking-wider text-[10px] mb-1">
                Acción Inaplazable:
              </div>
              <p class="text-slate-300 leading-snug">
                ${sp.urgentAction}
              </p>
            </div>
          </div>
        </div>
      </div>
    `).join("");
  }

  // Renderizar consejos de conservación
  function renderConservation() {
    if (!conservationGrid) return;
    conservationGrid.innerHTML = data.conservationTips.map(tip => `
      <div class="glass-panel rounded-3xl p-6 flex flex-col justify-between hover:border-emerald-400/40 transition-all duration-300 group">
        <div>
          <div class="w-12 h-12 rounded-2xl bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 flex items-center justify-center text-xl mb-5 group-hover:scale-110 transition-transform">
            <i class="fa-solid ${tip.icon}"></i>
          </div>
          <h3 class="font-heading text-lg font-bold text-white mb-2">
            ${tip.title}
          </h3>
          <p class="text-slate-300 text-xs sm:text-sm leading-relaxed">
            ${tip.desc}
          </p>
        </div>
      </div>
    `).join("");
  }

  // Abrir Modal
  function openModal(animalId) {
    const animal = data.animals.find(a => a.id === animalId);
    if (!animal || !animalModal) return;

    modalImg.src = animal.image;
    modalImg.alt = animal.name;
    modalCategory.textContent = animal.category;
    modalName.textContent = animal.name;
    modalSci.textContent = animal.scientificName;
    modalDesc.textContent = animal.description;
    modalHabitat.textContent = animal.habitat;
    modalDiet.textContent = animal.diet;
    modalSize.textContent = animal.size;
    modalStatus.textContent = animal.status;
    modalStatus.className = `text-sm font-bold mt-0.5 ${animal.isEndangered ? "text-rose-400" : "text-emerald-400"}`;
    modalCuriosity.textContent = animal.curiosity;

    animalModal.classList.remove("hidden-custom");
    document.body.style.overflow = "hidden";
  }

  // Cerrar Modal
  function closeModal() {
    if (!animalModal) return;
    animalModal.classList.add("hidden-custom");
    document.body.style.overflow = "auto";
  }

  // Event Listeners
  if (modalCloseBtn) modalCloseBtn.addEventListener("click", closeModal);
  if (modalBottomCloseBtn) modalBottomCloseBtn.addEventListener("click", closeModal);
  if (animalModal) {
    animalModal.addEventListener("click", (e) => {
      if (e.target === animalModal) closeModal();
    });
  }

  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape") closeModal();
  });

  // Búsqueda
  if (searchInput) {
    searchInput.addEventListener("input", (e) => {
      state.searchQuery = e.target.value;
      if (clearSearchBtn) {
        if (state.searchQuery) {
          clearSearchBtn.classList.remove("hidden-custom");
        } else {
          clearSearchBtn.classList.add("hidden-custom");
        }
      }
      renderAnimals();
    });
  }

  if (clearSearchBtn) {
    clearSearchBtn.addEventListener("click", () => {
      searchInput.value = "";
      state.searchQuery = "";
      clearSearchBtn.classList.add("hidden-custom");
      renderAnimals();
    });
  }

  // Toggle Solo en Peligro
  if (endangeredToggle) {
    endangeredToggle.addEventListener("change", (e) => {
      state.onlyEndangered = e.target.checked;
      renderAnimals();
    });
  }

  // Filtros de categoría
  if (categoryTabs) {
    const catButtons = categoryTabs.querySelectorAll(".cat-btn");
    catButtons.forEach(btn => {
      btn.addEventListener("click", () => {
        state.selectedCategory = btn.getAttribute("data-cat");

        catButtons.forEach(b => {
          b.className = "cat-btn px-4 py-2 rounded-xl text-xs font-semibold transition-all bg-slate-900/80 text-slate-400 hover:text-white hover:bg-slate-800 border border-slate-800";
        });

        btn.className = "cat-btn px-4 py-2 rounded-xl text-xs font-semibold transition-all bg-gradient-to-r from-cyan-500 to-blue-600 text-white shadow-md shadow-cyan-500/30 scale-105";

        renderAnimals();
      });
    });
  }

  // Restablecer filtros
  function resetFilters() {
    state.selectedCategory = "all";
    state.searchQuery = "";
    state.onlyEndangered = false;

    if (searchInput) searchInput.value = "";
    if (clearSearchBtn) clearSearchBtn.classList.add("hidden-custom");
    if (endangeredToggle) endangeredToggle.checked = false;

    if (categoryTabs) {
      const catButtons = categoryTabs.querySelectorAll(".cat-btn");
      catButtons.forEach(b => {
        if (b.getAttribute("data-cat") === "all") {
          b.className = "cat-btn px-4 py-2 rounded-xl text-xs font-semibold transition-all bg-gradient-to-r from-cyan-500 to-blue-600 text-white shadow-md shadow-cyan-500/30 scale-105";
        } else {
          b.className = "cat-btn px-4 py-2 rounded-xl text-xs font-semibold transition-all bg-slate-900/80 text-slate-400 hover:text-white hover:bg-slate-800 border border-slate-800";
        }
      });
    }

    renderAnimals();
  }

  if (resetFiltersBtn) resetFiltersBtn.addEventListener("click", resetFilters);
  if (resetFiltersEmptyBtn) resetFiltersEmptyBtn.addEventListener("click", resetFilters);

  // Rotador de curiosidades
  if (nextFactBtn) {
    nextFactBtn.addEventListener("click", () => {
      state.curiosityIndex = (state.curiosityIndex + 1) % curiosities.length;
      if (factCounter) factCounter.textContent = `¿Sabías que...? (Dato Interactivo #${state.curiosityIndex + 1})`;
      if (factText) factText.textContent = `"${curiosities[state.curiosityIndex]}"`;
    });
  }

  // Menú móvil
  if (mobileMenuBtn && mobileMenu) {
    mobileMenuBtn.addEventListener("click", () => {
      state.mobileMenuOpen = !state.mobileMenuOpen;
      if (state.mobileMenuOpen) {
        mobileMenu.classList.remove("hidden-custom");
      } else {
        mobileMenu.classList.add("hidden-custom");
      }
    });

    mobileMenu.querySelectorAll(".mobile-nav-link").forEach(link => {
      link.addEventListener("click", () => {
        state.mobileMenuOpen = false;
        mobileMenu.classList.add("hidden-custom");
      });
    });
  }

  // Inicialización inmediata al cargar el DOM
  renderAnimals();
  renderEndangered();
  renderConservation();

  console.log("MundoMarino cargado con éxito. Sin errores CORS en protocolo file:///.");
})();
