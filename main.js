class Character {
    constructor(name, species, image) {
        this._name = name; // Propiedad privada
        this._species = species;
        this._image = image;
    }
  
   
    get name() {
        return this._name;
    }
  
    get species() {
        return this._species;
    }
  
    get image() {
        return this._image;
    }
  
    show(container) {
        
        const card = document.createElement("div");
        card.className = "card col-md-3 m-2"; 
  
        card.innerHTML = `
            <img src="${this.image}" class="card-img-top" alt="${this.name}">
            <div class="card-body">
                <h5 class="card-title">${this.name}</h5>
                <p class="card-text">Species: ${this.species}</p>
            </div>
        `;
  
        
        container.appendChild(card);
    }
  }
  
  
  async function api() {
    try {
        const response = await fetch("https://rickandmortyapi.com/api/character");
        const data = await response.json();
  
        const container = document.querySelector("#row"); 
  
        
        const caracteristicas = data.results.slice(0, 20).map(
            (item) => new Character(item.name, item.species, item.image)
        );
  
       
        caracteristicas.forEach((character) => character.show(container));
    } catch (error) {
        console.error("Error al cargar los personajes:", error);
    }
  }
  
  
  document.addEventListener("DOMContentLoaded", () => {
    api();
  });
  