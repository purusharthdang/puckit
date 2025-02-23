'use client'
import { AutoField, Button, FieldLabel } from '@measured/puck';
import React from 'react';

export const FormField = ({ label, type, defaultValue, onChange = () => { }, selectOptions = [{ optionName: 'First Option' }] }) => {
    const selectOption = selectOptions.map((option) => ({ label: option.optionName, value: option.optionName }));

    return (
        <div className='space-y-6 mb-3'>
            <FieldLabel label={label} />
            {type === 'select' ? (
                <select
                    onChange={onChange}
                    className="px-2 py-3 w-full border border-gray-300 rounded-lg shadow-sm focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none"
                >
                    {selectOption.map((option, index) => (
                        <option key={index} value={option.value}>
                            {option.label}
                        </option>
                    ))}
                </select>
            ) : type === 'radio' ? (
                <div className="space-y-2">
                    {selectOption.map((option, index) => (
                        <label key={index} className="flex items-center space-x-3 cursor-pointer">
                            <input
                                type="radio"
                                name={label}
                                value={option.value}
                                onChange={onChange}
                                className="w-4 h-4 text-blue-600 border-gray-300 focus:ring-blue-500"
                            />
                            <span className="text-gray-700">{option.label}</span>
                        </label>
                    ))}
                </div>
            ) : (
                <AutoField field={{ type, options: selectOption }} value={defaultValue} onChange={onChange} />
            )}
        </div>
    );
};
