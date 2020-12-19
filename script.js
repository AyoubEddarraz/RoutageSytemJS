let sections = document.querySelectorAll("section"); // all Section in page

// Lorsque la page Scrolly le Effect Excute
onscroll = () => {
    
    // la valeur de scroll
    let scrollPosition = window.scrollY;

    // Fait une loop forEach pour Excute l'effect
    sections.forEach(section => {
        // Dans le If Statement check if le scroll page extérieur de l'espace qui entre la page et l'elemnt - le height de Element * 0.25 && la valeur de scroll page inférieure de l'espace entre la page et l'elemnt + le height de Element  - le height de Element * 0.25
        if(scrollPosition >= section.offsetTop - section.offsetHeight * .25 && scrollPosition < section.offsetTop + section.offsetHeight - section.offsetHeight * .25){
            // Get Current section sa depant le If Statement
            let currentSection = section.attributes.id.value;
            // Effacer tout les class active
            removeActiveAllSelectors();
            // add Class Active the Current Anchors
            addActiveClass(currentSection);
        }
    })

}


// Remove All Class Active
removeActiveAllSelectors = () => {
    let allAnchors = document.querySelectorAll('nav li');

    allAnchors.forEach(a => {
        a.classList.remove('active');
    })
}


// Add le Active class pour le Current Li
addActiveClass = (id) => {
    let currentAnchors = `nav a[href="#${id}"]`,
        parent = document.querySelector(currentAnchors).parentElement;
    parent.classList.add('active');
}

// fixe change the url and Smooth Transition between the Section

// All Links
let links = document.querySelectorAll("nav a");

// Loop forEach A tout les Links
links.forEach(link => {
    // ajouter une Event click A chaque Link
    link.addEventListener('click' , (a) => {
        a.preventDefault(); // effacer tout default Function
        let currentLink = a.target.attributes.href.value, // current link
            section = document.querySelector(currentLink), // current section
            sectionScroll = section.offsetTop; // l'espace entre la top page et l'Element 

        // Excute the Scroll     
        window.scroll({
            top : sectionScroll, // l'espace Entre top Et Element 
            behavior : "smooth" // L'effect Excute En Smooth Mode
        })
    })
})