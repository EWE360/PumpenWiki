const character = document.querySelector('.filter');
const input = document.querySelector('.search');
const filterContent = ["3", "A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
let letter;

filterContent.map((item, index)=>{
    const span = document.createElement("span");
    span.textContent = item;
    span.classList.add('button');
    span.addEventListener('click', selectItem);
    // if (index === 0) {
    //     span.classList.add('active');
    // }
    character.appendChild(span);
});

input.addEventListener('click', showAll);

function showAll(){
    const span = document.querySelectorAll('.filter .button');
    span.forEach(element => {
        element.classList.remove("active");
    });
    $grid.isotope({ filter: '*' })
}

function handleClassNames(element){
    const span = document.querySelectorAll('.filter .button');
    span.forEach(element => {
        element.classList.remove("active");
    });
    element.classList.add('active')
    console.log(element);
}

function selectItem(event){
    const target = event.target.textContent;

    handleClassNames(event.target);
    letter = ".cat-" + target.toLowerCase();
    $grid.isotope({ filter: letter })

}

var $grid = $('.grid').isotope({
    itemSelector: '.category',
    layoutMode: 'fitRows',
    // getSortData: {
    //   name: '.name',
    //   symbol: '.symbol',
    //   number: '.number parseInt',
    //   category: '[data-category]',
    //   weight: function( itemElem ) {
    //     var weight = $( itemElem ).find('.weight').text();
    //     return parseFloat( weight.replace( /[\(\)]/g, '') );
    //   }
    // }
  });

