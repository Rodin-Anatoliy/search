import React, {FC} from 'react';
import './Search.css';
import {IUser, IPhoto} from "../../types/types"
import Results from '../results/Results';
import Bar from '../bar/Bar';
import {NewsApi} from '../../modules/Api'

interface SearchProps {

}

const Search: FC<SearchProps> = 
    ({}) => {
    
    const [isSent, setIsSent] = React.useState(false);      // Отслеживание отправки запроса
    const [isLoad, setIsLoad] = React.useState(false);      // Отслеживание загрузки ответа 
    const [userInfo, setUresInfo] = React.useState([])    // Данные пользователя
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
    const Api = new NewsApi({url:'https://newsapi.org/v2/', key:'2356832b0876432c8814987efd07620a'});
  
    
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
            if (inputValue === '') {
                Api.getLastNews().then(res => {
                    const news = res.articles.map((item:any, index:number) => {
                        return {
                            id: index,
                            name: item.title,
                            username: item.source.name,
                            photo: item.urlToImage,
                        }
                    })
                    setUresInfo(news);
                    return news
                })
                .then((res) => {
                    setTimeout(() => {
                        setIsSent(false);
                        setIsLoad(true);
                    }, 100)
                })
                .catch(err => setError(err));
            } else {
                Api.getNews(inputValue).then(res => {
                    const news = res.articles.map((item:any, index:number) => {
                        return {
                            id: index,
                            name: item.title,
                            username: item.source.name,
                            photo: item.urlToImage,
                        }
                    })
                    setUresInfo(news);
                    return news
                })
                .then((res) => {
                    setTimeout(() => {
                        setIsSent(false);
                        setIsLoad(true);
                    }, 100)
                })
                .catch(err => setError(err));
            }

            
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
                isSent={isSent}
                isLoad={isLoad}
            />
        </div>
    );
}

export default Search;