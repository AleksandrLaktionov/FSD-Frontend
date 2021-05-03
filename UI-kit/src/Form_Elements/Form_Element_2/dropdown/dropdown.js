export const dropDown = () => {

    let min = 0;

    let max = 10

    let textContent = ['гостя', 'гостей'];

    let textNone = 'Сколько';

    let inputTextDefoult = [];

    const dDown = document.querySelector('.dropdown');

    let dropDownInput = dDown.querySelector('.drop-down-input');

    let dropDownContent = dDown.querySelector('.drop-down-content');

    // const getDownDDown = () => {
    //     dropDownContent.style.display = 'none';
    // };

    // const getUpDDown = () => {
    //     dropDownContent.style.display = 'grid';
    // };

    // dDown.addEventListener('mouseover', getUpDDown);
    // dDown.addEventListener('mouseout', getDownDDown);

    const contentItems = dropDownContent.querySelectorAll('.content-items');
    for (let a = 0; a < contentItems.length; a++) {
        const contentItem = contentItems[a];

        let decrementButton = contentItem.querySelector('.decrement');
        let incrementButton = contentItem.querySelector('.increment');
        let contentItemNumber = contentItem.querySelector('input[type="number"]');
        let inputNumber = Number(contentItemNumber.value);
        console.log(decrementButton);
        console.log(incrementButton);
        console.log(contentItemNumber);
        // const inputContent = (j, k) => {
        //     inputTextDefoult[0] = `${j} ${k[0]}`;
        //     let stringInput = inputTextDefoult.join(', ')
        //     dropDownInput.value = stringInput;
        // if (j == 0) {
        //     inputTextDefoult[a] = `${textNone}`;
        //     let stringInput = inputTextDefoult.join(', ')
        //     dropDownInput.value = stringInput;
        // } else if (j == 1) {
        //     inputTextDefoult[a] = `${j} ${k[a][0]}`;
        //     let stringInput = inputTextDefoult.join(', ')
        //     dropDownInput.value = stringInput;
        // } else if (j > 1 && j <= 4) {
        //     inputTextDefoult[a] = `${j} ${k[a][1]}`;
        //     let stringInput = inputTextDefoult.join(', ')
        //     dropDownInput.value = stringInput;
        // } else {
        //     inputTextDefoult[a] = `${j} ${k[a][2]}`;
        //     let stringInput = inputTextDefoult.join(', ')
        //     dropDownInput.value = stringInput;
        // };
        // };

        const setDecrement = () => {
            if (inputNumber != min) {
                --inputNumber;
                contentItemNumber.value = String(inputNumber);
                dropDownInput.value = contentItemNumber.value;
                // inputContent(inputNumber, textContent)
                return inputNumber;
            }
        };

        const setIncrement = () => {
            if (inputNumber != max) {
                ++inputNumber;
                contentItemNumber.value = String(inputNumber);
                dropDownInput.value = contentItemNumber.value;
                // inputContent(inputNumber, textContent)
                return inputNumber;
            }
        };

        decrementButton.addEventListener('click', setDecrement);
        incrementButton.addEventListener('click', setIncrement);
    };
}