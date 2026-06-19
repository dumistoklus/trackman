import * as React from "react";

import "./FormCheckbox.css";

type Props = React.InputHTMLAttributes<HTMLInputElement> & {
    label: string;
};

export function FormCheckbox({ label, className, ...props }: Props) {
    const classNames = ["form-checkbox", className].filter(Boolean).join(" ");

    return (
        <label className={classNames}>
            <input {...props} type="checkbox" className="form-checkbox__input" />
            {label}
        </label>
    );
}
