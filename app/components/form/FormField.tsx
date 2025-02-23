import { AutoField, Button, FieldLabel } from '@measured/puck';
import React from 'react';

export const FormField = ({ label, type, defaultValue, onChange = () => { }, selectOptions = [{ optionName: 'First Option' }] }) => {
    const selectOption = selectOptions.map((option) => ({ label: option.optionName, value: option.optionName }))
    return (
        <div className='space-y-6'>
            <FieldLabel label={label} />
            {type === 'select' ?
                <select
                    onChange={onChange}
                    className="px-2 py-3 w-full border border-gray-300 rounded-lg shadow-sm focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none"
                >
                    {selectOption?.map((option, index) => (
                        <option key={index} value={option.value}>
                            {option.label}
                        </option>
                    ))}
                </select> :
                <AutoField field={{ type, options: selectOption }} value={defaultValue} onChange={onChange} />
            }
        </div>
    );
};