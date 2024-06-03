import { useDispatch, useSelector } from "react-redux"

const Show = ({ title, images, price, }) => {
    const { count } = useSelector((s) => s.Countreducer)

    const dispatch = useDispatch()
    const totalcast = price * count
    return (
        <>
            <div className="card">
                <h1>{title}</h1>
                {images.map((image, index) => {
                    return (
                        <img src={image} alt={title} key={index} />
                    )
                })}
                <h1>{price}</h1>
                <h1>Qty:{count}</h1>
                <h1>Totalcost:{totalcast}</h1>

                <button onClick={() => dispatch({ "type": "add" })}>+Qty</button>
                <button onClick={() => dispatch({ "type": "sub" })}>-Qty</button>
            </div>
        </>
    )
}

export default Show
