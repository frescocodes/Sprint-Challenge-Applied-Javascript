// STEP 1: Create a header component.
// -----------------------
// Using a function create the component you see below:
//
//  <div class="header">
//    <span class="date">SMARCH 28, 2019</span>
//    <h1>Lambda Times</h1>
//    <span class="temp">98°</span>
//  </div >
// And add it to the DOM in the .header-container component
const headerEntry = document.querySelector('.header-container');
// console.log(headerEntry);


function Header() {
    // create elements
    const header = document.createElement('div'),
    date = document.createElement('span'),
    heading = document.createElement('h1'),
    temp = document.createElement('span');
    
    // assign classes 
    header.classList.add('header');
    date.classList.add('date');
    temp.classList.add('temp');
    
    //content
    date.textContent = 'MARCH 28, 2019';
    heading.textContent = 'Lambda Times';
    temp.textContent = '98°F'
    // structure
    header.appendChild(date);
    header.appendChild(heading);
    header.appendChild(temp);
    
    return header
}

const create = Header();
headerEntry.appendChild(create);
