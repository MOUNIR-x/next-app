export default function Shop({
    params,
}: {
    params : {
        slug : string[]
    }
}) {
    if (params.slug?.length === 0) {
        return (
            <h1> Viewing shop {params.slug[0]} - {params.slug[1]}</h1>
        )
    }else if (params.slug?.length === 1) {
        return (
            <h1> Viewing shop {params.slug[0]} </h1>
        )
    }
    return <h1> Viewing shop </h1>
}