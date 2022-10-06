import './Contact.css';

function Contact(){
    return(
        <div className="container">
            <div className="card">
            <a href='https://www.twitter.com/nganga_sea' target='_blank'>
                <h3 className="title">Twitter</h3>
            </a>
            <div className="bar">
                <div className="emptybar"></div>
                <div className="filledbar"></div>
            </div>
            <div className="circle">
                <a href='https://www.twitter.com/nganga_sea' target='_blank'>
                    @nganga_sea
                </a>
                <svg version="1.1" xmlns="http://www.w3.org/2000/svg">
                <circle className="stroke" cx="60" cy="60" r="50" />
                </svg>
            </div>
        </div>
        <div className="card">
            <a href='https://github.com/sean-code' target='_blank'>
                <h3 className="title">GitHub</h3>
            </a>
            <div className="bar">
            <div className="emptybar"></div>
            <div className="filledbar"></div>
            </div>
            <div className="circle">
                <a href='https://github.com/sean-code' target='_blank'>
                    @Sean-Code
                </a>
                <svg version="1.1" xmlns="http://www.w3.org/2000/svg">
                <circle className="stroke" cx="60" cy="60" r="50"/>
                </svg>
            </div>
        </div>
        <div className="card">
            <a href='https://www.instagram.com/its_ngangasean' target='_blank'>
                <h3 className="title">Instagram</h3>
            </a>
            <div className="bar">
            <div className="emptybar"></div>
            <div className="filledbar"></div>
            </div>
            <div className="circle">
                <a href='https://www.instagram.com/its_ngangasean' target='_blank'>
                    @its_ngangasean
                </a>
            <svg version="1.1" xmlns="http://www.w3.org/2000/svg">
            <circle className="stroke" cx="60" cy="60" r="50"/>
            </svg>
            </div>
        </div>
        <div className="card">
            <a href="mailto:email@example.com" target='_blank'>
                <h3 className="title">Email</h3>
            </a>
            <div className="bar">
                <div className="emptybar"></div>
                <div className="filledbar"></div>
            </div>
            <div className="circle">
            <a href="mailto:email@example.com" target='_blank'>
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