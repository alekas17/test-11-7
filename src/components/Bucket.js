import './style.css';

export default function Bucket({amount}) {
    const amountToHeight = () => {
        return `${amount * 100 / 5}%`
    }
    return (
        <div className="bucket">
            <div className="bucketDiv">
                <div className="waterDiv" style={{height: amountToHeight()}}>
                </div>
            </div>
            <div className="amountDiv">
                {amountToHeight()}
            </div>
        </div>
    );
};