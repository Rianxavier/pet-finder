import { useCallback, useState } from "react";

interface GenderRadioProps {
    name: string
    onChange?: (value: string) => void;
}

export const InputRadio = ({ ...props }: GenderRadioProps) => {

    const [value, setValue] = useState<"fêmea" | "macho">('macho');

    const handleChange = useCallback((value: "fêmea" | "macho") => {
        setValue(value);
        if (props.onChange) props.onChange(value);
    }, []);

    return (
        <div className="flex items-center space-x-4">
            <label className="flex items-center space-x-2">
                <input
                    type="radio"
                    name="gender"
                    value="fêmea"
                    checked={value === 'fêmea'}
                    onChange={() => handleChange('fêmea')}
                    className="hidden"
                />
                <div
                    className={`w-6 h-6 rounded-full border-2 ${value === 'fêmea' ? 'bg-[#17BAB7] border-[#17BAB7]' : 'border-gray-400'
                        }`}
                />
                <span>Fêmea</span>
            </label>

            <label className="flex items-center space-x-2">
                <input
                    type="radio"
                    name="gender"
                    value="macho"
                    checked={value === 'macho'}
                    onChange={() => handleChange('macho')}
                    className="hidden"
                />
                <div
                    className={`w-6 h-6 rounded-full border-2 ${value === 'macho' ? 'bg-[#17BAB7] border-[#17BAB7]' : 'border-gray-400'
                        }`}
                />
                <span>Macho</span>
            </label>
        </div>
    );
};