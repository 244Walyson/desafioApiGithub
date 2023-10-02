import './styles.css'

type prop = { 
    text: string;
}
const ButtonPrimary = ({text}: prop) => {
  return (
    <button className='button-primary'>{text}</button>
  )
}

export default ButtonPrimary