import React, { useState } from 'react';

const moreQuestions = [
  {
    id: 18,
    q: "Qual das opções representa uma prática correta ao montar o conector RG6?",
    options: [
      "Evitar contato entre malha e condutor central",
      "Emitir alertas automáticos sobre quedas de energia na rede elétrica",
      "Deixar o dielétrico exposto",
      "Não descascar a blindagem"
    ],
    ans: 0
  },
  {
    id: 19,
    q: "Qual é a principal função da funcionalidade “Certidão de Atendimento” no aplicativo Técnico Nota 10?",
    options: [
      "Monitorar o uso de dados dos clientes em tempo real",
      "O número de série do TAP",
      "Fornecer relatórios administrativos sobre o desempenho dos técnicos",
      "Realizar a leitura e análise das frequências de canais digitais como Upstream, Downstream, OFDM e OFDMA"
    ],
    ans: 3
  },
  {
    id: 20,
    q: "O que é ruído?",
    options: [
      "É uma forma de amplificar o sinal",
      "É uma forma que o equipamento entende o sinal em alta qualidade",
      "Ruído é uma interferência vinda de fontes externas que ingressa na instalação e causa defeito nos produtos instalados",
      "É uma forma de transmitir o sinal ao Headend"
    ],
    ans: 2
  },
  {
    id: 21,
    q: "Qual é o padrão de funcionamento do RX nos terminais (Decodificadores e eMTAs)?",
    options: [
      "Entre +20dBmV e -20dBmV",
      "Entre +12dBmV e -12dBmV",
      "Entre +5dBmV e -5dBmV",
      "Entre +15dBmV e -15dBmV"
    ],
    ans: 1
  },
  {
    id: 22,
    q: "Qual é o padrão de funcionamento do TX nos terminais (Decodificadores e eMTAs)?",
    options: [
      "Entre 27dBmV e 57dBmV",
      "Entre 35dBmV e 55dBmV",
      "Entre 38dBmV e 51dBmV",
      "Entre +10dBmV e -10dBmV"
    ],
    ans: 2
  },
  {
    id: 23,
    q: "Qual é o padrão de funcionamento do SNR Down e SNR Up nos terminais (Decodificadores e eMTAs)?",
    options: [
      "SNR Down abaixo de 27dB e SNR Up abaixo de 15dB",
      "SNR Down acima de 35dB e SNR Up acima de 27dB",
      "SNR Down abaixo de 35dB e SNR Up abaixo de 27dB",
      "SNR Down entre 20dB e 30dB e SNR Up entre 17dB e 22dB"
    ],
    ans: 1
  },
  {
    id: 24,
    q: "É possível efetuar a medição de níveis de sinal pelo seu próprio smartphone. Basta acessar um site. Qual é o site usado para medição de níveis?",
    options: [
      "sinais.claro.virtua.com",
      "medidordesinal.com.br",
      "niveis.virtua.com.br",
      "datacenter.virtua.com"
    ],
    ans: 0
  },
  {
    id: 25,
    q: "Qual é a atenuação de um divisor three way balanceado?",
    options: [
      "6dB em todas as portas",
      "8dB em todas as portas",
      "4,5dB em todas as portas",
      "Não existe atenuação neste divisor"
    ],
    ans: 1
  },
  {
    id: 26,
    q: "Para que os canais da grade QAM funcionem corretamente em terminais híbridos, qual configuração é essencial?",
    options: [
      "Instalar apenas o cabo coaxial e executar a varredura de canais na configuração",
      "Conectar o terminal somente à internet e configurar a senha de conteúdos",
      "Instalar o cabo coaxial, conectar à internet e executar a varredura de canais",
      "Conectar o terminal somente à internet e executar o valida retorno"
    ],
    ans: 2
  },
  {
    id: 27,
    q: "Ao realizar a instalação do serviço de TV é necessário efetuar o Valida Retorno. Qual é a função deste teste?",
    options: [
      "Habilitar todos os serviços do canal direto",
      "Realizar a validação do canal de retorno do decoder com o Headend",
      "Validar o pacote do cliente",
      "Liberar os canais do pacote"
    ],
    ans: 1
  }
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