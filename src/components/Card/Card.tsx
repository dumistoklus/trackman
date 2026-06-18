import Star from "../../assets/star.svg";
import Dots from "../../assets/dots.svg";
import EditIcon from "../../assets/edit.svg";
import TrashIcon from "../../assets/trash.svg";
import { Link, useNavigate } from "react-router";
import { Button } from "../Button/Button.tsx";
import { Dropdown, type DropdownItem } from "../Dropdown/Dropdown.tsx";
import { useEffect, useMemo, useRef, useState } from "react";

import "./Card.css";

export type Props = {
    id: string;
    href?: string;
    title: string;
    place: string;
    difficulty: number;
    par: string;
    featured?: boolean;
    imageUrl?: string;
};

export function Card({ title, place, difficulty, par, featured, imageUrl, href, id }: Props) {
    const className = ["card"];
    if (href) {
        className.push("card--editable");
    }

    const cardRef = useRef<HTMLDivElement | null>(null);
    const linkRef = useRef<HTMLAnchorElement | null>(null);
    const navigate = useNavigate();
    const [isDropdownVisible, setDropdownVisibility] = useState(false);

    function toggleDropdown() {
        setDropdownVisibility((isDropdownVisible) => !isDropdownVisible);
    }

    const dropdownItems = useMemo(
        () =>
            [
                {
                    id: "edit",
                    icon: EditIcon,
                    onClick: () => {
                        navigate(`/courses/${id}`);
                    },
                    title: "Edit",
                },
                {
                    id: "delete",
                    icon: TrashIcon,
                    onClick: () => {
                        // TODO: implement the deletion
                        console.log("delete");
                    },
                    title: "Delete",
                },
            ] as DropdownItem[],
        [id, navigate]
    );

    useEffect(() => {
        const container = cardRef.current;

        if (container) {
            const hideDropdown = () => setDropdownVisibility(false);

            container.addEventListener("mouseleave", hideDropdown);

            return () => {
                container.removeEventListener("mouseleave", hideDropdown);
            };
        }
    }, []);

    useEffect(() => {
        const link = linkRef.current;

        if (link) {
            const showDropdown = () => setDropdownVisibility(true);

            link.addEventListener("focus", showDropdown);

            return () => {
                link.removeEventListener("focus", showDropdown);
            };
        }
    }, []);

    return (
        <div className={className.join(" ")} ref={cardRef}>
            {href && <Link to={href} className="card__link" ref={linkRef} />}

            <div className="card__wrapper">
                {featured && (
                    <div className="card__featured">
                        <img src={Star} alt="" />
                        Featured
                    </div>
                )}

                <div className="card__image-wrapper">
                    <img src={imageUrl} alt="" className="card__img" />
                </div>

                <div className="card__info">
                    <h3 className="card__title">{title}</h3>
                    <p className="card__place">{place}</p>
                    <p className="card__meta">
                        <span className="card__meta-block">Par: {par}</span>
                        <span className="card__meta-block">Difficulty: {difficulty}</span>
                    </p>
                </div>
            </div>

            {href && (
                <div className="card__controls">
                    <Dropdown visible={isDropdownVisible} items={dropdownItems}>
                        <Button visualType="secondary" icon={Dots} onClick={toggleDropdown} />
                    </Dropdown>
                </div>
            )}
        </div>
    );
}
