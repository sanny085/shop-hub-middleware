import {LOGIN, LOGOUT, REGISTER, VERIFY } from '../constant'


const initialUser = {
    register : null,
    verifiedUser : null,
    loginUser : null
}

const authReducer = (state = initialUser, action) => {
  switch (action.type) {
      
      case REGISTER:
        return {...state, register: action.payload}
     
      case VERIFY: 
        return {...state, verifiedUser : action.payload}

      case LOGIN:
        return { ...state, loginUser: action.payload}
      //   state.loginUser = {...state, action.payload}; 
      // return state;   

      case LOGOUT:
        return {...state, loginUser : null}
        
      default:
          return state;
  }
}

export default authReducer


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




