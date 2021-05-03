export const dropDownExpanded = () => {

    let min = 0;

    let max = 10

    let textContent = [
        ['спальня', 'спальни', 'спален'],
        ['кровать', 'кровати', 'кроватей'],
        ['ванная', 'ванны', 'ванн']
    ];

    let textNone = '...';

    let inputTextDefoult = [];

    const dropDownExp = document.querySelector('.drop-down-expanded');

    let dropDownInput = dropDownExp.querySelector('.drop-down-input');

    let dropDownContent = dropDownExp.querySelector('.drop-down-content');

    // const getDownDropDown = () => {
    //     dropDownContent.style.display = 'none';
    // };

    // const getUpDropDown = () => {
    //     dropDownContent.style.display = 'grid';
    // };

    // dropDownExp.addEventListener('mouseover', getUpDropDown);
    // dropDownExp.addEventListener('mouseout', getDownDropDown);

    const contentItems = dropDownContent.querySelectorAll('.content-items');
    for (let a = 0; a < contentItems.length; a++) {
        const contentItem = contentItems[a];

        let decrementButton = contentItem.querySelector('.decrement');
        let incrementButton = contentItem.querySelector('.increment');
        let contentItemNumber = contentItem.querySelector('input[type="number"]');
        let inputNumber = Number(contentItemNumber.value);

        const inputContent = (j, k) => {
            if (j == 0) {
                inputTextDefoult[a] = `${textNone}`;
                let stringInput = inputTextDefoult.join(', ')
                dropDownInput.value = stringInput;
            } else if (j == 1) {
                inputTextDefoult[a] = `${j} ${k[a][0]}`;
                let stringInput = inputTextDefoult.join(', ')
                dropDownInput.value = stringInput;
            } else if (j > 1 && j <= 4) {
                inputTextDefoult[a] = `${j} ${k[a][1]}`;
                let stringInput = inputTextDefoult.join(', ')
                dropDownInput.value = stringInput;
            } else {
                inputTextDefoult[a] = `${j} ${k[a][2]}`;
                let stringInput = inputTextDefoult.join(', ')
                dropDownInput.value = stringInput;
            };
        };

        const setDecrement = () => {
            if (inputNumber != min) {
                --inputNumber;
                contentItemNumber.value = String(inputNumber);
                inputContent(inputNumber, textContent)
                return inputNumber;
            }
        };

        const setIncrement = () => {
            if (inputNumber != max) {
                ++inputNumber;
                contentItemNumber.value = String(inputNumber);
                inputContent(inputNumber, textContent)
                return inputNumber;
            }
        };

        decrementButton.addEventListener('click', setDecrement);
        incrementButton.addEventListener('click', setIncrement);
    };
}