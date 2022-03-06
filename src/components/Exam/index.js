import React, {useState, useEffect} from 'react'
import { useDispatch,useSelector } from "react-redux"; 
import { useHistory } from "react-router-dom";
import {FreeTrail} from "../api/index"

const Exam = () => {
    let history = useHistory();
    const dispatch = useDispatch();
    const {questions, completed}=useSelector(state=>state.questions);
    
    const [startExam, setStartExam] = useState(false);
    console.log('Exam questions is : ',completed);
    
    useEffect(()=>{
      startExam && alert("Exam Started");

      completed === 'Exam Finished.' ? alert("Exam Successfully Completed") : null 
    },[completed])

    return (
    <div className="cart-wrapper noselect">
      <div className="cart-header">
        <h3>Exam Panel</h3> 
      </div>
     
      <div className="cart-checkout">
      <br/> 
      <div className="cart-total"><h4>{
        startExam ? 'Do You want to submit exam' : 'Books Your Free Test'
      }</h4></div>
        <div className="cart-checkout-button">
          <button  onClick={()=>(dispatch(FreeTrail(startExam)), setStartExam(!startExam))}>{startExam ? 'End Exam' : 'Start Free Trail'}</button>
        </div>
      </div>
      {console.log('startExam 2', startExam)}
      <div id="demo"></div>
      {
        questions?.length > 0 && startExam === true? (
          <>
            {questions?.map((item) =>  
              <div class="demo" dangerouslySetInnerHTML={{__html:item?.above}} ></div>  
            )}
          </>
        ) :  (<>
          
        </>)
      }
    </div>
    )
}

export default Exam
