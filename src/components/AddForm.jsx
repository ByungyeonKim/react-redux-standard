import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import styled from 'styled-components';
import { addTodo } from '../redux/modules/todos';

const AddForm = () => {
  const [title, setTitle] = useState('');
  const dispatch = useDispatch();

  const onSubmitHandler = (e) => {
    e.preventDefault();
    if (!title) {
      alert('제목을 입력해주세요.');
      return;
    }

    dispatch(addTodo(title));
  };

  return (
    <StFormContainer>
      <form onSubmit={onSubmitHandler}>
        <label>Todos의 제목을 입력하세요</label>
        <StInput
          type='text'
          value={title}
          onChange={(e) => {
            setTitle(e.target.value);
          }}
        />
        <StButton>추가하기</StButton>
      </form>
    </StFormContainer>
  );
};

export default AddForm;

const StFormContainer = styled.div`
  display: flex;
  gap: 24px;
  padding: 30px;
`;

const StButton = styled.button`
  border: none;
  background-color: #eee;
  height: 25px;
  cursor: pointer;
  width: 120px;
  border-radius: 12px;
`;

const StInput = styled.input`
  border: 1px solid #eee;
  margin: 0 24px;
  height: 25px;
  width: 300px;
  border-radius: 12px;
  outline: none;
  padding: 0 10px;
`;
