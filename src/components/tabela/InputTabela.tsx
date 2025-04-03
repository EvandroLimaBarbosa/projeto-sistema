import Paper from '@mui/material/Paper';
import InputBase from '@mui/material/InputBase';

interface InputTabelaProps {
    defaultValue: string;
    placeholder: string;
    className?: string;
}

export default function InputTabela(props: InputTabelaProps) {
    return (
        <Paper
            className={`grid grid-cols-1 ${props.className}`}
            component="form"
        >
            <InputBase
                className="w-full p-2 border border-gray-300 rounded"
                defaultValue={props.defaultValue}
                placeholder={props.placeholder}
            />
        </Paper>
    );
}