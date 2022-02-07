import React, { useRef, useState } from 'react';
import { useHistory, useLocation } from 'react-router-dom/cjs/react-router-dom.min';
import './AddCampaign.css'

const AddCampaign = () => {
    const history = useHistory()
    const location = useLocation()
    const [name, setName] = useState('');

    const [totalBudget, setTotalBudget] = useState('');
    const [dailyBudget, setDailyBudget] = useState('');
    const [startDate, setStartDate] = useState('');
    const [endDate, setEndDate] = useState('');
    const [image, setImage] = useState(null);

    const url = location.state?.from || "/home"

    const addCampaign = e => {
        e.preventDefault();
        if (!image) {
            return;
        }
        const formData = new FormData();
        formData.append('name', name);
        formData.append('startDate', startDate);
        formData.append('endDate', endDate);
        formData.append('totalBudget', totalBudget);
        formData.append('dailyBudget', dailyBudget);
        formData.append('image', image);

        fetch('https://obscure-basin-95944.herokuapp.com/campaignList', {
            method: 'POST',
            body: formData
        })
            .then(res => res.json())
            .then(data => {
                if (data.insertedId) {
                    alert('New Campaign added successfully')

                }
                history.push(url)
            })
    }
    return (
        <div>
            < div className=" mb-5" >
                <form className="form" onSubmit={addCampaign}  >
                    <label className="label" for="name">
                        <input className="input" type="text" id="name" placeholder="Name" onChange={e => setName(e.target.value)} />
                        <span className="span">Name</span>
                    </label>
                    <label className="label" for="date">
                        <input className="input" type="date" id="date" placeholder="Date" onChange={e => setStartDate(e.target.value)} />
                        <span className="span">Start Date</span>
                    </label>
                    <label className="label" for="date">
                        <input className="input" type="date" id="date" placeholder="Date" onChange={e => setEndDate(e.target.value)} />
                        <span className="span">End Date</span>
                    </label>
                    <label className="label" >
                        <input className="input" type="float" id="totalbudget" placeholder="totalbudget" onChange={e => setTotalBudget(e.target.value)} />
                        <span className="span">Total Budget</span>
                    </label>
                    <label className="label" >
                        <input className="input" type="float" id="dailybudget" placeholder="dailybudget" onChange={e => setDailyBudget(e.target.value)} />
                        <span className="span">Daily Budget</span>
                    </label>
                    <label className="label" >
                        <input className="input" accept="image/*"
                            type="file"
                            onChange={e => setImage(e.target.files[0])} />
                        <span className="span">ChoseFile</span>
                    </label>

                    <button className="button" type="submit">AddCampaign</button>
                </form>
            </div>
        </div>
    );
};

export default AddCampaign;