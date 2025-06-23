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
import { useState } from "react";

// Syntax
/*
  const [variable,setFunction] = useState(initialValue) // initialValue which refers to variables
  */
import "../index.css";
export const UseState = () => {
  const [count, setCount] = useState(0);
  const increment = () => setCount(count + 1);
  const decrement = () => setCount(count - 1);
  return (
    <div>
      <div className="container flex">
        <div className="buttons">
          <button className="button" onClick={increment}>
            +
          </button>
        <div className="count">{count}</div>
          <button className="button" onClick={decrement}>
            -
          </button>
        </div>
      </div>
    </div>
  );
};
