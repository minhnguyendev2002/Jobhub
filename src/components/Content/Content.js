import styles from "./Content.module.css";
import ActionsJob from "../ActionsJob/ActionsJob"

const Content = () => {
    return (
    <>
    <div className={`${styles.Content_box} position-relative`}>
        <div className="container">
            <div className="row">
                <div className={`${styles.Content_inner} col-12 col-lg-8 mx-auto`}>
                    <div className={`${styles.Content_inner_text}`}>
                        <h4>The AliStudio Team</h4>
                        <p>The AliStudio Design team has a vision to establish a trusted platform that enables productive and healthy enterprises in a world of digital and remote everything, constantly changing work patterns and norms, and the need for organizational resiliency.</p>
                        <p>The ideal candidate will have strong creative skills and a portfolio of work which demonstrates their passion for illustrative design and typography. This candidate will have experiences in working with numerous different design platforms such as digital and print forms.</p>

                        <img className="w-100" src="http://wp.alithemes.com/html/jobhub/frontend/assets/imgs/page/job-single/img-job-feature.png" alt="/" />

                        <h4>The AliStudio Team</h4>
                        <ul>
                            <li>A portfolio demonstrating well thought through and polished end to end customer journeys</li>
                            <li>5+ years of industry experience in interactive design and / or visual design</li>
                            <li>Excellent interpersonal skills</li>
                            <li>Aware of trends in mobile, communications, and collaboration</li>
                            <li>Ability to create highly polished design prototypes, mockups, and other communication artifacts</li>
                            <li>The ability to scope and estimate efforts accurately and prioritize tasks and goals independently</li>
                            <li>History of impacting shipping products with your work</li>
                            <li>A Bachelor’s Degree in Design (or related field) or equivalent professional experience</li>
                            <li>Proficiency in a variety of design tools such as Figma, Photoshop, Illustrator, and Sketch</li>
                        </ul>

                        <h4>Preferred Experience</h4>
                        <ul>
                            <li>Designing user experiences for enterprise software / services</li>
                            <li>Creating and applying established design principles and interaction patterns</li>
                            <li>Aligning or influencing design thinking with teams working in other geographies</li>
                        </ul>

                        <h4>Product Designer</h4>
                        <p><strong>Product knowledge: </strong>Deeply understand the technology and features of the product area to which you are assigned.</p>
                        <p><strong>Research: </strong>Provide human and business impact and insights for products.</p>
                        <p><strong>Deliverables: </strong>Create deliverables for your product area (for example competitive analyses, user flows, low fidelity wireframes, high fidelity mockups, prototypes, etc.) that solve real user problems through the user experience.</p>
                        <p><strong>Communication: </strong>Communicate the results of UX activities within your product area to the design team department, cross-functional partners within your product area, and other interested Superformula team members using clear language that simplifies complexity.</p>

                        <div className={`${styles.Content_auth} d-block text-center d-lg-inline-block`}>
                            <span className="position-relative">AliThemes</span>
                        </div>
                    </div>
                    
                    <ActionsJob />
                </div>
            </div>
        </div>
    </div>
    </>
    );
}
export default Content;