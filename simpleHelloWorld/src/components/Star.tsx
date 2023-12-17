export const Star = ({stars}) => {
    let starscount= ""
    for (let i = 0; i < stars; i++) {
        starscount += " * "
    }
    return <p><span className="text-5xl text-yellow-600">{starscount} </span> </p>
}