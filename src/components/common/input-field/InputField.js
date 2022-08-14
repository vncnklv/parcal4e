export const InputField = ({
    label, name, value, changeHandler, type, checked
}) => {

    const props = {
        name,
        type: type || 'text'
    }

    if (value) props.value = value;
    if (checked) props.checked = checked;
    if (changeHandler) props.onChange = changeHandler;

    return (
        <label htmlFor={name}>
            {label}
            <input {...props} />
        </label>
    );
}