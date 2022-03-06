import {QUESTIONS, FINISHED_EXAM} from '../constant'


const initialQuestions = {
    questions : [],
    completed : null
}

const examReducer = (state = initialQuestions, action) => {
  switch (action.type) {
      
      case QUESTIONS:
        return {...state, questions: action.payload, completed: null} 
      case FINISHED_EXAM:
         return {...state, questions: [], completed: action.payload}
      
      default:
          return state;
  }
}

export default examReducer


// case OPTION_SELECT:
//       return {
//         ...state,
//         exam_data_qns: state.exam_data_qns.map((item, index) => {
//           if (index == action.payload[0]) {
//             return {
//               ...item, ExamStat: {
//                 ...item.ExamStat,
//                 option_selected: item.ExamStat.option_selected==action.payload[1]?'':action.payload[1],
//                 answered: item.ExamStat.answered == '0' ? '1' : '1'
//               }
//             }
//           }
//           return item
//         })


{
  /*
   let pResponse = [
      ...response.response,

       response[index] = {
          ...response.response[index],
          questions : response.response[index].questions.map((question, i)=> {
              //console.log('item', question?.suggested_answers);
               return {
                   ...question,
                   suggested_answers : question?.suggested_answers.length > 1 ? question.suggested_answers.map((answer, i)=>{ 
                      return {...answer, priority : false}
                  }) : question

               }   
          })
      }
  ]
  
  */
}




