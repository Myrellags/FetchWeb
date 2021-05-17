
const personApiUrl = "https://randomuser.me/api/?results=3";

document.addEventListener('DOMContentLoaded', function (event) {
    document.getElementById('addPersonsBtn').addEventListener('click', getPersons);
});

async function getPersons() {
    try {
        let response = await fetch(personApiUrl);
        if (response.ok) {
            const data = await response.json();
            const table = document.getElementById("PersonTable");
            data.results.map(function (auther) {
                const tr = createNode('tr'),
                    fullNameRow = createNode('td'),
                    PicRow = createNode('td'),
                    PicEl = createNode('img'),
                    emailRow = createNode('td');
                fullNameRow.innerHTML = `${auther.name.title}. ${auther.name.last} ${auther.name.first}`;
                PicEl.src = auther.picture.medium;
                emailRow.innerHTML = auther.email;
                append(tr, fullNameRow);
                append(PicRow, PicEl);
                append(tr, PicRow);
                append(tr, emailRow);
                append(table, tr);
            })
        }
    }
    catch (e) {
        console.log(e);
    }
}

function createNode(element) {
    return document.createElement(element);
}

function append(parent, el) {
    return parent.appendChild(el);
}