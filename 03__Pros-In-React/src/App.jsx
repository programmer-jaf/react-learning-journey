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

import { Expression } from "./components/Expressions";
import { UserProps } from "./components/Props";
import {DynamicMessage} from "./solutions/DynamicMessage"
export const App = () => {
  return (
    <div>
      <h1>Props and Expressions </h1>
      {/* Expression */}
      <Expression/>
      <hr />
      {/* Props */}
      <h2>Props:</h2>
      <UserProps name={"Programmer-Jaf"} email={"programmerjaf@gmail.com"} githubLink={"https://www.github.com/programmer-jaf"}/>

      {/* Challenge--01 */}
      <hr />
      <h3>Challenge--01</h3>
      <DynamicMessage message={"welcome message"}/>

    </div>
  );
};
