export const rangeSlider = () => {

    let multiRangeSlider = document.querySelector('.multi-range-slider');
    
    let result = multiRangeSlider.querySelector('.result');
    let inputLeft = multiRangeSlider.querySelector('.range-slider > #input-left');
    let inputRight = multiRangeSlider.querySelector('.range-slider > #input-right');
    let slider = multiRangeSlider.querySelector('.range-slider > .slider');

    let thumbLeft = slider.querySelector('.thumb.left');
    let thumbRight = slider.querySelector('.thumb.right');
    let range = slider.querySelector('.range');

    function setLeftValue() {
        let _this = inputLeft,
            min = parseInt(_this.min),
            max = parseInt(_this.max);
        _this.value = Math.min(parseInt(_this.value), parseInt(inputRight.value) - 1);

        let percent = (((_this.value - min) / (max - min)) * 100).toFixed(2);

        thumbLeft.style.left = percent + '%';
        range.style.left = percent + '%';
    }
    setLeftValue();

    function setRightValue() {
        let _this = inputRight,
            min = parseInt(_this.min),
            max = parseInt(_this.max);
        _this.value = Math.max(parseInt(_this.value), parseInt(inputLeft.value) - 1);

        let percent = (((_this.value - min) / (max - min)) * 100).toFixed(2);

        thumbRight.style.right = (100 - percent) + '%';
        range.style.right = (100 - percent) + '%';
    }
    setRightValue();

    function setResult() {
        result.textContent = `${inputLeft.value}` + '-' + `${inputRight.value}` + '₽';
    }
    setResult();

    inputLeft.addEventListener('input', setLeftValue);
    inputRight.addEventListener('input', setRightValue);
    multiRangeSlider.addEventListener('input', setResult);
    // inputLeft.addEventListener('mouseover', function () {
    //     thumbLeft.classList.add('hover');
    // });
    // inputLeft.addEventListener('mouseout', function () {
    //     thumbLeft.classList.remove('hover');
    // });
    // inputLeft.addEventListener('mousedown', function () {
    //     thumbLeft.classList.add('active');
    // });
    // inputLeft.addEventListener('mouseup', function () {
    //     thumbLeft.classList.remove('active');
    // });
    // inputRight.addEventListener('mouseover', function () {
    //     thumbRight.classList.add('hover');
    // });
    // inputRight.addEventListener('mouseout', function () {
    //     thumbRight.classList.remove('hover');
    // });
    // inputRight.addEventListener('mousedown', function () {
    //     thumbRight.classList.add('active');
    // });
    // inputRight.addEventListener('mouseup', function () {
    //     thumbRight.classList.remove('active');
    // });
}