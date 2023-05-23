// Core
import {useState} from 'react'


export const useLangDropdownEf = () => {
    const langOptions = [
        {
            label: 'EN',
            value: 'en'
        },
        {
            label: 'UA',
            value: 'ua'
        }
    ]

   const [lang, setLang] = useState<'en' | 'ua' | string>('en')

    return { langOptions, lang, setLang }
}
