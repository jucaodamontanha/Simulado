import React, { useState } from 'react';
import imagemTap from './assets/dc.png';

// Constante com todas as questões extraídas das imagens
const questions = [
{ 
    id: 1, 
    q: "Selecione a alternativa que contém o nome de cada perda do passivo (TAP):", 
    image: imagemTap, // 2. Use a variável em vez da string do caminho
    options: ["A-Derivação; B-Inserção; C-Isolação", "A-Inserção; B-Isolação; C-Derivação", "A-Inserção; B-Derivação; C-Isolação", "A-Isolação; B-Inserção; C-Derivação"], 
    ans: 2 
  },
  { id: 2, q: "Qual a finalidade da pingadeira?", options: ["Estética da instalação", "Reserva técnica", "Ocasionar infiltração", "Evitar infiltração de água através do cabo"], ans: 3 },
  { id: 3, q: "Quais as partes que compõem um cabo de Fibra Óptica?", options: ["Capa protetora", "Núcleo", "Casca", "Todas as alternativas acima"], ans: 3 },
  { id: 4, q: "O que é Canal Direto?", options: ["Sinal do cliente até o Headend", "Sinal entre clientes", "Sinal do Headend até o cliente", "Sinal entre Headends"], ans: 2 },
  { id: 5, q: "Quais as faixas de frequência para o Canal de Retorno?", options: ["55 MHz a 750 MHz", "213 MHz a 550 MHz", "5 MHz a 55 MHz / 5 MHz a 104 MHz", "5 MHz a 42 MHz / 5 MHz a 85 MHz"], ans: 3 },
  { id: 6, q: "O que é Upstream?", options: ["Sinal do eMTA para o medidor", "Sinal do eMTA para o CMTS", "Sinal do medidor para o eMTA", "Sinal do CMTS para o eMTA"], ans: 1 },
  { id: 7, q: "Quais sinais trafegam no Canal Direto?", options: ["Canais Downstream", "Canais de Vídeo", "Canais piloto", "Todas as alternativas anteriores"], ans: 3 },
  { id: 8, q: "O que é portabilidade?", options: ["Trocar fixo por móvel", "Manter número independente da operadora", "Trocar titular e número", "Nenhuma das anteriores"], ans: 1 },
  { id: 9, q: "Técnico chega às 14:20 para agenda até 14:00. Qual indicador é afetado?", options: ["TEC1", "ISRA", "STFC", "SCM"], ans: 1 },
  { id: 10, q: "Qual a função do CMTS?", options: ["Transmitir via upstream", "Comunicação e gerenciamento dos modems", "Interligar rede interna à HFC", "Gerar o VOIP"], ans: 1 },
  { id: 11, q: "O que significa a sigla HFC?", options: ["Hybrid Fiber Coaxial", "High Frequency Connection", "Hybrid Frequency Control", "High Fiber Coaxial"], ans: 0 },
  { id: 12, q: "Qual a função do Splitter (Divisor)?", options: ["Amplificar o sinal", "Dividir o sinal em saídas com mesma perda", "Bloquear frequências", "Converter sinal óptico"], ans: 1 },
  { id: 13, q: "O que é SNR (Signal-to-Noise Ratio)?", options: ["Velocidade da internet", "Relação entre potência do sinal e ruído", "Tempo de resposta (ping)", "Voltagem do amplificador"], ans: 1 },
  { id: 14, q: "O que indica um BER (Bit Error Rate) alto?", options: ["Conexão perfeita", "Perda de pacotes ou erros de transmissão", "Sinal muito forte", "Cabo desconectado"], ans: 1 },
  { id: 15, q: "Qual a principal vantagem do DOCSIS 3.1?", options: ["Usa apenas cobre", "Velocidades Giga e blocos OFDM", "Funciona sem energia", "Apenas para TV analógica"], ans: 1 },
  { id: 16, q: "O que caracteriza um curto-circuito no coaxial?", options: ["Malha encostando no condutor central", "Cabo muito comprido", "Conector sujo", "Sinal baixo"], ans: 0 },
  { id: 17, q: "O que deve ser feito se houver ruído (Ingresso) no cliente?", options: ["Ignorar", "Instalar Filtro de Alta / Revisar conectores", "Aumentar transmissão do modem", "Trocar o cabo da rua"], ans: 1 },
  { id: 18, q: "O que é Hum Modulation?", options: ["Música ambiente", "Interferência da rede elétrica (60Hz)", "Som do modem ligando", "Brilho da TV"], ans: 1 },
  { id: 19, q: "Qual o valor máximo de resistência de aterramento?", options: ["100 Ohms", "50 Ohms", "10 Ohms", "25 Ohms"], ans: 2 },
  { id: 20, q: "O que significa a cor verde no conector SC/APC?", options: ["Baixa velocidade", "Polimento angulado (baixa reflexão)", "Uso interno apenas", "Cor estética"], ans: 1 }
];

export default function App() {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);
  const [showResult, setShowResult] = useState(false);
  const [userAnswers, setUserAnswers] = useState([]);

  const handleAnswer = (index) => {
    const isCorrect = index === questions[currentQuestion].ans;
    if (isCorrect) setScore(score + 1);
    setUserAnswers([...userAnswers, { qIndex: currentQuestion, selected: index, correct: isCorrect }]);

    const next = currentQuestion + 1;
    if (next < questions.length) {
      setCurrentQuestion(next);
    } else {
      setShowResult(true);
    }
  };

  const restart = () => {
    setCurrentQuestion(0);
    setScore(0);
    setShowResult(false);
    setUserAnswers([]);
  };

  return (
    <div className="min-h-screen bg-slate-900 text-slate-100 p-4 font-sans flex items-center justify-center">
      <div className="max-w-2xl w-full bg-slate-800 rounded-2xl shadow-2xl overflow-hidden border border-slate-700">
        
        {/* Header com Progresso */}
        {!showResult && (
          <div className="p-6 bg-slate-700/50 border-b border-slate-600">
            <div className="flex justify-between items-center mb-4">
              <h1 className="text-xl font-bold text-blue-400">Simulado Técnico</h1>
              <span className="bg-blue-900/50 text-blue-300 px-3 py-1 rounded-full text-xs font-mono">
                {currentQuestion + 1} / {questions.length}
              </span>
            </div>
            <div className="w-full h-2 bg-slate-600 rounded-full">
              <div 
                className="h-2 bg-blue-500 rounded-full transition-all duration-300" 
                style={{ width: `${((currentQuestion + 1) / questions.length) * 100}%` }}
              ></div>
            </div>
          </div>
        )}

        <div className="p-8">
          {showResult ? (
            <div className="text-center">
              <h2 className="text-3xl font-bold mb-2">Simulado Finalizado!</h2>
              <div className="inline-block p-6 rounded-full bg-slate-700 my-8 border-4 border-blue-500">
                <span className="text-5xl font-black">{Math.round((score / questions.length) * 100)}%</span>
              </div>
              <button onClick={restart} className="w-full bg-blue-600 hover:bg-blue-500 text-white font-bold py-4 rounded-xl transition-all">
                Tentar Novamente
              </button>
            </div>
          ) : (
            <div className="animate-in fade-in slide-in-from-bottom-4 duration-500 text-center">
              
              {/* TÍTULO DA QUESTÃO */}
              <h2 className="text-2xl font-semibold mb-6 text-slate-100 leading-tight">
                {questions[currentQuestion].q}
              </h2>

              {/* IMAGEM DA QUESTÃO (SE EXISTIR) */}
              {questions[currentQuestion].image && (
                <img 
                  src={questions[currentQuestion].image} 
                  alt="Diagrama" 
                  className="mb-8 rounded-lg border border-slate-600 max-w-full h-auto mx-auto shadow-lg"
                />
              )}
              
              {/* OPÇÕES */}
              <div className="space-y-4 text-left">
                {questions[currentQuestion].options.map((opt, i) => (
                  <button 
                    key={i} 
                    onClick={() => handleAnswer(i)}
                    className="w-full group flex items-center p-5 rounded-xl border-2 border-slate-700 hover:border-blue-500 hover:bg-slate-700/50 transition-all"
                  >
                    <span className="w-10 h-10 flex items-center justify-center rounded-lg bg-slate-700 group-hover:bg-blue-600 group-hover:text-white mr-4 font-bold transition-colors">
                      {String.fromCharCode(65 + i)}
                    </span>
                    <span className="flex-1 font-medium text-slate-300 group-hover:text-white">
                      {opt}
                    </span>
                  </button>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}