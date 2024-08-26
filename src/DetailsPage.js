import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import itemsData from './data/items.json';
import './DetailsPage.css';
import Modal from 'react-modal';

// Set up modal styles
Modal.setAppElement('#root'); // Ensure that screen readers can properly navigate

const DetailsPage = () => {
    const { itemName } = useParams();
    const [item, setItem] = useState(null);
    const [reservationForm, setReservationForm] = useState({
        name: '',
        phone: '',
        email: '',
        sizeOfParty: '',
        date: '',
        time: '',
        checkInDate: '',
        checkOutDate: '',
        carType: '',
        pickUpDate: '',
        dropOffDate: '',
    });
    const [modalIsOpen, setModalIsOpen] = useState(false);
    const [confirmationNumber, setConfirmationNumber] = useState('');
    const navigate = useNavigate();

    useEffect(() => {
        const foundItem = itemsData.find(i => i.name === itemName);
        setItem(foundItem);
    }, [itemName]);

    const handleChange = (e) => {
        setReservationForm({
            ...reservationForm,
            [e.target.name]: e.target.value,
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        const isFormComplete = Object.keys(reservationForm).every(key => {
            if (item.type === 'Restaurant' && (key === 'name' || key === 'phone' || key === 'email' || key === 'sizeOfParty' || key === 'date' || key === 'time')) {
                return reservationForm[key] !== '';
            }
            if (item.category === 'Lodging' && (key === 'name' || key === 'phone' || key === 'email' || key === 'checkInDate' || key === 'checkOutDate')) {
                return reservationForm[key] !== '';
            }
            if (item.type === 'Rental Car' && (key === 'name' || key === 'phone' || key === 'email' || key === 'carType' || key === 'pickUpDate' || key === 'dropOffDate')) {
                return reservationForm[key] !== '';
            }
            return true;
        });

        if (isFormComplete) {
            const confirmationNum = Math.floor(Math.random() * 1000000);
            setConfirmationNumber(confirmationNum);
            setModalIsOpen(true);
        } else {
            alert('Please fill out all required fields.');
        }
    };

    const closeModal = () => {
        setModalIsOpen(false);
        navigate('/'); // Navigate back to the home page
    };

    if (!item) return <div>Loading...</div>;

    return (
        <div className="detailsContainer">
            <div className="header">
                <h1>{item.name}</h1>
            </div>
            <div className="detailsContent">
                <div className="info">
                    <img className="image" src={item.imageUrl} alt={item.name} />
                    <div className="description">
                        <strong>Description:</strong> {item.description}
                    </div>
                    <div className="email">
                        <strong>Email:</strong> {item.email}
                    </div>
                    <div className="phone">
                        <strong>Phone:</strong> {item.phone}
                    </div>
                    <div className="address">
                        <strong>Address:</strong> {item.address}
                    </div>
                    <div className="reservation">
                        <strong>Reservation Required:</strong> {item.reservation ? 'Yes' : 'No'}
                    </div>
                </div>
                {item.reservation && (
                    <div className="reservationForm">
                        <h2>Book Your Reservation</h2>
                        <form onSubmit={handleSubmit}>
                            <div className="formGroup">
                                <label htmlFor="name">Name</label>
                                <input id="name" type="text" name="name" value={reservationForm.name} onChange={handleChange} required />
                            </div>
                            <div className="formGroup">
                                <label htmlFor="phone">Phone</label>
                                <input id="phone" type="tel" name="phone" value={reservationForm.phone} onChange={handleChange} required />
                            </div>
                            <div className="formGroup">
                                <label htmlFor="email">Email</label>
                                <input id="email" type="email" name="email" value={reservationForm.email} onChange={handleChange} required />
                            </div>
                            {item.type === 'Restaurant' && (
                                <>
                                    <div className="formGroup">
                                        <label htmlFor="sizeOfParty">Size of Party</label>
                                        <input id="sizeOfParty" type="number" name="sizeOfParty" min="1" value={reservationForm.sizeOfParty} onChange={handleChange} required />
                                    </div>
                                    <div className="formGroup">
                                        <label htmlFor="date">Date</label>
                                        <input id="date" type="date" name="date" value={reservationForm.date} onChange={handleChange} required />
                                    </div>
                                    <div className="formGroup">
                                        <label htmlFor="time">Time</label>
                                        <input id="time" type="time" name="time" value={reservationForm.time} onChange={handleChange} required />
                                    </div>
                                </>
                            )}
                            {item.category === 'Lodging' && (
                                <>
                                    <div className="formGroup">
                                        <label htmlFor="checkInDate">Check-In Date</label>
                                        <input id="checkInDate" type="date" name="checkInDate" value={reservationForm.checkInDate} onChange={handleChange} required />
                                    </div>
                                    <div className="formGroup">
                                        <label htmlFor="checkOutDate">Check-Out Date</label>
                                        <input id="checkOutDate" type="date" name="checkOutDate" value={reservationForm.checkOutDate} onChange={handleChange} required />
                                    </div>
                                </>
                            )}
                            {item.type === 'Rental Car' && (
                                <>
                                    <div className="formGroup">
                                        <label htmlFor="carType">Car Type</label>
                                        <select id="carType" name="carType" value={reservationForm.carType} onChange={handleChange} required>
                                            <option value="SUV">SUV</option>
                                            <option value="Truck">Truck</option>
                                            <option value="Sedan">Sedan</option>
                                            <option value="Coupe">Coupe</option>
                                            <option value="Van">Van</option>
                                        </select>
                                    </div>
                                    <div className="formGroup">
                                        <label htmlFor="pickUpDate">Pick-Up Date</label>
                                        <input id="pickUpDate" type="date" name="pickUpDate" value={reservationForm.pickUpDate} onChange={handleChange} required />
                                    </div>
                                    <div className="formGroup">
                                        <label htmlFor="dropOffDate">Drop-Off Date</label>
                                        <input id="dropOffDate" type="date" name="dropOffDate" value={reservationForm.dropOffDate} onChange={handleChange} required />
                                    </div>
                                </>
                            )}
                            <button type="submit" className="bookButton">Book Now</button>
                        </form>
                    </div>
                )}
            </div>

            <Modal
                isOpen={modalIsOpen}
                onRequestClose={closeModal}
                contentLabel="Reservation Confirmation"
                className="modal"
                overlayClassName="overlay"
            >
                <h2>Reservation Confirmed!</h2>
                <p>Your reservation has been successfully booked.</p>
                <p>Confirmation Number: {confirmationNumber}</p>
                <button onClick={closeModal} className="closeButton">Close</button>
            </Modal>
        </div>
    );
};

export default DetailsPage;
