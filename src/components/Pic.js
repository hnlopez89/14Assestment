import './Pic.css'

export const Pic = ({title,owner,url}) => {
    return (
        <li>
            <img src={url} />  
            <p>"{title}"</p>
            <p>by: {owner}</p>
        </li>
    )
}