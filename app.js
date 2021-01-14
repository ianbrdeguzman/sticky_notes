// initialize body
const body = document.querySelector('body');

// IIEF
( () => {
    // loop over localStorage
    for (let i = 0; i <= localStorage.length; i++) {

        // get localStorage value and assign to stored
        const stored = localStorage.getItem(i);

        // initialize new div element
        const div = 
        `
        <div class="container">
            <header>
                <p>Sticky Note</p>
                <button class="add"><i class="fas fa-plus"></i></button>
                <button class="save"><i class="far fa-save"></i></button>
                <button class="del"><i class="fas fa-trash-alt"></i></button>
            </header>
            <div class="content">
                <textarea id="text" readonly>${stored}</textarea>
            </div>
        </div>
        `

        // insert new div element 
        if (stored) {
            body.insertAdjacentHTML('beforeend', div);
        }
    }
})();

// add event listener to mouse click
body.addEventListener('click', (e) => {
    const classEl = e.target.parentNode.className;
    
    // check if element class name is add call addNote function
    if (classEl === 'add') {
        addNote();
    }
    
    // check if element class name is dek call delNote function
    if (classEl === 'del') {
        delNote(e);
    }

    // check if element class name is save call saveNote function
    if (classEl === 'save') {
        saveNote(e);
    }

})

const saveNote = (e) => {

    // assign input textarea value
    const textValue = e.target.parentNode.parentNode.nextElementSibling.childNodes[1].value;

    // assign textarea element
    const textArea = e.target.parentNode.parentNode.nextElementSibling.childNodes[1];

    // check if textarea value is not empty
    if (textValue) {

        // loop over localStorage
        for (let i = 0; i <= localStorage.length; i++) {

            // if textarea value is the same as stored value dont save
            if (localStorage.getItem(i) === textValue) {
                break;

            // check if stored value is empty
            } else if (localStorage.getItem(i) === null) {

                // assign text value to local storage
                localStorage.setItem(i, textValue);

                // change textarea element to readonly
                textArea.setAttribute('readonly', '');
                break;
            }
        }
    }
};

const delNote = (e) => {

    // assign textarea value
    const textValue = e.target.parentNode.parentNode.nextElementSibling.childNodes[1].value;
    
    // assign current div container
    const currentDiv = e.target.parentNode.parentNode.parentNode;

    // loop over localStorage length
    for (let i = 0; i <= localStorage.length; i++) {

        // assign stored value
        const stored = localStorage.getItem(i);

        // check if stored value is equal to current div container value
        if (textValue === stored) {

            // remove stored value
            localStorage.removeItem(i)
        }
    }
    // remove current div container
    currentDiv.remove();
};

const addNote = () => {

    // assign new div container
    const div = `
                <div class="container">
                    <header>
                        <p>Sticky Note</p>
                        <button class="add"><i class="fas fa-plus"></i></button>
                        <button class="save"><i class="far fa-save"></i></button>
                        <button class="del"><i class="fas fa-trash-alt"></i></button>
                    </header>
                    <div class="content">
                                <textarea maxlength="40"></textarea>
                    </div>
                </div>
                `
    // add new div container to html body
    document.body.insertAdjacentHTML('beforeend', div);
};