// Copyright 2025 Programmer-Jaf
//
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//
//     https://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.

export const ConditionalRendering = () => {
  const userLoggedIn = true;
  let message;
  if (userLoggedIn) {
    message = <p>User is LoggedIn</p>;
  } else {
    message = <p>User is LoggedOut</p>;
  }
  return (
    <div>
      <h2>Types of Conditional Rendering</h2>
      <ul>
        <li>If-Else</li>
        <li>Using Ternary Operator</li>
        <li>And Operator</li>
      </ul>
      <hr />
      <h2>Using If-else:</h2>
      {message}
      <hr />
      <h2>Using Ternary Operator (?):</h2>
      {
        userLoggedIn ? <p>User LoggedIn</p> : <p>User LoggedOut</p>
      }
      <hr />
      <h2>Using And Operator (&&)</h2>
      {
        userLoggedIn && <div className="">User Logged In</div>
      }
    </div>
  );
};
