
import PropTypes from 'prop-types'
const Button = ({onClick, color, text}) => {
    return(
         <button onClick={onClick} 
        style={{backgroundColor:color}}
        className='btn'>{text}</button>
    )
}
Button.defaultProps={
    color:'steelblue',
}
Button.propTypes={
    onClick: PropTypes.func,
    text: PropTypes.string,
    color: PropTypes.string,
}
export default Button
