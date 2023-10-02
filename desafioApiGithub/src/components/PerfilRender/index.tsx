import { useEffect, useState } from 'react';
import './styles.css'
import { useParams } from 'react-router-dom';
import { findUser } from '../../service/GithubService';
import DataCard from '../DataCards';
import UserError from '../../routes/UserError';

type githubApi = {
    id: number;
    name: string;
    followers: number;
    avatar_url: string;
    url: string;
    location: string;
}

const PerfilRender = () => {

    const params = useParams()
    const [user, setUser] = useState<githubApi | undefined>()

    useEffect(() => {
        const data = findUser(String(params.username))
        data.then(response => {
            setUser(response.data)
        }).catch(error => {
            setUser(undefined)
            console.log(error)
        })
    }, [params])

    return (
        <div className="container">
            {user ?
                <>
                    <div className="perfil-render">
                        <div className="perfil-img">
                            <img src={user.avatar_url} alt="" />
                        </div>
                        <div className='perfil-informations'>
                            <h3>Informações</h3>
                            <div className="perfil-content">
                                <div className="data-card-top"><DataCard name='Perfil' content={(user.url)}></DataCard></div>
                                <div className="data-card-top"><DataCard name='Seguidores' content={(String(user.followers))}></DataCard></div>
                                <div className="data-card-top"><DataCard name='Localidade' content={(user.location)}></DataCard></div>
                                <div className="data-card-top"><DataCard name='Nome' content={(user.name)}></DataCard></div>
                            </div>
                        </div>
                    </div>
                </>
                :
                <div className="error">
                    <UserError></UserError>
                </div>
            }
        </div>
    )
}

export default PerfilRender