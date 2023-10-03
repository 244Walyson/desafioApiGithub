import './styles.css'

type props = {
    name: string;
    content: string;
}

const DataCard = ({name, content}: props) => {
    const regex = /(https?:\/\/[^\s]+)/;
  return (
    <div className="data-card">
        <p id='bold-p'>{name+ ":"}</p>{regex.test(content) ? <a href={content} target='blank'>{content}</a>: <p id='weak-p'>{content}</p>}
    </div>
  )
}

export default DataCard