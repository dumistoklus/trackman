import "./PageHeader.css";

type Props = {
    title: string;
    subtitle?: string;
};

export function PageHeader({ title, subtitle }: Props) {
    return (
        <div className="page-header">
            <div className="page-header__content">
                <h1 className="page-header__title">{title}</h1>
                {Boolean(subtitle) && <p className="page-header__subtitle">{subtitle}</p>}
            </div>
        </div>
    );
}
