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

// * Syntax of creating Component
/*
const Component-Name = () =>{
  return (
  <div>
  </div>
  )
  }
! make sure that component must be export otherwise you can't use it
*/
const Component = () => {
  return (
    <div>
      {/* What is Components */}
      {/* Ans: Components are independent and reusable bits of code.They Serve the same purpose of JS Functions,works in isolation and return HTML*/}
      This is a Component
    </div>
  );
};

export default Component;
