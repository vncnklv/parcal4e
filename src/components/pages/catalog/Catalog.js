import { useParams } from "react-router-dom";

export const Catalog = () => {
    const { category } = useParams();

    return (
        <main>
            {category} Catalog page
        </main>
    );
}