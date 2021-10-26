import PropTypes from 'prop-types'
import Button from './Button'
const Header = ({Name,onAdd,showAdd}) => {
    return (
        
        <div>
            <header className='header'>
              <h1>
                  Hello {Name} and wellcome!
              </h1>  
            
                <Button 
                color={showAdd? "red" : 'green'}
                text={showAdd ? "Close" : 'Add'}
                    onClick={onAdd} />
            </header>
        </div>
    )
}
Header.defaultProps = {
    Name: "NoName" ,
}
Header.prototype = {
    userName: PropTypes.string.isRequired,
}
export default Header
