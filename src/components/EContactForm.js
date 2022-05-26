import { Row,Button,Col,Form} from "react-bootstrap";

const EContactForm=({part})=>{
    return(
        <>
           {part}
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

            <Form.Group controlId='div'>
                <Form.Label>
                    <span>Tarafan</span>                 
                    <span>/ Divisio</span>
                </Form.Label>
                <Form.Control
                required
                type="text"
                placeholder="eg: Kanairo"               
                ></Form.Control>
            </Form.Group> 

            <Form.Group controlId='name'>
                <Form.Label>
                    <span>Kata</span>                  
                    <span>/ Location</span>
                </Form.Label>
                <Form.Control
                required
                type="text"
                placeholder="eg:Kanairo"               
                ></Form.Control>
            </Form.Group> 

            <Form.Group controlId='rel'>
                <Form.Label>
                    <span>Uhusiano naye</span>                  
                    <span>/Relationship</span>
                </Form.Label>
                <Form.Control
                required
                type="text"
                placeholder="eg: Aunt"               
                ></Form.Control>
            </Form.Group>
        
            <Form.Group controlId='id'>
                <Form.Label>
                    <span>Nambari ya Kitambulisho chake</span>                  
                    <span>/ID No</span>
                </Form.Label>
                <Form.Control
                required
                type="number"
                placeholder="eg: 38292827"               
                ></Form.Control>
            </Form.Group>

            <Form.Group controlId='poster'>
                <Form.Label>
                    <span>S.L. P</span>              
                    <span>/P.O Box</span>
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
                    <span>/Tel. No.</span>
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
                    <span>/Email</span>
                </Form.Label>
                <Form.Control
                required
                type="email"
                placeholder="eg: sharkz@gmail.com"               
                ></Form.Control>
            </Form.Group>
        </>
    )
}

export default EContactForm;