import * as React from "react";
import { Link } from "react-router";

import "./Button.css";

type Props = {
    visualType: "primary" | "secondary" | "danger";
    icon?: string;
} & (React.ButtonHTMLAttributes<HTMLButtonElement> | React.AnchorHTMLAttributes<HTMLAnchorElement>);

export function Button({ icon, visualType, ...props }: Props) {
    const className = ["button", `button--${visualType}`];
    if (props.className) {
        className.push(props.className);
    }
    if (icon && !props.children) {
        className.push("button--icon-only");

        props = { ...props, children: <img src={icon} alt="" /> };
    }

    if ("href" in props && props.href) {
        return <Link {...props} className={className.join(" ")} to={props.href} />;
    }

    return (
        <button
            {...(props as React.ButtonHTMLAttributes<HTMLButtonElement>)}
            className={className.join(" ")}
        />
    );
}
