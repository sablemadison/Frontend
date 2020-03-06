import React, { useState } from "react";
import styled from 'styled-components';
import './NewAuction.css';
import axios from "axios";
// import { Link } from 'react-router-dom';
import water2 from './images/water2.jpg';

const StyledDiv = styled.div`
width: 800px;
height: 500px;
margin 0 auto;

background-image: url('./images/computer.jpg');
opacity: .9;
`
const StyledDiv2 = styled.div`
display:flex;
justify-content: space-between;
margin-top: 60px;
margin-right: 5px;
`
const StyledDiv1 = styled.div`
width: 800px;
height: 700px;
background-color: rgba(235,235,235, .1);
margin-top: 20px;
margin-bottom: 150px;
`
const NewAuction = props => {
    const [auction, setAuction] = useState({auction_title: '', auction_description: '', id: '', pictures_id:'', current_price:''})

    const handleChange = event => {
        setAuction({...auction, [event.target.name]: event.target.value})
    }
    const handleSubmit = event => {
        event.preventDefault();
        console.log(auction.auction_title);
        console.log(auction.auction_description);
        console.log(auction.id);
        console.log(auction.pictures_id);
        console.log(auction.current_price)
        axios.post('https://silent-auction-69.herokuapp.com/api/items', auction)
        .then(res => {
            console.log('res:', res)
        })
        .catch(err => {
            console.log('error:', err)
        })

        axios.post('https://silent-auction-69.herokuapp.com/api/pictures', auction.pictures_id)
        .then(res2 => {console.log('res2:',res2)
        
        })
        .catch(err2 => {
            console.log('error2:', err2)
        })
    }

    return (
        <div>
        <div className="navigation">	
    <img src={water2} className="jumping-whale" alt="Whale" />
	<nav>
	
	<ul>
	{/* <Link to={null}>Home</Link>
    <Link to={null}>Create Auction</Link>
    <Link to={null}>About us</Link>
	<Link to={null}>Logout</Link>
	<Link to={null}>Profile</Link> */}
	
	</ul>
	</nav>
  </div>
        <StyledDiv id="mainDiv">
        <StyledDiv1 id="div1">
            <form onSubmit={event => handleSubmit(event)}>
                <StyledDiv2>
             <label>Auction Title
               <input type="text"
               name="auction_title"
               placeholder="title"
               onChange={event => handleChange(event)}
               />
            
             </label>
             </StyledDiv2>
             <StyledDiv2>
            <label> Description
               <input type="text" 
               name="item_description"
               placeholder="description"
               onChange={event => handleChange(event)}
               />
               
            </label>
            </StyledDiv2>
            <StyledDiv2>
            <label>Auction ID
               <input type="text"
               pattern="[0-9]"
               name="auctions_id"
               placeholder="auction id"
               onChange={event => handleChange(event)}
               />
             </label>
             </StyledDiv2>
             <StyledDiv2>
            <label>Photo URL
               <input type="text"
               name="pictures_id"
               placeholder="url"
               onChange={event => handleChange(event)}
               />
             </label>
             </StyledDiv2>
             <StyledDiv2>
            <label>Starting Bid
               <input type="text"
               name="current_price"
               placeholder="starting bid"
               onChange={event => handleChange(event)}
               />
             </label>
             </StyledDiv2>
             <div>
                 <StyledDiv2>
               <button>Create Auction</button>
               </StyledDiv2>
               </div>
            </form>
            </StyledDiv1>
        </StyledDiv>
        </div>
    )
}


export default NewAuction;