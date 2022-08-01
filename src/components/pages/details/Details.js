import { useParams } from "react-router-dom";

export const Details = () => {
    const { id } = useParams();

    return (
        <main>
            Details page - {id}
        </main>
    );
}