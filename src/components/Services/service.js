import React from 'react';
import './service.css';
export default function Services() {
    return (
        <div>
            <div className="background">
                <div className="wrapper">
                    <div className="serHeading">
                        <h1><b>Services</b> we provide</h1>
                    </div>
                    <div className="panel pricing-table">

                        <div className="pricing-plan">
                            <div className="serviceCons">
                                <i class="fas fa-layer-group"></i>
                            </div>
                            <h2 className="pricing-header">creative design</h2>
                            <ul className="pricing-features">
                                <li className="pricing-features-item">Logos</li>
                                <li className="pricing-features-item">broucher</li>
                                <li className="pricing-features-item">Flyer</li>
                                <li className="pricing-features-item">menucard</li>
                                <li className="pricing-features-item">catalogues</li>
                                <li className="pricing-features-item">Id card</li>
                                <li className="pricing-features-item">web designing</li>
                                <li className="pricing-features-item">Animation</li>
                                <li className="pricing-features-item">Hoarding</li>
                            </ul>
                        </div>
                        <div className="pricing-plan">
                                <div className="serviceCons">
                                    <i class="fas fa-print"></i>
                                    </div>
                            <h2 className="pricing-header">quality print</h2>

                            <ul className="pricing-features">

                                <li className="pricing-features-item">Logos</li>
                                <li className="pricing-features-item">broucher</li>
                                <li className="pricing-features-item">Flyer</li>
                                <li className="pricing-features-item">Id card</li>
                                <li className="pricing-features-item">web designing</li>
                                <li className="pricing-features-item">Animation</li>
                                <li className="pricing-features-item">Hoarding</li>
                                <li className="pricing-features-item">menucard</li>
                                <li className="pricing-features-item">catalogues</li>

                            </ul>
                        </div>

                        <div className="pricing-plan">
                        <div className="serviceCons">
                                <i class="fas fa-volume-up"></i>
                        </div>
                            <h2 className="pricing-header">effective ads</h2>
                            <ul className="pricing-features">
                                <li className="pricing-features-item">menucard</li>
                                <li className="pricing-features-item">catalogues</li>
                                <li className="pricing-features-item">Id card</li>
                                <li className="pricing-features-item">Logos</li>
                                <li className="pricing-features-item">broucher</li>
                                <li className="pricing-features-item">Flyer</li>
                                <li className="pricing-features-item">web designing</li>
                                <li className="pricing-features-item">Animation</li>
                                <li className="pricing-features-item">Hoarding</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
