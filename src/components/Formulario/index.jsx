import { useState } from "react";
import styles from "./Formulario.module.css";
import stylesTab from "./Tabela.module.css";

const Tabela = ({ resultadoImc }) => {
  const getRowClass = (min, max) => {
    const imc = parseFloat(resultadoImc);
    if (!imc) return "";

    if (imc < 18.5 && min === 0) return stylesTab.amarelo;
    if (imc >= 18.5 && imc <= 24.9 && min === 18.5) return stylesTab.verde;
    if (imc >= 25 && imc <= 29.9 && min === 25) return stylesTab.amarelo;
    if (imc >= 30 && imc <= 39.9 && min === 30) return stylesTab.vermelho;
    if (imc > 40 && min === 40) return stylesTab.vermelho;

    return "";
  };

  return (
    <div className={stylesTab["tabela-container"]}>
      <h2 className={stylesTab["tabela-titulo"]}>
        VEJA A INTERPRETAÇÃO DO IMC
      </h2>
      <table className={stylesTab["tabela-imc"]}>
        <thead>
          <tr>
            <th>IMC</th>
            <th>Classificação</th>
            <th>
              Obesidade <span className={stylesTab["grau"]}>(Grau)</span>
            </th>
          </tr>
        </thead>
        <tbody>
          <tr className={getRowClass(0, 18.4)}>
            <td>Menor que 18,5</td>
            <td>Magreza</td>
            <td>0</td>
          </tr>
          <tr className={getRowClass(18.5, 24.9)}>
            <td>Entre 18,5 e 24,9</td>
            <td>Normal</td>
            <td>0</td>
          </tr>
          <tr className={getRowClass(25, 29.9)}>
            <td>Entre 25,0 e 29,9</td>
            <td>Sobrepeso</td>
            <td>1</td>
          </tr>
          <tr className={getRowClass(30, 39.9)}>
            <td>Entre 30,0 e 39,9</td>
            <td>Obesidade</td>
            <td>2</td>
          </tr>
          <tr className={getRowClass(40, 100)}>
            <td>Maior que 40,0</td>
            <td>Obesidade Grave</td>
            <td>3</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

const Formulario = () => {
  // UseStates
  const [valorAltura, setValorAltura] = useState("");
  const [valorPeso, setValorPeso] = useState("");
  const [resultadoImc, setResultadoImc] = useState(null);

  // Funções
  const calcular = () => {
    const alturaConvertida = Number(valorAltura);
    const pesoConvertido = Number(valorPeso);

    if (!alturaConvertida || !pesoConvertido) {
      alert("Preencha os campos");
      limpar();
      return;
    } else if (alturaConvertida <= 0 || pesoConvertido <= 0) {
      alert("Preencha os campos com números maiores que 0(zero)");
      limpar();
      return;
    } else {
      const imc = (pesoConvertido / alturaConvertida ** 2).toFixed(2);
      setResultadoImc(imc);
    }
  };

  const limpar = () => {
    setValorAltura("");
    setValorPeso("");
    setResultadoImc(null);
  };

  // Retorno
  return (
    <main>
      <div className={styles.infoContainer}>
        <div className={styles.info}>
          <h3>Altura (ex.: 1.70)</h3>
          <input
            type="number"
            placeholder="Metros(m)"
            onChange={(e) => setValorAltura(e.target.value)}
            value={valorAltura}
          />
        </div>
        <div className={styles.info}>
          <h3>Peso (ex.: 69.2)</h3>
          <input
            type="number"
            placeholder="Quilos(kg)"
            onChange={(e) => setValorPeso(e.target.value)}
            value={valorPeso}
          />
        </div>
      </div>
      <div>
        <button onClick={calcular} className={styles.calcularBtn}>
          Calcular
        </button>
        <button onClick={limpar} className={styles.limparBtn}>
          Limpar
        </button>
      </div>
      <p className={styles.textoResultado}>
        Seu IMC é: <strong>{resultadoImc}</strong>
      </p>

      <Tabela resultadoImc={resultadoImc} />
    </main>
  );
};

export default Formulario;
