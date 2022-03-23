import PropTypes from 'prop-types';
import Button from './Button';


const Header = ({ title, onAdd, showAdd }) => {



    return (
        <header className='header'>
            <h1>{title}</h1>
            <Button
                color={showAdd ? 'hotpink' : 'green'}
                text={showAdd ? 'Stäng' : 'Lägg till'}
                onClick={onAdd} />

        </header>

    )
}

Header.defaultProps = {
    title: 'Inköpslista ',
}
Header.propTypes = {
    title: PropTypes.string.isRequired,
}

// CSS in JS
// const headingStyle = {
//     color: 'steelblue',
// }

export default Header

