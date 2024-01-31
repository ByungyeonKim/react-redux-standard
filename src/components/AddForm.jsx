import React, { useState } from 'react';
import styled from 'styled-components';

const AddForm = () => {
  const [title, setTitle] = useState('');

  const onSubmitHandler = (e) => {
    e.preventDefault();
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
