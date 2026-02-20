// app/shop/[...slug]/page.tsx

export default async function Shop({
    params,
}: {
    params: 
    Promise<{ slug: string[] }>; // ⚠️ params est une Promise
}) {
    // ⚠️ Il faut attendre la résolution de params
    const { slug } = await params;

    // Maintenant tu peux utiliser slug normalement
    if (!slug || slug.length === 0) {
        return <h1>Viewing shop</h1>;
    }
    
    if (slug.length === 1) {
        return <h1>Viewing shop {slug[0]}</h1>;
    }

    return (
        <h1>
            Viewing shop {slug[0]} - {slug[1]}
        </h1>
    );
}