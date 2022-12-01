import './DirectoryItem.scss'
import { useNavigate, Link } from 'react-router-dom'

export default function DirectoryFile({categories}) {
const navigate = useNavigate();
 
 
 return(
<div className="directory-items-container">
        {categories.map(({title, id, imageUrl, route}) => (
          <div key={id} className="directory-item-container">
            <div className="background-image" style={{backgroundImage: `url(${imageUrl}`}}/>
              <Link to={route} className="directory-item-body-container">
                <h2>{title}</h2>
                <p>Shop Now</p>
              </Link>
        </div>
      ))}
    </div>
  )
}