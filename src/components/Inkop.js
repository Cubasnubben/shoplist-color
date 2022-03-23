import Varor from './Varor'



const Inkop = ({ inkop, onDelete, onToggle }) => {


  return (
    <>
 {inkop.map((varor) => (
 <Varor
  key={varor.id}
  varor={varor}
  onDelete={onDelete} 
  onToggle={onToggle} 
  />
 ))}
    </>
  )
}

export default Inkop
