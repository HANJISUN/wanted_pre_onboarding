import React, { useState } from "react";
import styled from "styled-components";
import { MdCheckCircle } from "react-icons/md";
import { ImEye, ImEyeBlocked } from "react-icons/im";

const Input = () => {
  const [email, setEmail] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const [isPasswordHide, setIsPasswordHide] = useState(true);

  const validateEmail = email => {
    return email
      .toLowerCase()
      .match(
        /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
      );
  };

  const isEmailValid = validateEmail(email);

  const handleOnblur = e => {
    setErrorMessage(isEmailValid ? "" : "Invalid e-mail address.");
  };

  return (
    <InputContainer>
      <h2>Input</h2>
      <InputBox>
        <label htmlFor="email">E-mail</label>
        <input
          type="email"
          id="email"
          placeholder="E-mail"
          autoComplete="off"
          value={email}
          onChange={e => setEmail(e.target.value)}
          onBlur={handleOnblur}
        />
        <div>
          <i>
            <MdCheckCircle
              size="17"
              color={isEmailValid ? "var(--primary)" : "var(--textSecondary)"}
            />
          </i>
        </div>
        <span>{errorMessage}</span>
      </InputBox>
      <InputBox>
        <label htmlFor="password">Password</label>
        <input
          type={isPasswordHide ? "password" : "text"}
          id="password"
          placeholder="Password"
        />
        <div>
          <i
            id="isPasswordHide"
            onClick={() => setIsPasswordHide(!isPasswordHide)}
          >
            {isPasswordHide ? (
              <ImEyeBlocked size="20" color="var(--textSecondary)" />
            ) : (
              <ImEye size="20" color="var(--primary)" />
            )}
          </i>
        </div>
      </InputBox>
    </InputContainer>
  );
};

const InputContainer = styled.div`
  margin: 10px 0;

  h2 {
    margin-bottom: 20px;
  }
`;

const InputBox = styled.div`
  display: flex;
  flex-direction: column;

  label {
    margin: 7px;
    color: var(--textPrimary);
    font-size: 11px;
  }

  input {
    width: 350px;
    height: 40px;
    padding: 0 20px;
    background-color: var(--inputBackground);
    border: 1px solid var(--borderPrimary);
    border-radius: 5px;
  }
  input:focus {
    outline: none;
    border: 1px solid var(--borderFocus);
  }
  input::placeholder {
    color: var(--textSecondary);
    font-size: 15px;
    font-weight: 400;
  }

  div {
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 30px;
    height: 30px;
    left: 350px;
    bottom: 33px;
  }

  i {
    margin: 0 auto;
  }

  span {
    position: relative;
    bottom: 20px;
    left: 5px;
    font-size: 12px;
    color: var(--textError);
  }

  #passwordHidden {
    cursor: pointer;
  }
`;

export default Input;
