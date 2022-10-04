import './Home.css'


function Home(){
    return(
        <div className='main' id='rotate'>
            <img src='https://images.unsplash.com/photo-1616530940355-351fabd9524b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8bW92aWUlMjBwb3N0ZXJzfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60' />
            <div className='contents'>
                    <h1>Movie Search+<sub>developed by Sean</sub></h1>
                <p>
                    Catch The Latest Movies In High Quality. 
                    <br />Plus With No ADS! Enjoy!!<br /> 
                </p>
            </div>
        </div>
    )
}


export default Home;