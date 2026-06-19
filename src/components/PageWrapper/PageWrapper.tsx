import * as React from "react";

import "./PageWrapper.css";

type Props = {
    children: React.ReactNode;
    className?: string;
};

export function PageWrapper({ children, className }: Props) {
    return <div className={`page-wrapper ${className || ""}`}>{children}</div>;
}
