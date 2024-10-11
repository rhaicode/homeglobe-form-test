"use client";

import React, { useState } from 'react';

const options = ['Apple', 'Banana', 'Cherry', 'Date', 'Elderberry', 'Fig', 'Grape'];

const Autocomplete = () => {
    const [inputValue, setInputValue] = useState('');
    const [filteredOptions, setFilteredOptions] = useState<string[]>([]);

    const handleChange = (event: any) => {
        const value = event.target.value;
        setInputValue(value);
        setFilteredOptions(
            options.filter(option =>
                option.toLowerCase().startsWith(value.toLowerCase())
            )
        );
    };

    const handleOptionClick = (option: any) => {
        setInputValue(option);
        setFilteredOptions([]);
    };

    return (
        <div className="relative">
            <input
                type="text"
                value={inputValue}
                onChange={handleChange}
                className="h-[45px] bg-cloud-mist hover:bg-pale-fog rounded-lg p-2 w-full text-midnight-slate focus:outline-none focus:border-[3px] focus:border-light-purple"
                placeholder="Placeholder"
            />
            {filteredOptions.length > 0 && (
                <ul className="absolute z-10 mt-1 bg-white border border-gray-300 rounded-lg shadow-lg w-full">
                    {filteredOptions.map(option => (
                        <li
                            key={option}
                            onClick={() => handleOptionClick(option)}
                            className="p-2 hover:bg-gray-200 cursor-pointer text-midnight-slate"
                        >
                            {option}
                        </li>
                    ))}
                </ul>
            )}
        </div>
    );
};

export default Autocomplete;
