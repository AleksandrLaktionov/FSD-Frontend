export const dropDownActive = () => {

    let min = 0;

    let max = 3;

    let textContent = ['гость', 'гостя', 'гостей'];

    let inputTextDefoult = [];

    const dDownActive = document.querySelector('.dropdown-active');

    const dropDownInput = dDownActive.querySelector('.drop-down-input');

    const dropDownContent = dDownActive.querySelector('.drop-down-content');

    const bReset = dropDownContent.querySelector('button[type="reset"]');

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

        const decrementButton = contentItem.querySelector('.decrement');
        const incrementButton = contentItem.querySelector('.increment');
        const contentItemNumber = contentItem.querySelector('input[type="number"]');

        let inputNumber = Number(contentItemNumber.value);

        const inputContent = (j, k) => {
            inputTextDefoult[a] = j;
            let stringInput = inputTextDefoult.reduce((sum, current) => sum + current, 0);
            if (stringInput == 1) {
                dropDownInput.value = `${stringInput} ${k[0]}`;
            } else if (stringInput >= 1 && stringInput <= 4) {
                dropDownInput.value = `${stringInput} ${k[1]}`;
            } else {
                dropDownInput.value = `${stringInput} ${k[2]}`;
            };
        };

        const setDecrement = () => {
            if (inputNumber != min) {
                inputNumber -= 1;
                contentItemNumber.value = String(inputNumber);
                inputContent(inputNumber, textContent)
                return inputNumber;
            }
        };

        const setIncrement = () => {
            if (inputNumber != max) {
                inputNumber += 1;
                contentItemNumber.value = String(inputNumber);
                inputContent(inputNumber, textContent)
                return inputNumber;
            }
        };

        decrementButton.addEventListener('click', setDecrement);
        incrementButton.addEventListener('click', setIncrement);


        bReset.addEventListener('click', () => {
            inputNumber = 0;
            inputTextDefoult = []
        })
    };
}