import { useState } from 'react';
import './styles.css'
import { Link } from 'react-router-dom';

type props = {
    name: string;
    content: string;
}

const DataCard = ({name, content}: props) => {
    const regex = /(https?:\/\/[^\s]+)/;
  return (
    <div className="data-card">
        <p id='bold-p'>{name+ ":"}</p>{regex.test(content) ? <a href={content}>{content}</a>: <p id='weak-p'>{content}</p>}
    </div>
  )
}

export default DataCard