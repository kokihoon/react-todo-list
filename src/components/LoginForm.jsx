import React, { useCallback, useState } from "react";
import { useDispatch } from "react-redux";
import { loginAction } from "../modules/reducers/users";

const LoginForm = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();

  const onChangeId = useCallback(e => {
    setUsername(e.target.value);
  }, []);
  const onChangePassword = useCallback(e => {
    setPassword(e.target.value);
  }, []);

  const onSubmitForm = useCallback(
    e => {
      console.log(username);
      e.preventDefault();
      dispatch(loginAction({ username, password }));
    },
    [dispatch, password, username]
  );
  return (
    <form onSubmit={onSubmitForm}>
      <div>
        <label htmlFor="user-id">아이디</label>
        <br />
        <input name="user-id" value={username} onChange={onChangeId} required />
      </div>
      <div>
        <label htmlFor="user-password">비밀번호</label>
        <br />
        <input
          name="user-password"
          value={password}
          onChange={onChangePassword}
          type="password"
          required
        />
      </div>
      <div style={{ marginTop: "10px" }}>
        <button type="submit">로그인</button>
      </div>
    </form>
  );
};

export default LoginForm;
