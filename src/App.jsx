// src/App.js

import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";

// 사용할 Action creator를 import 합니다.
import { plusOne } from "./redux/modules/counter";

import AddForm from "./components/AddForm";
import TodoListContainer from "./components/TodoListContainter";

const App = () => {
  // 간단 계산기
  const dispatch = useDispatch();
  const plusNumber = useSelector((state) => state.counter.plusNumber);


  // 편한 계산기
  const [number, setNumber] = useState(0);

  const onChangeHandler = (event) => {
    const { value } = event.target;
    setNumber(+value);
  };

  
  const onClickAddNumberHandler = () => {
		
  };

  const onClickMinusNumberHandler = () => {
		
  };
  

  return (
    <div>
      <div>
        <div>계산기</div>
        <div>
          {plusNumber}
          <button
            onClick={() => {
              dispatch(plusOne()); // 액션객체를 Action creator로 변경합니다.
            }}
          >
            + 1
          </button>
        </div>
        {/* 빼기 버튼 추가 */}
        <div>
          {/* {minusNumber} */}
          <button
            onClick={() => {

            }}
          >
            - 1
          </button>
        </div>
        <div>
          {/* 합계 : {totalNumber} */}
        </div>
      </div>

      <hr/>

      <div>
        <div>편한 계산기</div>
        <input type="number" onChange={onChangeHandler} />
        <button onClick={onClickAddNumberHandler}>더하기</button>
        <button onClick={onClickMinusNumberHandler}>빼기</button>
        <div>
          {/* 결과: {globalNumber} */}
        </div>
      </div>
      
      <hr/>

      <div>
        <div>todo list</div>
        <div>
          <StContainer>
            <AddForm />
            <TodoListContainer />
          </StContainer>
        </div>
      </div>
    </div>
  );
};

export default App;

const StContainer = styled.section`
  max-width: 1440px;
  margin: 0 auto;
`;