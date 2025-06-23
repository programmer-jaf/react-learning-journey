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
import "./style.css";

export const DynamicValue = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  return (
    <form className="form">
      {/* First Name */}
      <div>
        <label htmlFor="firstName">First Name</label>
        <input
          type="text"
          className="input"
          name="firstName"
          placeholder="Enter your first name"
          value={formData.firstName}
          onChange={handleChange}
        />
      </div>

      {/* Last Name */}
      <div>
        <label htmlFor="lastName">Last Name</label>
        <input
          type="text"
          className="input"
          name="lastName"
          placeholder="Enter your last name"
          value={formData.lastName}
          onChange={handleChange}
        />
      </div>

      {/* Email */}
      <div>
        <label htmlFor="email">Email</label>
        <input
          type="email"
          className="input"
          name="email"
          placeholder="Enter your email"
          value={formData.email}
          onChange={handleChange}
        />
      </div>

      {/* Password */}
      <div>
        <label htmlFor="password">Password</label>
        <input
          type="password"
          className="input"
          name="password"
          placeholder="Enter your password"
          value={formData.password}
          onChange={handleChange}
        />
      </div>

      {/* Submit Button */}
      <input type="submit" value="Submit" />
    </form>
  );
};
