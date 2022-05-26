import FormContainer from "../components/FormContainer"
import ApplicationSteps from "../components/ApplicationSteps"
import { Row,Button,Col,Form} from "react-bootstrap";
import {useNavigate} from "react-router-dom"
import EContactForm from "../components/EContactForm";

const Part2=()=>{
    const navigate=useNavigate()

    const submitHandler=(e)=>{
        e.preventDefault()
        navigate("/part3") 
    }
    return(
        <>
            <ApplicationSteps step1 step2 step3 step4/>
            <h1>Section 5</h1>

            <h4>
                <span>Watu wa kupashwa habari dharura jambo linapotokea</span>
                <br/>
                <span>Particulars of Next of Kin (Person who may be contacted in case of emergency)</span>
            </h4>
            <Row>
                <Col>
                  <EContactForm part={'a)'}/>
                </Col>
                <Col>
                <EContactForm part={'b)'}/>
                </Col>
            </Row>



         
            <Button onClick={submitHandler} type="submit" variant='primary' className="my-3" >Continue</Button>
        </>
    )
    
}
export default Part2