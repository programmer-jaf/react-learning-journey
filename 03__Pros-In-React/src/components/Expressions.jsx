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

export const Expression = () => {
  /*
    The Expression:
      01: React Variables
      02: Properties
      03: JavaScript Expression
  */
  const name = "Programmer-Jaf";
  const user = {
    age: 21,
    github: "https://www.github.com/programmer-jaf",
  };
  return (
    <div>
      {/* React Variables */}
      <p>React Variables :</p>
      <h2>My Name is : {name}</h2>
      <hr />
      <p>Object Expression :</p>
      <p>My Age {user.age}</p>
      <p>
        My Github-Profile:
        <a href={user.github} target="_">
          Github
        </a>
      </p>
      <hr />
      <p>if we write 2 + 2 it treat as a as paragraph </p>
      <hr />
      <p>JavaScript Expression : </p>
      {/* JavaScript Expression */}
      <p>But of you want to use JavaScript Expression 2+2 = {2 + 2}</p>
    </div>
  );
};
