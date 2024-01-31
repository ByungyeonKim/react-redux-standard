import React from 'react';
import styled from 'styled-components';

const TodoListContainer = () => {
  const todos = [
    {
      id: 1,
      title: 'react를 배워봅시다.',
    },
    {
      id: 2,
      title: 'redux를 배워봅시다.',
    },
  ]; // 임시

  return (
    <StTodos>
      {todos.map((todo) => (
        <StTodo key={todo.id}>{todo.title}</StTodo>
      ))}
    </StTodos>
  );
};

export default TodoListContainer;

const StTodos = styled.div`
  display: flex;
  gap: 12px;
  flex-wrap: wrap;
`;
const StTodo = styled.div`
  border: 1px solid #ddd;
  width: 20%;
  height: 100px;
  display: flex;
  align-items: center;
  padding: 0 24px;
  border-radius: 12px;
`;
