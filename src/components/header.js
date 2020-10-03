import React from 'react';

function Header() {
    return (

        <div>
        {/* <h1>This is header part</h1>
        <Welcome></Welcome> */}
        <h2> this is second heading</h2>
        <h1>JSP123</h1>
        <h2>javascript expressions : {10+10}</h2>
        </div>
    );
}

var Welcome =()=>{
    return <p> This is the welcome page</p>;
}

export default Header;