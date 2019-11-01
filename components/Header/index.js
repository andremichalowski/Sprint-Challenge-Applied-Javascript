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

const headerContainer = document.querySelector('.header-container');

function headerCreator(data) {
    const header = document.createElement('div');
    const cDate = document.createElement('div');
    const cTitle = document.createElement('h1')
    const cTemp = document.createElement('span');

    header.classList.add('header');
    cDate.classList.add('date');
    cTemp.classList.add('temp');

    cDate.textContent = 'MARCH 28, 2019';
    cTitle.textContent = 'Lambda Times';
    cTemp.textContent = '98°';

    header.append(cDate, cTitle, cTemp);

    return header;
}

headerContainer.append(headerCreator());