// src/modules/counter.js

// 추가된 코드 👇 - 액션 value를 상수들로 만들어 줍니다. 보통 이렇게 한곳에 모여있습니다.
const PLUS_ONE = 'PLUS_ONE';
const MINUS_ONE = 'MINUS_ONE';
const PLUS_N = 'PLUS_N';
const MINUS_N = 'MINUS_N';
const TOTAL = 'TOTAL';

// 추가된 코드 👇 - Action Creator를 만들어 줍니다.
export const plusOne = () => {
  return {
    type: PLUS_ONE,
  };
};

export const minusOne = () => {
  return {
    type: MINUS_ONE,
  };
};

export const plusN = (payload) => {
  return {
    type: PLUS_N,
    payload,
  };
};

export const minusN = (payload) => {
  return {
    type: MINUS_N,
    payload,
  };
};

// 초기 상태값
const initialState = {
  plusOneNumber: 0,
  minusOneNumber: 0,

  globalNumber: 0,
};

// 리듀서
const counter = (state = initialState, action) => {
  switch (action.type) {
    case PLUS_ONE: // case에서도 문자열이 아닌, 위에서 선언한 상수를 넣어줍니다.
      return {
        ...state, // 다른 상태값을 유지하기 위해 현재 상태를 복사합니다.
        plusOneNumber: state.plusOneNumber + 1,
      };
    case MINUS_ONE: // case에서도 문자열이 아닌, 위에서 선언한 상수를 넣어줍니다.
      return {
        ...state, // 다른 상태값을 유지하기 위해 현재 상태를 복사합니다.
        minusOneNumber: state.minusOneNumber - 1,
      };
    case PLUS_N:
      return {
        ...state,
        globalNumber: state.globalNumber + action.payload,
      };
    case MINUS_N:
      return {
        ...state,
        globalNumber: state.globalNumber - action.payload,
      };
    default:
      return state;
  }
};

export default counter;
