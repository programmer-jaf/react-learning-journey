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

const WelcomeMessage = () => {
  /*
  ! Rules Of JSX:
    * --> 01: JSX only return only one single div in a component
    * --> 02: In JSX, all tags must be close : example: img
    * --> 03: For Styling we can't use class, we have to use ClassName, as well as forms
  */
  return (
    <div>
      <h1>Hello,World</h1>
      <p>Welcome to JSX</p>
    </div>
  );
};

export default WelcomeMessage;
