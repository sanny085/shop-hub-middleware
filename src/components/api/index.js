import axios from "axios";
import {LOGIN, LOGOUT, REGISTER, VERIFY, QUESTIONS, FINISHED_EXAM } from '../../services/constant'

const baseUrl = "https://e-prathibha.com/apis";   
const sKey = "3w99V63pW7tJ7vavGXtCKo8cp";



export const RegisterThunk = (formData) => async (dispatch, getState) => {
    const {email, password, confirmPassword} = formData;
    console.log('CurrentUser', email, password)
    
       await axios.post(
        `${baseUrl}/register`,
        {
          email	: email,
          name : 'abc',
          phone : '1234567809',
          password: password,
          confirmPassword: confirmPassword, 
        }
      ).then( async(res) => {
        console.log('response Thunk',res)
          if(res.data.status === 200){
            dispatch({type: REGISTER, payload: res.data.status})
          }
          else if(res.data.status === 400){
            dispatch({type: REGISTER, payload: res.data.status})
          }else{
            dispatch({type: REGISTER, payload:null})
          }
      })
      .catch( (error) => {
        console.log('error Thunk :',error);
      });
       
}

export const VerifyCode = (scode) => async (dispatch,getState) => {
    console.log('Verify Thunk', scode)
        await axios.post(
          `${baseUrl}/verifyEmail`,
          {
            reg_code	: scode,  
          }
        ).then( async(res) => {
          console.log('verify Thunk 2',res) 
          alert('Verify',res.data.data.message && res.data.data.message)
            if(res.data.status === 200){
              dispatch({type: VERIFY, payload: res.data.data})
            } 
        })
        .catch( (error) => {
          console.log('Login Thunk :',error);
        });
        
}
  
export const LoginThunk = (formData) => async (dispatch, getState) => {
      const {email, password} = formData;
      console.log('Login thunk 1', email, password)
      const user = getState()
      console.log('Login APi',user);
         await axios.post(
          `${baseUrl}/login`,
          {
            email	: email, 
            password: password,  
          }
        ).then( async(res) => {
          console.log('Login Thunk 2',res)
            if(res.data.status === 200){
              dispatch({type: LOGIN, payload: res.data.data})
            }
             
        })
        .catch( (error) => {
          console.log('Login Thunk :',error);
        });
         
}
 
export const FreeTrail = (startExam) => async (dispatch, getState) => {

console.log('startExam 1 ', startExam)  
const {Token, Id} = getState().auth.loginUser; 
console.log('Token', getState().auth.loginUser);
    await axios.post(
        `${baseUrl}/test_free_exam`,
         { examId: 12, qno: 1 },
        {
         headers: {
                tokenu : Token, 
                Id : Id,
                server_key: sKey
            }
        }
      ).then( async(res) => {
          console.log('Free Test',res)

        let {exams} = res.data.data;
        const id = exams[0]['Old question papers UPSC Civils (Pre)'].map((item)=>item.Exam.id)
        console.log('exam free id', id)
        let questionData = []; 
 
        if(startExam === true){
          questionData = await axios.post(
            `${baseUrl}/finishExam`,
              { examId : id[0], qno: 1 },
            {
              headers: {
                    tokenu : Token, 
                    Id : Id,
                    server_key: sKey
                }
            } 
        ) 
        console.log('Exam finished', questionData)
        dispatch({type: FINISHED_EXAM, payload:questionData.data.data });
        }
        else{ 
          questionData = await axios.post(
              `${baseUrl}/start_exam_new?examId=${id[0]}`,
                { examId : id[0] },
              {
                headers: {
                      tokenu : Token, 
                      Id : Id,
                      server_key: sKey
                  }
              }
          ) 
          console.log('Question',questionData.data.data.exam.map((item)=> item.Question.question));
         
          const questions = questionData?.data?.data?.exam?.map((item)=> item?.Question?.question)
          dispatch({type: QUESTIONS, payload: questions});
        }
          
        })
      .catch( (error) => {
        console.log('Free Test Error:',error);
      });

}