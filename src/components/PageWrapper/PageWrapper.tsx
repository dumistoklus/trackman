import * as React from "react";

import "./PageWrapper.css";

type Props = {
    children: React.ReactNode;
};

export function PageWrapper({ children }: Props) {
    return <div className="page-wrapper">{children}</div>;
}
