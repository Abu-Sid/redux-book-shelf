export const ADD_TO_READING_LIST = "ADD_TO_READING_LIST";
export const REMOVE_FROM_READING_LIST = "REMOVE_FROM_READING_LIST";
export const ADD_TO_FINISHED_LIST = "ADD_TO_FINISHED_LIST";
export const addToReadingList = (payload)=>{
    return {
        type: ADD_TO_READING_LIST,
        payload
    }
}
export const removeFromReadingList = (payload)=>{
    return {
        type: REMOVE_FROM_READING_LIST,
        payload
    }
}
export const addToFinishedList = (payload) => {
    return {
      type: ADD_TO_FINISHED_LIST,
      payload,
    };
  };
export const removeFromFinishedList = (payload) => {
    return {
      type: "REMOVE_FROM_FINISHED_LIST",
      payload,
    };
  };