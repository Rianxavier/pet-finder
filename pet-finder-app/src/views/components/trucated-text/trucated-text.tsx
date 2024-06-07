interface TruncatedTextProps {
    text: string;
    maxLength: number;
}

export const TruncatedText = ({ text, maxLength }: TruncatedTextProps) => {
    // Trunca o texto se ele for maior que maxLength e adiciona '...'
    const truncatedText = text.length > maxLength ? `${text.substring(0, maxLength)}...` : text;

    return <span>{truncatedText}</span>;
};