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

export const Lists = () => {
  const products = [
    {
      id: 1,
      name: "Wireless Headphones",
      description:
        "High-quality wireless headphones with noise cancellation and 20-hour battery life.",
      price: 89.99,
    },
    {
      id: 2,
      name: "Smartwatch",
      description:
        "Waterproof smartwatch with heart rate monitor and fitness tracking features.",
      price: 129.99,
    },
    {
      id: 3,
      name: "Bluetooth Speaker",
      description:
        "Portable Bluetooth speaker with rich bass and 10-hour playback time.",
      price: 49.99,
    },
    {
      id: 4,
      name: "Laptop Stand",
      description:
        "Adjustable aluminum laptop stand for better posture and ventilation.",
      price: 29.99,
    },
    {
      id: 5,
      name: "Gaming Mouse",
      description:
        "Ergonomic gaming mouse with customizable RGB lighting and 6 programmable buttons.",
      price: 39.99,
    },
    {
      id: 6,
      name: "Mechanical Keyboard",
      description:
        "Compact mechanical keyboard with blue switches and RGB lighting.",
      price: 79.99,
    },
  ];

  return (
    <div>
      <h1>Render List using Map Method</h1>
      <div className="products">
        {products.map(({ id, name, description }) => (
          <div className="card" key={id}>
            <h3>{name}</h3>
            <p>{description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};
