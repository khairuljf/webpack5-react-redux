import moment from "moment";

// Filter Reducer 
const filterReducerDefaultState  = {
    text:'',
    sortBy:'date',
    startDate:moment().startOf('month'),
    endDate:moment().endOf('month'),
}

const filterReducer = (state=filterReducerDefaultState, action) =>{
        console.log("Reducer Filter:", action);
        switch(action.type){
            case 'SET_TEXT_FILTER':
                return{
                    ...state,
                    text:action.text
                }
            case 'SET_DATE_FILTER':
                return{
                    ...state,
                    sortBy:'date'
                }
            case 'SET_AMMOUNT_FILTER':
                return{
                    ...state,
                    sortBy:'ammount'
                }

            case 'FILTER_START_DATE':
                return{
                    ...state,
                    startDate:action.startDate
                }
            case 'FILTER_END_DATE':
                return{
                    ...state,
                    endDate:action.endDate
                }
            default:
                return state;
        }
}

export default filterReducer;