import React from 'react'

const Footer = () => {
    return(
        <div className="footer">
            <div className="container-fluid">
                <div className="row">
                    <div className="col-md-3">
                     <div className="design-by">
                         <p>Design by ridianur 2019 with alot of Coffee.</p>
                     </div>
                    </div>
                    <div className="col-md-6">
                        <div className="address-area">
                        <div className="address">
                            <p><i class="fa fa-home" aria-hidden="true"></i> Buah Batu Street 886 - ID+122 - 000 - 000</p>
                        </div>
                        <div className="address">
                            <p><i class="fa fa-phone" aria-hidden="true"></i> +122 - 000 - 000</p>
                        </div>
                        <div className="address">
                            <p><i class="fa fa-envelope" aria-hidden="true"></i> test@gmail.com</p>
                        </div>
                        </div>
                    </div>
                    <div className="col-md-3">
                        <div className="socail-footer">
                        <i class="fa fa-facebook" aria-hidden="true"></i>
                        <i class="fa fa-twitter" aria-hidden="true"></i>
                        <i class="fa fa-instagram" aria-hidden="true"></i>
                        <i class="fa fa-youtube-play" aria-hidden="true"></i>
                        <i class="fa fa-linkedin" aria-hidden="true"></i>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Footer;