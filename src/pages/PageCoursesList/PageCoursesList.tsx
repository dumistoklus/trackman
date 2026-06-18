import { PageHeader } from "../../components/PageHeader/PageHeader.tsx";
import { Button } from "../../components/Button/Button.tsx";
import { PageWrapper } from "../../components/PageWrapper/PageWrapper.tsx";
import { Card, type Props as CardProps } from "../../components/Card/Card.tsx";

import "./PageCoursesList.css";

const cards: CardProps[] = [
    {
        id: "3",
        title: "Pebble Beach Golf Links And King Charles Association",
        place: "California, US",
        difficulty: 4,
        par: "72",
        imageUrl: "/place1.webp",
    },
    {
        id: "4",
        title: "Albany",
        place: "California, US",
        difficulty: 4,
        par: "72",
        featured: true,
        imageUrl: "/place2.jpg",
    },
    {
        id: "5",
        title: "Hidden Canyon",
        place: "California, US",
        difficulty: 4,
        par: "72",
        imageUrl: "/place3.jpg",
    },
    {
        id: "6",
        title: "St. Andrews",
        place: "California, US",
        difficulty: 4,
        par: "72",
        imageUrl: "/place4.avif",
    },
    {
        id: "7",
        title: "Asserbo",
        place: "Copenhagen, Denmark",
        difficulty: 3,
        par: "72",
        imageUrl: "/place5.jpg",
    },
    {
        id: "8",
        title: "Asserbo",
        place: "Copenhagen, Denmark",
        difficulty: 3,
        par: "72",
        imageUrl: "/place6.jpg",
    },
];

export function PageCoursesList() {
    return (
        <div className="page-courses-list">
            <PageHeader title="Courses" subtitle="Browse and add golf courses" />
            <PageWrapper>
                <div className="page-courses-list__actions">
                    <Button href="/courses/new" visualType="primary">
                        Create a course
                    </Button>
                </div>
                <div className="page-courses-list__cards">
                    {cards.map((card) => (
                        <Card {...card} key={card.id} href={`/courses/${card.id}`} />
                    ))}
                </div>
            </PageWrapper>
        </div>
    );
}
