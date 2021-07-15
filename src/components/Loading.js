import loadingImage from "../images/loading.gif"

const Loading = ({loading}) => {
    if(!loading) return (<></>)
    return (
        <div className="loading">
        <img width="100px" src={loadingImage} alt="Logo" />
        </div>
    )
}

export default Loading