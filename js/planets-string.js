(function(){
    "use strict";

    let planetsString = "Mercury|Venus|Earth|Mars|Jupiter|Saturn|Uranus|Neptune";
    let planetsArray;

    /**
     * TODO:
     * Convert planetsString to an array, and save it in a variable named
     * planetsArray.
     * console.log planetsArray to check your work
     */
    planetsArray = planetsString.split("|");
    console.log(planetsArray);

    /**
     * TODO:
     * Create a string with <br> tags between each planet. console.log() your
     * results. Why might this be useful?
     *
     *
     *
     * BONUS:
     * Create another string that would display your planets in an undordered
     * list. You will need an opening AND closing <ul> tags around the entire
     * string, and <li> tags around each planet.
     */

    console.log(planetsArray.join("<br>"));


    // bonus
    // let str;
    // let newPlanetArray = [];
    // planetsArray.forEach(function (planet){
    //     //using template literal:
    //     console.log(`<li>${planet}</li>`);
    //     newPlanetArray.push(`<li>${planet}</li>`)
    //     //using concatenation:
    //     newPlanetArray.push("<li>" + planet + "</li>")
    // });
    //
    // PlanetArray.unshift("<ul>");
    // newPlanetArray.push("</ul>")
    // console.log(newPlanetArray);
    // str = newPlanetArray.join();
    // console.log(str);

    // let planetList = `<ul><li>${ planetsArray.join('</li><li>') }</li></ul>`;
    // console.log(planetList);

    let planetL = "<ul><li>" + planetsArray.join('</li><li>') + "</li></ul>";
    console.log(planetL)

    document.write(planetL);

    // document.body.innerHTML += planetList;


})();