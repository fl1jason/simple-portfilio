import { useState } from 'react';
import PortfilioItem from './PortfilioItem';
import data from '../data/portfolio.json';

function PortfilioList() {

    const [portfolio, setPortfolio] = useState(data);

    const onFilterPortfilio = (e) => {
        const filter = e.target.value.toLowerCase();
        console.log(filter);
        if (filter === '') {
            setPortfolio(data);
        } else {
            const filteredPortfilio = data.filter(item => item.tags.includes(filter));
            setPortfolio(filteredPortfilio);
        }
    }

    return (
        <div className="portfolio-list">
            <div className="portfolio-filter">
                <select onChange={onFilterPortfilio}>
                    <option value="">All</option>
                    <option value="react">React</option>
                    <option value="heroku">Heroku</option>
                    <option value="nextjs">NextJS</option>
                    <option value="firebase">Firebase</option>
                </select>
            </div>
            {
                portfolio.map((item, index) => {
                    return (<PortfilioItem item={item} />)
                })
            }
        </div>
    )
}

export default PortfilioList