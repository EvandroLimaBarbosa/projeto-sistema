import Paper from '@mui/material/Paper';
import InputBase from '@mui/material/InputBase';

interface InputTabelaProps {
    defaultValue: string;
    placeholder: string;
    className?: string;
}

export default function InputTabela(props: InputTabelaProps) {
    const handleFocus = (event: React.FocusEvent<HTMLInputElement>) => {
        event.target.select();
    };

    return (
        <Paper
            className={`flex ${props.className}`}
            component="form"
        >
            <InputBase
                className="flex justify-items-center p-2"
                defaultValue={props.defaultValue}
                placeholder={props.placeholder}
                onFocus={handleFocus}
            />
        </Paper>
    );
}