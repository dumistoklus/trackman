import Star from "../../assets/star.svg";
import Dots from "../../assets/dots.svg";
import { Link } from "react-router";
import { Button } from "../Button/Button.tsx";

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

export function Card({ title, place, difficulty, par, featured, imageUrl, href }: Props) {
    const className = ["card"];
    if (href) {
        className.push("card--editable");
    }

    return (
        <div className={className.join(" ")}>
            {href && <Link to={href} className="card__link" />}

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

            <div className="card__controls">
                <Button visualType="secondary" icon={Dots} />
            </div>
        </div>
    );
}
