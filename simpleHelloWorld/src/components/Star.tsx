export const Star = ({stars}) => {
    let starscount= ""
    for (let i = 0; i < stars; i++) {
        starscount += " * "
    }
    return <p>Ratings : {starscount}</p>
}