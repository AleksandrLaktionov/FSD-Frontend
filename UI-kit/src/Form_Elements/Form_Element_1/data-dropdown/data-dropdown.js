import IMask from 'imask';


export const dataDropdownStart = () => {
    IMask(
        document.querySelector('.data-dropdown-start'), {
            mask: Date,
            lazy: false,
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
};

export const dataDropdownFinish = () => {
    IMask(
        document.querySelector('.data-dropdown-finish'), {
            mask: Date,
            lazy: false,
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
};