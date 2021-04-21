import React, {FC} from 'react';
import './Search.css';
import {IUser, IPhoto} from "../../types/types"
import Results from '../results/Results';
import Bar from '../bar/Bar';

interface SearchProps {

}

const Search: FC<SearchProps> = 
    ({}) => {
    
    const [isSent, setIsSent] = React.useState(false);      // Отслеживание отправки запроса
    const [isLoad, setIsLoad] = React.useState(false);      // Отслеживание загрузки ответа 
    const [userInfo, setUresInfo] = React.useState<IUser>()    // Данные пользователя
    const [userPhoto, setUserPhoto] = React.useState<IPhoto>();   // Данные о фото пользователя
    const [willClear, setWillClear] = React.useState(false);// Очистка поля результатов
    const [inputValue, setInputValue] = React.useState(''); // Хранение и запись input
    const [error, setError] = React.useState('');           // Ошибка при запросе к базе данных

    const getInfo = (url : string) => {
        return fetch(url)
        .then(res => {
            if (res.ok) {
                return res.json();
            }
            return Promise.reject(console.log(`Ошибка: ${res.status}`));
        })
    }

    React.useEffect(() => {
        const bodyClickHandler = (event: Event) => {
            if (event.target instanceof HTMLElement) {
                !event.target.closest('.Search') && setWillClear(true)
            }
            
        }

        document.body.addEventListener('click', (event) => bodyClickHandler(event));

        return () => document.body.removeEventListener('click', (event) => bodyClickHandler(event));
    }, [])



    //const users: IUser[] = 

    React.useEffect(() => {
        if (isSent) {
            Promise.all([
                getInfo(`https://jsonplaceholder.typicode.com/users`)
                    .then(res => {
                        const users = res.map((user:any) => {
                            return {
                                id: user.id,
                                name: user.name,
                                username: user.username,
                            }
                        })
                        setUresInfo(users);
                        return users
                    })
                ,

                getInfo(`https://jsonplaceholder.typicode.com/photos`)
                    .then(res => {
                        const photo = res.map((photo:any) => {
                            return {
                                id: photo.id,
                                thumbnailUrl: photo.thumbnailUrl,
                            }
                        })
                        setUserPhoto(photo);
                        return photo
                    })
            ])
            .then((res) => {
                console.log(res);
                setTimeout(() => {
                    setIsSent(false);
                    setIsLoad(true);
                }, 100)
            })
            .catch(err => setError(err));
            
        }
    }, [isSent]);

    return (
        <div className="Search">
            <Bar
                setIsSent={setIsSent}
                setIsLoad={setIsLoad}
                setWillClear={setWillClear}
                setInputValue={setInputValue}
                inputValue={inputValue}
            />
            <Results
                errorMessage={error}
                inputValue={inputValue}
                setInputValue={setInputValue}
                willClear={willClear}
                setWillClear={setWillClear}
                users={userInfo}
                photo={userPhoto}
                isSent={isSent}
                isLoad={isLoad}
            />
        </div>
    );
}

export default Search;