import IMask from 'imask';

export const maskedTextField = () => {
    document.querySelectorAll('.data-drop').forEach(element => {
        IMask(
            element, {
                mask: Date,
                overwrite: true,
                autofix: true,
                blocks: {
                    d: {
                        mask: IMask.MaskedRange,
                        placeholderChar: 'Д',
                        from: 1,
                        to: 31,
                        maxLength: 2
                    },
                    m: {
                        mask: IMask.MaskedRange,
                        placeholderChar: 'М',
                        from: 1,
                        to: 12,
                        maxLength: 2
                    },
                    Y: {
                        mask: IMask.MaskedRange,
                        placeholderChar: 'Г',
                        from: 1900,
                        to: 2999,
                        maxLength: 4
                    }
                }
            }
        )
    });
};

maskedTextField();