import * as React from "react";

import "./FormTextarea.css";

type Props = React.TextareaHTMLAttributes<HTMLTextAreaElement>;

export function FormTextarea({ placeholder, className, ...props }: Props) {
    const classNames = ["form-textarea", className].filter(Boolean).join(" ");

    return (
        <div className={classNames}>
            <label>
                <textarea className="form-textarea__input" {...props} />
                {placeholder && <div className="form-textarea__label">{placeholder}</div>}
            </label>
        </div>
    );
}
