import i18n from "i18next";

/**
 * Regex for validations
 */

const regexTemplates = {
    phoneUa: /^\+38\s\((\d{3})\)\s\d{3}-\d{2}-\d{2}/g
}


/**
 * Validation methods
 */

const validators = {
    composeValidators: (...validators: any[]) => (value: string) => validators.reduce((error, validator) => error || validator(value), undefined),
    required: (value: string) => (value ? undefined : `${i18n.t('form.validation.required')}`),
    mustBeNumber: (value: string) => (isNaN(+value) ? 'Must be a number' : undefined),
    mustBePhone: (countryCode: string) => (value: string) => {
        if (countryCode === 'UA') {
            if (!regexTemplates.phoneUa.test(value)){
                console.log('test inside')
                return `${i18n.t('form.validation.phone')}`
            }
            console.log('test after -> ', false)
            return undefined
        }
        return undefined
    }
}

export { validators }
