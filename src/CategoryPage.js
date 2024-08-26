import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import itemsData from './data/items.json';
import './CategoryPage.css';

const ContentPage = () => {
    const { categoryName } = useParams();
    const [filteredItems, setFilteredItems] = useState([]);
    const [uniqueTypes, setUniqueTypes] = useState([]);
    const [selectedType, setSelectedType] = useState(null);
    const navigate = useNavigate();

    useEffect(() => {
        const itemsInCategory = itemsData.filter(item => item.category === categoryName);
        setFilteredItems(itemsInCategory);

        const types = itemsInCategory.map(item => item.type);
        const uniqueTypes = [...new Set(types)];
        setUniqueTypes(['All', ...uniqueTypes]);

        if (selectedType === 'All' || selectedType === null) {
            setFilteredItems(itemsInCategory);
        } else {
            const filtered = itemsInCategory.filter(item => item.type === selectedType);
            setFilteredItems(filtered);
        }
    }, [categoryName, selectedType]);

    const handleFilterClick = (type) => {
        setSelectedType(type);
    }

    const handleDetailsClick = (item) => {
        navigate(`/details/${item.name}`, {state: {item}});
    }

    return (
        <div className="categoryContainer">
            <h1 className="categoryTitle">{categoryName}</h1>

            <ul className="categoryTypeList">
                {uniqueTypes.map(type => (
                    <li
                        key={type}
                        className="categoryTypeItem"
                        onClick={() => handleFilterClick(type)}
                    >
                        {type}
                    </li>
                ))}
            </ul>

            <div className="categoryCards">
                {filteredItems.map(item => (
                    <div className="categoryCard" key={item.name}>
                        <img className="categoryImage" src={item.imageUrl} alt={item.name} />
                        <div className="categoryCardContent">
                            <h2 className="categoryName">{item.name}</h2>
                            <p className="categoryDescription">{item.description}</p>
                            <div className="categoryDetails">
                                <div className="categoryEmail">Email: {item.email}</div>
                                <div className="categoryPhone">Phone: {item.phone}</div>
                                <div className="categoryAddress">Address: {item.address}</div>
                                <div className="categoryReservation">Reservation: {item.reservation ? 'Yes' : 'No'}</div>
                            </div>
                            <button className="categoryBookNowButton" onClick={() => handleDetailsClick(item)}>Details</button>
                        </div>
                    </div>
                ))}
            </div>
        </div>

    );
};

export default ContentPage;
