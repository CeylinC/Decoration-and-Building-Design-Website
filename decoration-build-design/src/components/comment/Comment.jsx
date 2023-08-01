import './Comment.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleUser } from '@fortawesome/free-solid-svg-icons';

function Comment({data: {name, comment, date}}) {
  return (
    <div className="comment">
        <FontAwesomeIcon icon={faCircleUser} className='icon'/>
        <div className="content">
            <h3 className='name'>{name}</h3>
            <p className='comment'>{comment}</p>
            <span className='date'>{date}</span>
        </div>
    </div>
  );
}

export default Comment;
