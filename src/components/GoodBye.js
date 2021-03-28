import React from 'react';
function GoodBye() {
    return (
        <div class="row">
            <div class="column w3-border w3-border-blue">
                <img src="images/profile.jpg" alt="who?" style={{width:"50%"}}></img>
            </div>
                 
            <div class="column ">
                 <div class="w3-container w3-blue ">
                    <h2>Put your email address in here for your goodbye!</h2>
                </div>

                <form class="w3-container">
                    <br/>
                    <label class="w3-text-blue"><b>Email Address</b></label>
                    <input class="w3-input w3-border w3-light-grey" type="text" name="emailAddr"></input>
                    <br/>

                    <button class="w3-btn w3-blue" onclick="onSubmitButtonClick" >Submit</button>
                    <button class="w3-btn w3-blue">Reset</button>
                </form>
                
                <div class="w3-container invisible" id="response-div">
                    
                    <textarea 
                              name="response" 
                              id="response" 
                              placeholder="Response will appear here"
                    >
                    </textarea>
                        
                </div>
                
            </div>
            </div>
    );
}

export default GoodBye;