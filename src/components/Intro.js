import React from 'react';
import '../assets/styles/home-page.css';
import imgCell from '../assets/imgCell.jpg';
import imgSell from '../assets/imgSell.jpg';
import imgSecurity from '../assets/imgSecurity.jpg';

const Intro = () => {
    return (
        <div>
            <div className="skew-cc"></div>
            <div className="white-block">
                <div className="row">
                <div className="col-3">
                    <img src={imgCell} alt="Celular" className="img-intro"></img>
                </div>
                <div className="col-9">
                    <h1>Seguridad</h1>
                    <p>aabhygdsfiladhksfbaygilahbag</p>
                </div>   
                </div>
            </div>
            <div className="skew-c"></div>
            <div className="colour-block">
                <div className="row">
                    <div className="col-6">
                        <h1>Seguridad</h1>
                            <p>aabhygdsfiladh
                                ksfbaygigbhyg
                                asdasdasda
                                sdasfgy
                                asdgyudgfoa
                                syiua abhygdsf
                                iladhksfbayg igbhyg
                                aaaaaaa aaaaaaaaa
                                aaaa aaaaaa aaaaa
                                aaaaaaaaaa aaaaaaaaaaaaa aaaaaa
                                aaaaaaaaaa
                                aaaaaaaaaaa
                                aaaaaaaaaaa
                                aaaaa
                                asdasdasdasdasfgy
                                asdgyudgfoasyiu
                            </p>
                    </div> 
                    <div className="col-6">
                        <img src={imgSell} alt="Ventas" className="img-intro"></img>
                    </div>
                </div>
            </div>

            <div className="skew-cc"></div>
            <div className="white-block">                
                <div className="row">
                    <div className="col-3">
                        <img src={imgSecurity} alt="Seguridad" className="img-intro"></img>
                    </div>
                    <div className="col-9">
                        <h1>Seguridad</h1>
                        <p>aabhygdsfiladhksfbaygilahbag</p>
                    </div>   
                    </div>
            </div>
            
        </div>
    )
}
export default Intro;