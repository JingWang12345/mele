
function loadMele() {
    MeleService.getMele().then(mele => renderPage(mele))
}
loadMele();


function renderPage(data){
    const meleContainer = document.getElementById('accordionFlushExample')
    console.log(data);
    const bodies = data.bodies;

    for (let i = 0; i < bodies.length; i++) {
        const body = bodies[i];
        const template =
            `
            <div class="accordion-item">
            <h2 class="accordion-header" id="flush-heading${i}">
              <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapse${i}" aria-expanded="false" aria-controls="flush-collapse${i}">
                ${body.englishName}
              </button>
            </h2>
            <div id="flush-collapse${i}" class="accordion-collapse collapse" aria-labelledby="flush-heading${i}" data-bs-parent="#accordionFlushExample">
              <div class="accordion-body">
               <span>id: ${body.id}</span>
                <span>isPlanet: ${body.isPlanet}</span>
                <span>moons: ${body.moons}</span>
                <span>semimajorAxis: ${body.semimajorAxis}</span>
                <span>perihelion: ${body.perihelion}</span>
                <span>aphelion: ${body.aphelion}</span>
                <span>eccentricity: ${body.seccentricity}</span>
                <span>inclination: ${body.inclination}</span>
                
              
              </div>
            </div>
          </div>
            `
            meleContainer.innerHTML+=template;
    }




}