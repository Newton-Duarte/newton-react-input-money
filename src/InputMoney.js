import { useState, useEffect } from 'react';

// interface InputMoneyProps {
//     value: number;
//     onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
//     addonBefore?: string;
// }

const DECIMAL_SIZE = 2;

export function InputMoney({ value, onChange, addonBefore = 'R$', ...props }) {
    // const [currentValue, setCurrentValue] = useState<string>(`${value}`);
    const [currentValue, setCurrentValue] = useState(`${value}`);
    
    useEffect(() => {
        const valueString = `${value}`;
        
        if (!/\D/.test(valueString.replace('.', ''))) {
            setCurrentValue(value.toFixed(DECIMAL_SIZE).toString().replace('.', ','));
        }
    }, [value]);
    
    // const handleOnChange = (event: React.ChangeEvent<HTMLInputElement>) => {}
    
    const handleOnChange = (event) => {
        const valueWithoutDot = event.target.value.replace(',', '');
        const sliceSize = valueWithoutDot.length - DECIMAL_SIZE;
        const newValue = [
            valueWithoutDot.slice(0, sizeSlice), 
            '.', 
            valueWithoutDot.slice(sizeSlice)
        ].join('',);
        
        onChange({
            ...event,
            target: {
                ...event.target,
                value: newValue,
            },
        });
        
    }
    
    return (
        <input
            value={value}
            onChange={onChange}
            {...props}
        />
    )
}