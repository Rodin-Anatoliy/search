import React from 'react';
import './Search.css';
import Results from '../results/Results';
import Bar from '../bar/Bar';

function Search() {

    
    const [isSent, setIsSent] = React.useState(false);      // Отслеживание отправки запроса
    const [isLoad, setIsLoad] = React.useState(false);      // Отслеживание загрузки ответа 
    const [userInfo, setUresInfo] = React.useState([]);     // Данные пользователя
    const [userPhoto, setUserPhoto] = React.useState([]);   // Данные о фото пользователя
    const [willClear, setWillClear] = React.useState(false);// Очистка поля результатов
    const [inputValue, setInputValue] = React.useState(''); // Хранение и запись input
    const [error, setError] = React.useState('');           // Ошибка при запросе к базе данных

    function getInfo(url : any) {
        return fetch(url)
        .then(res => {
            if (res.ok) {
                return res.json();
            }
            return Promise.reject(console.log(`Ошибка: ${res.status}`));
        })
    }

    document.addEventListener('click', (event: any) => {
        !event.target.closest('.Search') && setWillClear(true)
    })

    React.useEffect(() => {
        if (isSent) {

            getInfo(`https://jsonplaceholder.typicode.com/users`)
                .then(res => {
                    setUresInfo(res);
                })
                .catch(err => setError(err));
            ;

            getInfo(`https://jsonplaceholder.typicode.com/photos`)
                .then(res => {
                    setUserPhoto(res);
                    setTimeout(() => {
                        setIsSent(false);
                        setIsLoad(true);
                    }, 100)
                })
                .catch(err => setError(err));
            ;
            
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
                error={error}
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