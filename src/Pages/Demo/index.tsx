import { FC } from "react";
import './style.css'

const Demo : FC = () => {
    return (
        <div>
            <div className="a b">
                A TO B
            </div>
            <div className="b a">
                B TO A
            </div>
        </div>
    )
}

export default Demo;