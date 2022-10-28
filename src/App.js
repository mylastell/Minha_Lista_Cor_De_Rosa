import React, { useState } from "react";
import Fundo from "../src/img/fundo.jpg";
import "./styles.css";

import styled, { createGlobalStyle } from "styled-components";

export default function App() {
  const [input, setInput] = useState();
  const [list, setList] = useState([]);

  const add = () => {
    let coisasDoInput = {
      value: input,
      id: Date.now(),
      status: false
    };

    setList([...list, coisasDoInput]);
    setInput("");
  };

  function DeleteTask(RastreadorDessaFuncao) {
    const ListaFiltrada = list.filter(
      (item) => item.id !== RastreadorDessaFuncao
    );
    setList(ListaFiltrada);
  }

  return (
    <div>
      <h1>Tarefas do Dia💖</h1>
      <form onSubmit={(e) => e.preventDefault()}>
        <input
          value={input}
          onChange={(e) => {
            setInput(e.target.value);
          }}
        />

        <button
          onClick={() => {
            add();
          }}
        >
          ✅
        </button>
      </form>
      <ul>
        {list.map((item) => (
          <li>
            {item.value}
            <button
              onClick={() => {
                DeleteTask(item.id);
              }}
            >
              x
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}
