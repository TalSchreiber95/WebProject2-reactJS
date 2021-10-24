import PropTypes from 'prop-types'
import Button from './Button'
const Header = (props) => {
    const onClick= (e)=>{console.log('click')}
    
    return (
        <div>
            <header className='header'>
              <h1>
                  Hello {props.title} and wellcome!
              </h1>  
                <Button onClick={onClick} 
                color='green' text="Add"/>
            </header>
        </div>
    )
}
Header.defaultProps = {
    title: "NoName" ,
}
Header.prototype = {
    title: PropTypes.string.isRequired,
}
export default Header
