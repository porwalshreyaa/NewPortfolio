import React from "react";

const Form = () => {
    return (
        <form  data-bs-theme="dark"
            action="https://script.google.com/macros/s/AKfycbwf83WNB1VoCMkeecqweEBE1DdHuBVyLaHqHMkFIlL4uhDfZsQi7pKNbf81_8nYDf3k/exec"
            method="POST"
            name="google-sheet"
            className="row g-3" style={{backgroundColor:'rgba(0,0,0,0.5)', border:'1px solid grey ', borderRadius:10+'px', padding:15+'px', minWidth: 20 + 'em' }}
        >
              <div className="col-12">


                {/* <label for="Name" className="form-label h6">
                    Name
                </label> */}
                <input style={{  background: 'transparent',
    border: 'none'}}
                    name="Name"
                    className="name form-control"
                    id="Name"
                    required
                    placeholder=":~/name$ <Your Name>"
                    type="text"
                />
                </div>
                
                <div className="col-12">


                {/* <label for="Email" className="form-label h6">
                    Email address
                </label> */}
                
                <input style={{  background: 'transparent',
    border: 'none'}}
                    className="email form-control"
                    name="Email"
                    id="Email"
                    required
                    placeholder=":~/email$ <Your Email>"
                    type="email"
                />
                </div>
                
                <div classNamee="col-12">

                {/* <label for="Message" className="form-label h6">
                    Message
                </label> */}
                
                <textarea style={{  background: 'transparent',
    border: 'none'}}
                    rows="3"
                    className="message form-control"
                    name="Message"
                    id="Message"
                    type="text"
                    required
                    placeholder=":~/message$ <Your Message>"
                />
                
                </div>
                
                <button id="submit" type="submit" className="btn btn-outline-light" value="Submit">Send</button>
            
                
        </form>
    );
};

export default Form;
