import {useState} from "react";
import styles from "./InforJob.module.css";
import Actions from "../ActionsJob/ActionsJob";

const InforJob = () => {
    const [infor] = useState({
        job_type:"Full-time / Remote",
        location:"Dallas, Texas Remote Friendly",
        salary:"$35k - $45k",
        date_post:"1 hours ago",
        expiration_date:"April 06, 2022",
        job_title:"Designer"
    })
    return (
    <>
        <div class={styles.InforJob_Box}>
            <div className="container">
                <div className="row">
                    <div className="col-sm-12 col-lg-10 m-auto">
                        <div className={`${styles.InforJob_Box_inner} d-flex flex-wrap`}>
                            <div className="row justify-content-center">
                                <div className={`${styles.InforJob_Box_item} col-12 col-sm-6 col-md-4 col-lg-4 d-flex justify-content-center`}>
                                    <div className={`${styles.InforJob_Box_inner_icon}`}>
                                        <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="feather feather-briefcase"><rect x={2} y={7} width={20} height={14} rx={2} ry={2} /><path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16" /></svg>
                                    </div>
                                    <div className={`${styles.InforJob_Box_text_infor} px-2`}>
                                        <span className="d-block">Job Type</span>
                                        <h5>{infor.job_type}</h5>
                                    </div>
                                </div>
                                <div className={`${styles.InforJob_Box_item} col-12 col-sm-6 col-md-4 col-lg-4 d-flex justify-content-center`}>
                                    <div className={`${styles.InforJob_Box_inner_icon}`}>
                                        <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="feather feather-briefcase"><rect x={2} y={7} width={20} height={14} rx={2} ry={2} /><path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16" /></svg>
                                    </div>
                                    <div className={`${styles.InforJob_Box_text_infor} px-2`}>
                                        <span className="d-block">Job Title</span>
                                        <h5>{infor.job_title}</h5>
                                    </div>
                                </div>
                                <div className={`${styles.InforJob_Box_item} col-12 col-sm-6 col-md-4 col-lg-4 d-flex justify-content-center`}>
                                    <div className={`${styles.InforJob_Box_inner_icon}`}>
                                        <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="feather feather-dollar-sign"><line x1={12} y1={1} x2={12} y2={23} /><path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" /></svg>
                                    </div>
                                    <div className={`${styles.InforJob_Box_text_infor} px-2`}>
                                        <span className="d-block">Salary</span>
                                        <h5>{infor.salary}</h5>
                                    </div>
                                </div>
                                <div className={`${styles.InforJob_Box_item} col-12 col-sm-6 col-md-4 col-lg-4 d-flex justify-content-center`}>
                                    <div className={`${styles.InforJob_Box_inner_icon}`}>
                                        <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="feather feather-map-pin"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" /><circle cx={12} cy={10} r={3} /></svg>
                                    </div>
                                    <div className={`${styles.InforJob_Box_text_infor} px-2`}>
                                        <span className="d-block">Location</span>
                                        <h5>{infor.location}</h5>
                                    </div>
                                </div>
                                <div className={`${styles.InforJob_Box_item} col-12 col-sm-6 col-md-4 col-lg-4 d-flex justify-content-center`}>
                                    <div className={`${styles.InforJob_Box_inner_icon}`}>
                                        <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="feather feather-clock"><circle cx={12} cy={12} r={10} /><polyline points="12 6 12 12 16 14" /></svg>
                                    </div>
                                    <div className={`${styles.InforJob_Box_text_infor} px-2`}>
                                        <span className="d-block">Date posted</span>
                                        <h5>{infor.date_post}</h5>
                                    </div>
                                </div>
                                <div className={`${styles.InforJob_Box_item} col-12 col-sm-6 col-md-4 col-lg-4 d-flex justify-content-center`}>
                                    <div className={`${styles.InforJob_Box_inner_icon}`}>
                                        <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="feather feather-alert-circle"><circle cx={12} cy={12} r={10} /><line x1={12} y1={8} x2={12} y2={12} /><line x1={12} y1={16} x2="12.01" y2={16} /></svg>
                                    </div>
                                    <div className={`${styles.InforJob_Box_text_infor} px-2`}>
                                        <span className="d-block">Expiration date</span>
                                        <h5>{infor.expiration_date}</h5>
                                    </div>
                                </div>
                            </div>

                            <Actions />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </>
    );
}
export default InforJob;