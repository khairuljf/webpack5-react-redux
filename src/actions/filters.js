
// Set Text Filter
export const setTextFilter = (text = '')=>({
    type:'SET_TEXT_FILTER',
    text
})

export const sortByAmmount = () =>({
    type:'SET_AMMOUNT_FILTER'
})

export const sortByDate = () =>({
        type:'SET_DATE_FILTER'
})

export const setStartDate = (startDate)=>({
    type:'FILTER_START_DATE',
    startDate
})
export const setEndDate = (endDate)=>({
    type:'FILTER_END_DATE',
    endDate
})