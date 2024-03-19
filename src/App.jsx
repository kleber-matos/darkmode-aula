/** @format */
//* O que é useeffect?
// O useEffect é um dos hooks fornecidos pelo React que
// atua no ciclo de vida da sua página, nos ajudando a
// gerenciar ações em componentes de função.
// Ele entra em ação quando algo muda(atualiza) na sua
// página, como quando ela é carregada pela primeira
// vez, quando o usuário clica para fechar a sua página
// ou quando um usuário clica em um botão. Seja para
// mudar a cor de fundo, fazer um cálculo ou qualquer
// outra tarefa que utilize lógica de programação, o
// useEffect() estará vigiando cada mudança que houver
// na página e ele irá reagir a essas mudanças.

import React, { useEffect, useState } from "react";

export default function App() {
  const [count, setCount] = useState(0);

  //useEffect com o seu array de dependecia ele observa apenas o count
  useEffect(() => {
    console.log("bom dia");
  }, [count]);

  // Mudança de estados do dark mode
  const [mode, setMode] = useState("White");
  const [open, setOpen] = useState(false);

  function dark() {
    setMode("Dark");
  }

  function white() {
    setMode("white");
  }

  //useEffect verifica a mudança do mode e muda as cores
  useEffect(() => {
    if (mode === "Dark") {
      document.body.style.backgroundColor = "white";
      document.body.style.color = "#333";
    } else {
      document.body.style.backgroundColor = "#333";
      document.body.style.color = "white";
    }
  }, [mode]);

  return (
    <div>
      <h1>UseEffect</h1>

      <h2>{count}</h2>
      <button onClick={() => setCount((count) => count + 1)}>+</button>

      <h2>{mode}</h2>
      <button
        onClick={() => {
          if (open) {
            dark();
          } else {
            white();
          }
          // open === true ? trocaComida1() : trocaComida2();
          setOpen(!open);
        }}>
        mode
      </button>
    </div>
  );
}
