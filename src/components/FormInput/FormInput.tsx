import * as React from "react";

import "./FormInput.css";

type Props = React.InputHTMLAttributes<HTMLInputElement>;

export function FormInput({ placeholder, className, ...props }: Props) {
    const classNames = ["form-input", className].filter(Boolean).join(" ");

    return (
        <div className={classNames}>
            <label>
                <input className="form-input__input" {...props} />
                {placeholder && <div className="form-input__label">{placeholder}</div>}
            </label>
        </div>
    );
}
