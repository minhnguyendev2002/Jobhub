import React from 'react';
import styles from "./Banner.module.css";
import {Link} from "react-router-dom";

const Banner = () => {
    return (
    <>
        <div className={`${styles.banner_box} w-100`}>
            <div className="container text-center">
                <div className={`${styles.company_infor} d-flex justify-content-center align-items-center`}>
                    <img src="http://wp.alithemes.com/html/jobhub/frontend/assets/imgs/page/job-single/avatar-job.png" alt="logo" />
                    <div><h3>AliStudio, Inc</h3><Link to="/">alithemes.com</Link></div>
                </div>
                <div className={`${styles.banner_title} d-flex justify-content-center align-items-center flex-column mt-4`}>
                    <h1>Senior UI / UX Designer</h1>
                    <ul className="d-flex align-items-center mt-3">
                        <li><Link to="/">Home</Link></li>
                        <li>/</li>
                        <li><span>Jobs listing</span></li>
                    </ul>
                </div>
            </div>
        </div>
    </>
    );
}
export default Banner;