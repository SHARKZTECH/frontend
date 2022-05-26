import FormContainer from "../components/FormContainer"
import ApplicationSteps from "../components/ApplicationSteps"
import { Row,Button,Col,Form} from "react-bootstrap";
import {useNavigate} from "react-router-dom"
import DatePicker from 'react-date-picker';
import React, { useState } from 'react';

const Part1=()=>{
    const navigate=useNavigate()
    const [value, onChange] = useState(new Date());


    const submitHandler=(e)=>{
        e.preventDefault()
        navigate("/part2") 
    }
    return(
        <>
            <ApplicationSteps step1 step2 step3/>
            <h1>Section 1</h1>
            <Row>
                <Col>

                <Form.Group controlId='name'>
                <Form.Label>
                    <span>Majina Kamili</span>
                    <br/>
                    <span>Full Names</span>
                </Form.Label>
                <Form.Control
                required
                type="text"
                placeholder="eg:Empiror Sharkz Reigns"               
                ></Form.Control>
               </Form.Group> 


               <Form.Group controlId='place'>
                <Form.Label>
                    <span>Mahali pa kuzaliwa</span>
                    <br/>
                    <span>Place of birth</span>
                </Form.Label>
                <Form.Control
                required
                type="text"
                placeholder="eg:M/b"               
                ></Form.Control>
               </Form.Group> 
            
               <Form.Group controlId='bdate'>
                <Form.Label>
                    <span>Tarehe ya Kuzaliwa</span>
                    <br/>
                    <span>Date of birth</span>
                </Form.Label>
                <div>
                <DatePicker onChange={onChange} value={value} />
                </div>
               </Form.Group> 

               <Form.Group controlId='id'>
                <Form.Label>
                    <span>Nambari ya Kodi</span>
                    <br/>
                    <span>Personal Identification Number(PIN)</span>
                </Form.Label>
                <Form.Control
                required
                type="number"
                placeholder="eg: 38292827"               
                ></Form.Control>
              </Form.Group>

              <Form.Group controlId='name'>
                <Form.Label>
                    <span>Iwapo jina limebadilishwa kwa sababu nyingine mbali na ya ndoa,andika jina lako la zamani:</span>
                    <br/>
                    <span>If name has been changed other than by marriage, state original name:</span>
                </Form.Label>
                <Form.Control
                required
                type="text"
                placeholder="eg: Empiror Sharkz Reigns"               
                ></Form.Control>
              </Form.Group>

              <Form.Group controlId='poster'>
                <Form.Label>
                    <span>Anwani ya posta</span>
                    <br/>
                    <span>Postal Address</span>
                </Form.Label>
                <Form.Control
                required
                type="number"
                placeholder="eg: 6666-0001"               
                ></Form.Control>
              </Form.Group>

              <Form.Group controlId='phone'>
                <Form.Label>
                    <span>Nambari ya simu</span>
                    <br/>
                    <span>Tel. No.</span>
                </Form.Label>
                <Form.Control
                required
                type="number"
                placeholder="eg: 0707070707"               
                ></Form.Control>
              </Form.Group>
              
              <h3>Mahali unapoishi/Residential address:</h3>
              <Form.Group controlId='sblocation'>
                <Form.Label>
                    <span>Eneo la Makazi au Mtaa</span>
                    <span>/Estate /Sublocation</span>
                </Form.Label>
                <Form.Control
                required
                type="text"
                placeholder="eg: Caren"               
                ></Form.Control>
              </Form.Group>

              <Form.Group controlId='plt'>
                <Form.Label>
                    <span>Nambari ya Ploti</span>                 
                    <span>/Plot No/ Hse. No./ Kijiji/ Village</span>
                </Form.Label>
                <Form.Control
                required
                type="text"
                placeholder="eg: Caren"               
                ></Form.Control>
              </Form.Group>

              <Form.Group controlId='phone'>
                <Form.Label>
                    <span>Nambari ya simu ya Nyumbani</span>             
                    <span>/Home Tel No</span>
                </Form.Label>
                <Form.Control
                required
                type="number"
                placeholder="eg: 0707070707"               
                ></Form.Control>
              </Form.Group>

              <Form.Group controlId='email'>
                <Form.Label>
                    <span>Barua Pepe</span>                   
                    <span>/Tel. No.</span>
                </Form.Label>
                <Form.Control
                required
                type="email"
                placeholder="eg: sharkz@gmail.com"               
                ></Form.Control>
              </Form.Group>

              <Form.Group controlId='phone'>
                <Form.Label>
                    <span>Simu ya Mkono</span>                  
                    <span>/Mobile phone Numbe</span>
                </Form.Label>
                <Form.Control
                required
                type="number"
                placeholder="eg: 0707070707"               
                ></Form.Control>
              </Form.Group>

              <h4>Section 2</h4>

              <Form.Group controlId='phone'>
                <Form.Label>
                    <span>Mwananchi wa Kenya kwa: (Chagua neno lifaalo)</span>  
                    <br/>                
                    <span>Citizen by: (Tick the appropriate box)</span>
                </Form.Label>
                <div key={"inline-radio"} className="mt-1">
                  <Form.Check
                  inline
                  label='Kuzaliwa/Birth'
                  name="group1"
                  type="radio"
                  id="inline-radio-1"
                  ></Form.Check>
                     <Form.Check
                  inline
                  label='Ukoo/Decent'
                  name="group1"
                  type="radio"
                  id="inline-radio-2"
                  ></Form.Check>
                     <Form.Check
                  inline
                  label='Kujiandikisha/Naturalisation'
                  name="group1"
                  type="radio"
                  id="inline-radio-3"
                  ></Form.Check>
                </div>           
              </Form.Group>

              <h4>Section 3</h4>
              <h5>Hali ya Ndoa/Marital Status:</h5>
              <Form.Group controlId='plt'>
                <Form.Label>
                    <span>Taja kama umeoa/olewa, hujaolewa ,Umetaliki/Talikiwa/Umetengana au Mjane:</span>   
                    <br/>              
                    <span>Married, Single, Widowed, Separated or Divorced:</span>
                </Form.Label>
                <Form.Control
                required
                type="text"
                ></Form.Control>
              </Form.Group>
              <Form.Group controlId='plt'>
                <Form.Label>
                    <span>Majina kamili ya mke/mume</span> 
                    <br/>                
                    <span>Spouse’s full names</span>
                </Form.Label>
                <Form.Control
                required
                type="text"
                ></Form.Control>
              </Form.Group>
              <Form.Group controlId='mn'>
                <Form.Label>
                    <span>Jina la usichana(pale inapohusu)</span>  
                    <br/>               
                    <span>Maiden name</span>
                </Form.Label>
                <Form.Control
                required
                type="text"
                ></Form.Control>
              </Form.Group>
              <Form.Group controlId='dp'>
                <Form.Label>
                    <span>Tarehe na mahali pa kuoa/kuolewa</span>
                    <br/>                 
                    <span>Date and place of marriage</span>
                </Form.Label>
                <Form.Control
                required
                type="text"
                ></Form.Control>
              </Form.Group>

              <h4>Section 4</h4>
              <Form.Group controlId='r'>
                <Form.Label>
                    <span>Sababu ya kusafiri</span>
                    <br/>                 
                    <span>Reason for travel</span>
                </Form.Label>
                <Form.Control
                required
                type="text"
                ></Form.Control>
              </Form.Group>

              

                </Col>

                <Col>

                <Form.Group controlId='id'>
                <Form.Label>
                    <span>Nambari Ya Kitambulisho</span>
                    <br/>
                    <span>Identity Card Numbe</span>
                </Form.Label>
                <Form.Control
                required
                type="number"
                placeholder="eg: 38292827"               
                ></Form.Control>
              </Form.Group>

              <Form.Group controlId='country'>
                <Form.Label>
                    <span>Nchi unayoishi</span>
                    <br/>
                    <span>Country of residence</span>
                </Form.Label>
                <Form.Control
                required
                type="text"
                placeholder="eg: Kenya"               
                ></Form.Control>
              </Form.Group> 

              <Form.Group controlId='job'>
                <Form.Label>
                    <span>Kazi</span>
                    <br/>
                    <span>Profession/Occupation</span>
                </Form.Label>
                <Form.Control
                required
                type="text"
                placeholder="eg: Programmer"               
                ></Form.Control>
              </Form.Group> 

              <Form.Group controlId='id'>
                <Form.Label>
                    <span>Kimo</span>   
                    <br/>             
                    <span>Height</span>
                </Form.Label>
                <Form.Control
                required
                type="number"
                placeholder="eg: 38ft"               
                ></Form.Control>
              </Form.Group>

              <Form.Group controlId='id'>
                <Form.Label>
                    <span>Rangi ya Macho</span>   
                    <br/>             
                    <span>Rangi ya Macho</span>
                </Form.Label>
                <Form.Control
                required
                type="text"
                placeholder="eg: blue"               
                ></Form.Control>
              </Form.Group>

              <Form.Group controlId='id'>
                <Form.Label>
                    <span>Alama isiyo ya kawaida</span>  
                    <br/>              
                    <span>Special peculiarities:</span>
                </Form.Label>
                <Form.Control
                required
                type="text"
                placeholder="eg: tatoo"               
                ></Form.Control>
              </Form.Group>

               <h5 className="mt-2">MOTHER</h5>

              <Form.Group controlId='name'>
                <Form.Label>
                    <span>Majina Kamili ya Mama </span> 
                    <br/>              
                    <span>/Mother’s Full Name</span>
                </Form.Label>
                <Form.Control
                required
                type="text"
                placeholder="eg:Empiror Sharkz Reigns"               
                ></Form.Control>
               </Form.Group> 
               
               <Form.Group controlId='id'>
                <Form.Label>
                    <span>Nambari Ya Kitambulisho</span>
                    <br/>
                    <span>Identity Card Numbe</span>
                </Form.Label>
                <Form.Control
                required
                type="number"
                placeholder="eg: 38292827"               
                ></Form.Control>
              </Form.Group>

              
                <Form.Group controlId='id'>
                <Form.Label>
                    <span>Nambari ya Paspoti (au Rno.)</span>
                    <br/>
                    <span>Passport No. (or Rno.)</span>
                </Form.Label>
                <Form.Control
                required
                type="number"
                ></Form.Control>
              </Form.Group>              


               <Form.Group controlId='place'>
                <Form.Label>
                    <span>Mahali Mama alipozaliwa</span>  
                    <br/>          
                    <span>Place of Mother’s birth:</span>
                </Form.Label>
                <Form.Control
                required
                type="text"
                placeholder="eg:M/b"               
                ></Form.Control>
               </Form.Group> 

               <Form.Group controlId='poster'>
                <Form.Label>
                    <span>S L P</span>   
                    <br/>             
                    <span>P.O. Box</span>
                </Form.Label>
                <Form.Control
                required
                type="number"
                placeholder="eg: 6666-0001"               
                ></Form.Control>
              </Form.Group>


              <Form.Group controlId='phone'>
                <Form.Label>
                    <span>Nambari ya Simu</span>  
                    <br/>                
                    <span>Tel</span>
                </Form.Label>
                <Form.Control
                required
                type="number"
                placeholder="eg: 0707070707"               
                ></Form.Control>
              </Form.Group>

              <h5 className="mt-3">FATHER</h5>

              <Form.Group controlId='name'>
                <Form.Label>
                    <span>Majina Kamili ya Baba </span> 
                    <br/>              
                    <span>Father’s Full Name</span>
                </Form.Label>
                <Form.Control
                required
                type="text"
                placeholder="eg:Empiror Sharkz Reigns"               
                ></Form.Control>
               </Form.Group> 
               
               <Form.Group controlId='id'>
                <Form.Label>
                    <span>Nambari Ya Kitambulisho</span>
                    <br/>
                    <span>Identity Card Numbe</span>
                </Form.Label>
                <Form.Control
                required
                type="number"
                placeholder="eg: 38292827"               
                ></Form.Control>
              </Form.Group>

              
                <Form.Group controlId='id'>
                <Form.Label>
                    <span>Nambari ya Paspoti (au Rno.)</span>
                    <br/>
                    <span>Passport No. (or Rno.)</span>
                </Form.Label>
                <Form.Control
                required
                type="number"
                ></Form.Control>
              </Form.Group>              


               <Form.Group controlId='place'>
                <Form.Label>
                    <span>Mahali Baba alipozaliwa</span>   
                    <br/>         
                    <span>Place of Father’s birth:</span>
                </Form.Label>
                <Form.Control
                required
                type="text"
                placeholder="eg:M/b"               
                ></Form.Control>
               </Form.Group> 

               <Form.Group controlId='poster'>
                <Form.Label>
                    <span>S L P</span>  
                    <br/>              
                    <span>P.O. Box</span>
                </Form.Label>
                <Form.Control
                required
                type="number"
                placeholder="eg: 6666-0001"               
                ></Form.Control>
              </Form.Group>


              <Form.Group controlId='phone'>
                <Form.Label>
                    <span>Nambari ya Simu</span>   
                    <br/>               
                    <span>Tel</span>
                </Form.Label>
                <Form.Control
                required
                type="number"
                placeholder="eg: 0707070707"               
                ></Form.Control>
              </Form.Group>


              
                </Col>
            </Row>
            <Button onClick={submitHandler} type="submit" variant='primary' className="my-3" >Continue</Button>
        </>
    )
}
export default Part1;