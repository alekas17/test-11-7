import './style.css';

export default function Bucket({waterAmount}) {
    console.log(waterAmount);
    const amountToHeight = () => {
        if(waterAmount !== undefined)
            return `${waterAmount.length * 100 / 5}%`
    }
    // const waterDivContent = waterAmount.map((val, index) => <div key={index} className="blue-colored"></div>)
    return (
        <div className="bucket">
            <div className="bathtub">
                <div className="waterDiv">
                    {waterAmount !== undefined && waterAmount.map(val => <div key={val} className="blue-colored"></div>)}
                </div>
                {/* <div className="waterDiv" style={{height: amountToHeight()}}>
                </div> */}
            </div>
            <div className="amountDiv">
                {amountToHeight()}
            </div>
        </div>
    );
};