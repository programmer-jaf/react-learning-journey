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

import {ConditionalRendering} from "./components/ConditionalRendering.jsx";
import { UserStats } from "./solutions/UserStats.jsx";
import { Weather } from "./solutions/Weather.jsx";

export const App = () => {
  return (
    <div>
      <h1>Learn About Conditional Rendering && Render List</h1>
      {/* conditional Rendering  */}
      <ConditionalRendering />
      {/* Challenge--01 */}
      <h2>Challenge 01</h2>
      <Weather temp={23}/>
      <hr />
      {/* Challenge--02 */}
      <h2>Challenge 02</h2>
      <UserStats isLoggedIn={true} IsAdmin={true}/>
      <UserStats isLoggedIn={true} IsAdmin={false}/>
    </div>
  );
};
