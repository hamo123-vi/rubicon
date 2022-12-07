export const Empty = () => {

    const sentence: any = process.env.REACT_APP_NO_DATA;
    console.log(process.env.REACT_APP_NO_DATA)

    return(
        <div className="empty">
            {
                sentence
            }
        </div>
    )
}