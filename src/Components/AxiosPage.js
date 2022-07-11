import React from 'react';
import axiosObj from './AxiosInstance'

const AxiosPage = () => {
    const onClickHandler = (e) => {
        console.log('xd')
        axiosObj.post('/marks.json', {name: 'xd', age: 10}).then(response => {
            console.log(response)
        })
    }

    const onClickHandlerGet = (e) => {
        axiosObj.get('/marks.json').then(r => {
            console.log(r.data)
            const fetchedResults = []
            for (let key in r.data) {
                fetchedResults.push({
                    ...r.data[key],
                    id: key
                })
            }
            console.log(fetchedResults)
        })
    }

    return (
        <div>
            <button onClick={onClickHandler}>add</button>
            <button onClick={onClickHandlerGet}>get</button>
        </div>
    );
};

export default AxiosPage;