import { ChangeEvent, useState } from 'react';

const convertTo = <T, V>(s: T, v: V) =>
    Object.keys(s).reduce((o, k) => ({ ...o, [k]: v }), {} as Record<keyof T, V>);

export const useForm = <T>(state: T) => {
    const [formValues, setFormValues] = useState(state);
    const [touched, setTouched] = useState(convertTo<T, boolean>(state, false));

    const formReset = () => {
        setFormValues(state);
        setTouched(convertTo<T, boolean>(state, false));
    };

    const handleChange = ({ target }: ChangeEvent<HTMLTextAreaElement | HTMLInputElement>) => {
        setFormValues({
            ...formValues,
            [target.name]: target.value,
        });

        setTouched({
            ...touched,
            [target.name]: true,
        });
    };

    const isTouched = (name: keyof T) => touched[name];

    const clear = (name: keyof T) => setFormValues({ ...formValues, [name]: '' });

    return {
        formValues,
        handleChange,
        formReset,
        clear,
        isTouched,
    };
};
