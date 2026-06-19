import "./FormHeader.css";

type Props = {
    title: string;
    subtitle?: string;
};

export function FormHeader({ title, subtitle }: Props) {
    return (
        <div className="form-header">
            <h2 className="form-header__title">{title}</h2>
            {subtitle && <p className="form-header__subtitle">{subtitle}</p>}
        </div>
    );
}
