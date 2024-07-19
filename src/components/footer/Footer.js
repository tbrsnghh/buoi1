import "./footer.css"
function Footer(props) {
    const x=5
    const {name1, age1} = props
    const arr=[{name:"Le meo", age:3},
        {name:"Le ga", age:5},
        {name:"Le tho", age:7},
    ]
    return(
        <>
            <div className="footer" id="footer1">
                footer1
                <h1>X = {x}</h1>
                <h1> Ten: {name1}</h1>
                <h1> Tuoi: {age1}</h1>
                {
                    arr&&arr.map((item,index) => (<p key={index}>{item.name}</p>))
                }
            </div>
            <div className="footer" id="footer2">
                footer2
            </div>
        </>
    )
}
export default Footer;