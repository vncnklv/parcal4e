export const InputField = ({
    label, name, value, changeHandler, type, checked
}) => {

    const props = {
        name,
        onChange: changeHandler,
        type: type || 'text'
    }

    if (value) props.value = value;
    if (checked) props.checked = checked;
    
    return (
        <label htmlFor={name}>
            {label}
            <input {...props} />
        </label>
    );
}