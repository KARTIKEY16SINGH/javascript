let heading = document.getElementById('heading')
let username = location.search.substring(1)

console.log("heading", heading);
console.log("username", username);
let sheetUrl = "https://docs.google.com/spreadsheets/d/152VBnPztJGn9S17_IxLHeZeRZHMDj88L0UMHhwKIf9c/edit#gid=0"
function getData() {
    fetch(sheetUrl)
        .then((response) => {
            console.log("response", response);
            // console.log("response.text", response.text())
            return response.text();
        })
        .then( data => {
            let table = new DOMParser().parseFromString(data, 'text/html').querySelector('table');
            let rows = table.querySelectorAll('tr');

            for (let i = 1; i < rows.length; i++) {
                let cells = rows[i].querySelectorAll('td');
                console.log('cells');
                console.log(cells);
                if (
                    cells[0].textContent === username
                ) {
                    let amount = cells[1].textContent;
                    let sales = cells[2].textContent;
                    heading.textContent = `Welcome ${username} your total amount = ${amount} and sales = ${sales}`
                }
            }

        }

        )
}

getData();