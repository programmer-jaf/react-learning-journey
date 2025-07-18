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

import { ConvertedJSX } from "./components/ConvertedJSX";
import { LearnJSX } from "./components/Learn-JSX";
import JSXRules from "./solutions/JSXRules";
import WelcomeMessage from "./solutions/WelcomeMessage";

const App = () => {
  return (
    <div>
      {/* import Component */}
      <LearnJSX />
      <hr />
      Converted JSX After Rendered
      <ConvertedJSX />
      {/* Challenge-01 */}
      Challenge--01
      <WelcomeMessage />
      {/* Challenge-02 */}
      Challenge--02
      <JSXRules />
    </div>
  );
};
export default App;
