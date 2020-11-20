import React from 'react';
import Midtown_Manhattan_2019 from '../images/Midtown_Manhattan_2019.jpg';

export default function About() {
     return(
        <div> 
            <h1 class="header-title-other" align="center">About</h1>
            <div className="image1">
            <div className="imagecontainer">
                <img src={Midtown_Manhattan_2019} alt="Midtown_Manhattan_2019" /></div>
            <div class="section-header text-center"></div>
            <div>
            <h3 className="text">Only GITjc is an independent brand based out of the east side of Houston with a 
                flagship store in the heart of the Texas. Only GITjc strives to create quality goods made in usa, 
                produced in limited quantities. Only GITjc draws inspiration from the city, nature, fishing, 
                art & photography.  established in 2019.</h3>
            </div>
            <div>
            <h3 className="LLC-Name">
                GITjc
            </h3>
            <h5 className="address">
                GITjc Flagship Store
                168 Mary St.
                Houston, TX 77000
            </h5>
        </div>
            <div class="footer-list">
            <ul class="list-group list-group-horizontal fontstyle flex-wrap justify-content-center"></ul>
            <ul class="list-group-item"><a href="https://github.com/JC-2020">Jacky Cheung</a></ul>
        </div>
        </div>
        </div>
    );
}