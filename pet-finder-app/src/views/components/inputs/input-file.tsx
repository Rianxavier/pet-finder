import React, { useRef, useState } from 'react';

interface InputFileProps {
    name: string;
    onChange?: (value: string) => void;
}

export const InputFile = ({ name, ...props }: InputFileProps) => {
    const fileInputRef = useRef<HTMLInputElement | null>(null);
    const [image, setImage] = useState<string | null>(null);

    const handleButtonClick = () => {
        fileInputRef.current?.click();
    };

    const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const file = event.target.files?.[0];
        if (file && file.type.startsWith('image/')) {
            const reader = new FileReader();
            reader.onloadend = () => {
                const result = reader.result as string;
                setImage(result);
                if (props.onChange) props.onChange(result);
            };
            reader.readAsDataURL(file);
        }
    };

    return (
        <div className="flex flex-col items-center space-y-4">
            <button type="button" onClick={handleButtonClick}
                className="px-4 py-2 font-semibold text-white bg-[#17BAB7] rounded-md hover:bg-[#17BAB7]"
            >
                Escolher Imagem
            </button>
            <input type="file" ref={fileInputRef} accept="image/*" onChange={handleFileChange} className="hidden" />
            {image && (
                <div className="flex items-center space-x-4">
                    <img src={image} alt="Pré-visualização" className="w-32 h-32 object-cover rounded-md shadow-md" />
                </div>
            )}
        </div>
    );
};

