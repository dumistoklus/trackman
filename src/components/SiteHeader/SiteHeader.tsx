import { Link } from "react-router";

import "./SiteHeader.css";

export function SiteHeader() {
    return (
        <header className="site-header">
            <Link to="/" className="site-header__logo">
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="14"
                    height="14"
                    fill="none"
                    viewBox="0 0 14 14"
                >
                    <g fill="currentColor">
                        <path d="M12.918 0C13.518 0 14 .482 14 1.082v11.836c0 .6-.482 1.082-1.082 1.082H5.573a.176.176 0 0 1-.176-.195C6.055 8.173 9.053 2.21 11.04.02a.07.07 0 0 1 .052-.02zM1.082 0h8.936c.02 0 .032.026.013.04C6.335 3.141 3.42 9.476 2.21 13.823A.24.24 0 0 1 1.98 14h-.9A1.08 1.08 0 0 1 0 12.918V1.082C0 .482.482 0 1.082 0" />
                    </g>
                </svg>
            </Link>

            <div className="site-header__title">Facility portal</div>
        </header>
    );
}
