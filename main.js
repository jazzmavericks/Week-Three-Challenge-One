
const keySection = document.getElementById('key');
const keyCodeSection = document.getElementById('keyCode');
const keyCharCodeSection = document.getElementById('keyCharCode');

        document.addEventListener('keydown', (event) => {

            const resultsSection = document.getElementById('resultsSection');
            resultsSection.style.display = 'flex';
            const keyCode = event.code;
            const key = event.key;
            const charCode = event.charCode || event.keyCode;

            keySection.innerHTML = `
            <p>${key}</p>
            `;

            keyCodeSection.innerHTML = `
            <p>${keyCode}</p>
            `;

            keyCharCodeSection.innerHTML = `
            <p>${charCode}</p>
            `;
        });