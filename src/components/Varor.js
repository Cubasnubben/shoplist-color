import {FaTimes} from 'react-icons/fa'




const Varor = ({ varor, onDelete, onToggle }) => {
  return (
    <div className={ `event ${varor.reminder ? 'reminder' : ''} ` } onDoubleClick={() => onToggle(varor.id)}>
<h3>
    {varor.text}{ '' }
 <FaTimes
  style={{color: 'green', cursor: 'pointer'}}
onClick= {() => onDelete(varor.id)} />
</h3>
<p>{varor.sort}</p>
    </div>
  ) 
}

export default Varor