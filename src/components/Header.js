import PropTypes from 'prop-types'
import Button from './Button'
const Header = ({userName,onAdd,showAdd}) => {
    
    return (
        
        <div>
            <header className='header'>
              <h1>
                  Hello {userName} and wellcome!
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
    userName: "NoName" ,
}
Header.prototype = {
    userName: PropTypes.string.isRequired,
}
export default Header
