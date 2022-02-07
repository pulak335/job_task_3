import React, { useEffect, useState } from 'react';
import './Campaigns.css';
import Swal from 'sweetalert2';

const Campaigns = () => {
    const [campaigns, setCampaigns] = useState([]);
    const [totalBudget, setTotalbudget] = useState("");


    useEffect(() => {
        fetch('https://obscure-basin-95944.herokuapp.com/campaignList')
            .then(res => res.json())
            .then(data => setCampaigns(data))
    }, [])

    //Update 
    // Update TotalBudget
    const handleUpdatedTotalBudget = e => {

        setTotalbudget(e.target.value);
    }


    const handleUpdateBudget = (id, e) => {
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, change it!",
        }).then((result) => {
            if (result.isConfirmed) {
                const url = `https://obscure-basin-95944.herokuapp.com/updateCampaign/${id}`;
                fetch(url, {
                    method: 'PUT',
                    headers: {
                        'content-type': 'application/json'
                    },
                    body: JSON.stringify({ totalBudget })

                })
                    .then(res => res.json())
                    .then(data => {
                        if (data.modifiedCount > 0) {
                            Swal.fire('Update Successful');

                            fetch('https://obscure-basin-95944.herokuapp.com/campaignList')
                                .then(res => res.json())
                                .then(data => setCampaigns(data))

                        }
                    })



            }
        })


    }


    return (
        <div>
            {
                <div className="row row-cols-1 row-cols-md-1 row-cols-lg-3 g-4  ">
                    {

                        campaigns.map(campaign => <div>
                            <div className='campaigns mt-5 mb-4 ms-3 me-3'>

                                <h1 style={{ height: "100px" }}>{campaign.name}</h1>
                                <img
                                    style={{
                                        width: "100%",
                                        height: "300px"
                                    }}
                                    src={`data:image/png;base64,${campaign.image}`} alt="" />

                                <div className='d-flex justify-content-center  '>
                                    <button className="button " data-bs-toggle="modal" data-bs-target={`#s${campaign._id}`}>
                                        PREVIEW
                                    </button>
                                    <div className='ps-3'>
                                        <button style={{ backgroundColor: "blue", color: "white" }} class="button " data-bs-toggle="modal" data-bs-target={`#s1${campaign._id}`}><i style={{ color: "white" }} class="fas fa-edit me-2"></i>
                                            UPDATE
                                        </button>
                                    </div>

                                </div>
                                <div class="modal fade w-100" id={`s${campaign._id}`} tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                                    <div class="modal-dialog" style={{ backgroundColor: "skyblue" }}>
                                        <div class="modal-content">
                                            <div class="modal-header">
                                                <h5 class="modal-title" id="exampleModalLabel">Details Of {campaign.name}</h5>
                                                <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                                            </div>
                                            <div class="modal-body">
                                                <table class="styled-table">
                                                    <thead>
                                                        <tr>
                                                            <th></th>
                                                            <th></th>
                                                        </tr>
                                                    </thead>
                                                    <tbody>
                                                        <tr>
                                                            <td style={{ fontSize: 20 }}>Start-Date</td>
                                                            <td style={{ fontSize: 20 }}>{campaign.dateStart}</td>
                                                        </tr>
                                                        <tr>
                                                            <td style={{ fontSize: 20 }}>End-Date</td>
                                                            <td style={{ fontSize: 20 }}>{campaign.dateEnd}</td>
                                                        </tr>
                                                        <tr class="active-row">
                                                            <td style={{ fontSize: 20 }}>Total-Budget</td>
                                                            <td >$ {campaign.totalBudget}</td>
                                                        </tr>
                                                        <tr>
                                                            <td style={{ fontSize: 20 }}>DailyBudget</td>
                                                            <td style={{ fontSize: 20 }} >$ {campaign.dailyBudget}</td>
                                                        </tr>



                                                    </tbody>
                                                </table>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                            </div>
                            {/* Update */}
                            <div class="modal fade" id={`s1${campaign._id}`} tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                                <div class="modal-dialog">
                                    <div style={{ backgroundColor: "skyblue" }} class="modal-content">
                                        <div class="modal-header">
                                            <h5 class="modal-title" id="exampleModalLabel">Edit  TotalBudget of {campaign.name}</h5>
                                            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                                        </div>
                                        <div class="modal-body">
                                            <form >

                                                <div class="mb-3">
                                                    <label style={{ color: "white", fontSize: 30 }} class="form-label">Campaign Name</label>
                                                    <input type="text" class="form-control" id="name" defaultValue={campaign.name} />
                                                </div>

                                                <div class="mb-3 ">
                                                    <label style={{ color: "white", fontSize: 30 }} class="form-label" for="price">TotalBudget</label>
                                                    <input onChange={handleUpdatedTotalBudget} type="text" class="form-control" id="price" defaultValue={"$", campaign.totalBudget} />

                                                </div>
                                                <div class="mb-3 ">
                                                    <label style={{ color: "white", fontSize: 30 }} class="form-label" for="price">DailyBudget</label>
                                                    <input type="text" class="form-control" id="price" defaultValue={campaign.dailyBudget} />

                                                </div>
                                                <div class="modal-footer d-block">

                                                    <button type="button" onClick={() => handleUpdateBudget(campaign._id)} class="btn btn-primary">Save changes</button>
                                                </div>
                                            </form>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>)
                    }
                </div>
            }

        </div>
    );
};

export default Campaigns;