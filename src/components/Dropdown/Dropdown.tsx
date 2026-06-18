import "./Dropdown.css";
import * as React from "react";

export type DropdownItem = {
    id: string;
    title: string;
    icon: string;
    onClick: () => void;
};

type Props = {
    children: React.ReactNode;
    visible: boolean;
    items: DropdownItem[];
};

export function Dropdown({ visible, items, children }: Props) {
    return (
        <div className="dropdown">
            {children}
            <ul className={`dropdown__container ${visible ? "dropdown__container--visible" : ""}`}>
                {items.map((item) => (
                    <li key={item.id} className="dropdown__item">
                        <button onClick={item.onClick} className="dropdown__button">
                            <img src={item.icon} alt="" />
                            <span>{item.title}</span>
                        </button>
                    </li>
                ))}
            </ul>
        </div>
    );
}
