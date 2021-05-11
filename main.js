const character = document.querySelector('.filter');

const filterContent = ["3", "A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
filterContent.map((item, index)=>{
    const span = document.createElement("span");
    span.textContent = item;
    span.classList.add('button');
    if (index === 0) {
        span.classList.add('is-checked');
    }
    character.appendChild(span);
})

// const elem = document.querySelector('.grid');
// var iso = new Isotope( elem, {
//   // options
//   itemSelector: '.category',
//   layoutMode: 'fitRows'
// });

// // element argument can be a selector string
// //   for an individual element
// var iso = new Isotope( '.grid', {
//   // options
// });