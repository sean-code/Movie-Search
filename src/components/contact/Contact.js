import './Contact.css';

function Contact(){
    return(
        <div className="container">
            <div className="card">
                <h3 className="title">Twitter</h3>
            <div className="bar">
                <div className="emptybar"></div>
                <div className="filledbar"></div>
            </div>
            <div className="circle">
                <a href='https://www.twitter.com/nganga_sea'>
                    @nganga_sea
                </a>
                <svg version="1.1" xmlns="http://www.w3.org/2000/svg">
                <circle className="stroke" cx="60" cy="60" r="50" />
                </svg>
            </div>
        </div>
        <div className="card">
            <h3 className="title">GitHub</h3>
            <div className="bar">
            <div className="emptybar"></div>
            <div className="filledbar"></div>
            </div>
            <div className="circle">
                <a href='https://github.com/sean-code'>
                    @Sean-Code
                </a>
                <svg version="1.1" xmlns="http://www.w3.org/2000/svg">
                <circle className="stroke" cx="60" cy="60" r="50"/>
                </svg>
            </div>
        </div>
        <div className="card">
            <h3 className="title">Instagram</h3>
            <div className="bar">
            <div className="emptybar"></div>
            <div className="filledbar"></div>
            </div>
            <div className="circle">
                <a href='https://www.instagram.com/sean-code'>
                    @its_ngangasean
                </a>
            <svg version="1.1" xmlns="http://www.w3.org/2000/svg">
            <circle className="stroke" cx="60" cy="60" r="50"/>
            </svg>
            </div>
        </div>
        <div className="card">
            <h3 className="title">Email</h3>
            <div className="bar">
                <div className="emptybar"></div>
                <div className="filledbar"></div>
            </div>
            <div className="circle">
            <a href="mailto:email@example.com">
                ngangasean@yahoo.com
            </a>
                <svg version="1.1" xmlns="http://www.w3.org/2000/svg">
                <circle className="stroke" cx="60" cy="60" r="50"/>
                </svg>
            </div>
        </div>
        </div>
    )
}

export default Contact;