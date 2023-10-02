import './styles.css'

type props = {
    name: string;
    content: string;
}

const DataCard = ({name, content}: props) => {
  return (
    <div className="data-card">
        <p id='bold-p'>{name+ ":"}</p><p id='weak-p'>{content}</p>
    </div>
  )
}

export default DataCard