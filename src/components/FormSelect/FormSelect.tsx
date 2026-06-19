import * as React from "react";

import "./FormSelect.css";

export type SelectOption = {
    value: string;
    title: string;
};

type Props = React.SelectHTMLAttributes<HTMLSelectElement> & {
    label: string;
    options: SelectOption[];
};

export function FormSelect({ label, className, options, ...props }: Props) {
    const classNames = ["form-select", className].filter(Boolean).join(" ");

    return (
        <div className={classNames}>
            <label>
                <select className="form-select__input" {...props}>
                    <option key="default" value="default">
                        Choose an option
                    </option>

                    {options.map((option) => (
                        <option key={option.value} value={option.value}>
                            {option.title}
                        </option>
                    ))}
                </select>
                {label && <div className="form-select__label">{label}</div>}
            </label>
        </div>
    );
}
