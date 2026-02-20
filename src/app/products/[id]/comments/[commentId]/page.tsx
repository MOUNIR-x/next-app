import { notFound } from "next/navigation";

export default async function ProductComment({
    params,
}: {
    params: Promise<{
        id: string;
        commentId: string;
    }>;
}) {
    // ✅ On attend params et on extrait les variables
    const { id, commentId } = await params;
    // if id>50 appel de la fonction notFounds
    if (parseInt(id)>50){
        notFound();
    }
    // ✅ On utilise les variables destructurées (pas params.id)
    return (
        <h1>
            Comment {commentId} for product {id}
        </h1>
    );
}