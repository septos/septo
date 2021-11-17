// import React from "react"
// import ReactDOM from "react-dom"


function Header() {
    return (
        <header>
            <nav>
                <p>Testing</p>
            {/* isi header */}
            </nav>
        </header>
    )
}

function Maincontent() {
    return (
        <div>
            <p>It's working</p>{/*  isi konten */}
        </div>
    )
}


function Footer() {
    return (
        <footer>
            <small>@ 2021 Septo development. All right reserved</small>
        </footer>
    )
}

// diatas adalah child components

// dibawah ini adalah parent components
function Page() {
    return (
        <div>
            <Header />
            <Maincontent />
            <Footer />
        </div>
    )
}


ReactDOM.render(<Page />, document.getElementById("root"))







// function Page() {
//     return (
//         <ol>
//             <li>It's a popular library, so I'll be 
//             able to fit in with the cool kids!</li>
//             <li>I'm more likely to get a job as a developer
//             if I know React</li>
//         </ol>
//     )
// }



// ReactDOM.render(<Page />, document.getElementById("root"))