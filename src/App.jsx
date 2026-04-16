import React, { useState } from 'react';
import imagemTap from './assets/dc.png';

// --- BANCO DE DADOS UNIFICADO ---
const quiz1 = [
  { 
    id: 28,
    q: "O que é TILT?",
    options: [
      "Diferença de sinal entre portadoras distintas",
      "Diferença entre frequências do canal direto e do canal de retorno",
      "Nível de sinal de portadoras distintas",
      "Nível de sinal do canal de retorno"
    ],
    ans: 0
  },
  {
    id: 29,
    q: "O que é uma Rede HFC?",
    options: [
      "Rede híbrida que mistura fibra óptica e cabo coaxial",
      "Regiões atendidas pelas fibras ópticas",
      "Rede heterogênea de fibra óptica e portadoras digitais",
      "Regiões atendidas pelas fibras ópticas"
    ],
    ans: 0
  },
  {
    id: 30,
    q: "Qual é a largura de banda de um canal de TV digital?",
    options: ["10 MHz", "42 MHz", "8 MHz", "6 MHz"],
    ans: 2
  },
  {
    id: 31,
    q: "Assinale a alternativa correta em relação ao RX",
    options: [
      "Sinal que o CMTS recebe dos equipamentos alocados na casa do cliente",
      "Sinal que os equipamentos alocados na casa do cliente recebem do CMTS"
    ],
    ans: 1
  },
  {
    id: 32,
    q: "Assinale a alternativa correta em relação ao CANAL DE RETORNO",
    options: ["Todas as alternativas", "TX", "RX", "Canal Baixo", "Canal Alto"],
    ans: 1
  },
  {
    id: 33,
    q: "Como é chamado o cabo da CLARO no cliente (TAP – CLIENTE RESIDENCIAL)?",
    options: [
      "Cabo Three Shield Branco RG06 (com mensageiro)",
      "Cabo Drop (cabo preto RG06 com mensageiro)",
      "Cabo Three Shield Branco (RG06 com mensageiro)",
      "Cabo Drop (cabo preto RG11 com mensageiro)"
    ],
    ans: 1
  },
  {
    id: 34,
    q: "O gerenciamento e comunicação com os modems instalados nos clientes é realizado pelo?",
    options: ["CMTS", "DOCSIS", "NODE", "Transceptor óptico"],
    ans: 0
  },
  {
    id: 35,
    q: "DTMF é o padrão utilizado para:",
    options: ["TV Digital", "Claro Virtua", "VOD (Video on Demand)", "Claro Net Fone"],
    ans: 3
  },
  {
    id: 36,
    q: "Em uma instalação, ao usar ligação IN-TAP, qual o nome da perda que ocorre?",
    options: ["Inserção", "Derivação", "Isolação"],
    ans: 0
  },
  {
    id: 37,
    q: "Os modems recebem o sinal do CMTS através de qual canal?",
    options: ["Canal de Retorno", "Canal Aberto", "Canal Fechado", "Canal Direto"],
    ans: 3
  },
  {
    id: 38,
    q: "Quais sinais estavam fora do padrão quando o cliente estava RECEBENDO?",
    options: ["Canal Baixo", "Todas as alternativas", "RX", "Canal Alto"],
    ans: 1
  },
  {
    id: 39,
    q: "Os dois caminhos de comunicação entre modem e CMTS são:",
    options: [
      "Canal de Retorno e Upstream",
      "Frequências Altas e Frequências Baixas",
      "Canal Direto e Canal de Retorno",
      "Canal Direto e Downstream"
    ],
    ans: 2
  },
  {
    id: 40,
    q: "Para evitar erros na distribuição de sinal é essencial:",
    options: [
      "Verificar a existência de tubulação",
      "Medir os sinais no EMTA",
      "Planejar a instalação de cada componente",
      "Dar torque em todos os passivos instalados"
    ],
    ans: 2
  },
  {
    id: 41,
    q: "O padrão de transmissão de dados entre CMTS e Cable Modem é:",
    options: ["256QAM", "DOCSIS", "DTMF", "Wireless"],
    ans: 1
  },
  {
    id: 42,
    q: "Por que devemos cuidar para que o condutor central não sofra arranhões?",
    options: [
      "Não existe impacto",
      "Apenas questão estética",
      "Somente na fibra óptica",
      "Porque a camada de cobre é bastante fina"
    ],
    ans: 3
  },
  {
    id: 43,
    q: "O cable modem fica na casa do cliente e interliga a rede interna à HFC",
    options: ["Verdadeiro", "Falso"],
    ans: 0
  },
  {
    id: 44,
    q: "A portadora transporta informações por meio de quais sinais?",
    options: ["Rádio e Wi-Fi", "Pulso elétrico e Digital", "Analógico e Digital"],
    ans: 2
  },
  {
    id: 45,
    q: "O que é Smart Card e qual sua função?",
    options: [
      "Cartão sem chip",
      "Cartão com chip que controla as operações do decodificador",
      "Controla velocidade de transmissão",
      "Fecha o circuito do decodificador"
    ],
    ans: 1
  },
  {
    id: 46,
    q: "Em uma adesão Combo Mix HD, qual equipamento disponibiliza Virtua e Fone?",
    options: ["Roteador", "Cable Modem", "eMTA", "Decodificador"],
    ans: 2
  },
  {
    id: 47,
    q: "O que os indicadores medem?",
    options: [
      "Nível de satisfação do cliente",
      "Padrão e qualidade nos serviços de instalação, AT e Rede Externa",
      "Desempenho apenas dos técnicos próprios",
      "Melhor parceira de prestação de serviço"
    ],
    ans: 1
  }
];

const quiz1_1 = [
  {
    id: 48,
    q: "Selecione a alternativa que contém corretamente o nome de cada perda do passivo",
    image: imagemTap,
    options: [
      "A-Derivação; B-Inserção; C-Isolação",
      "A-Inserção; B-Isolação; C-Derivação",
      "A-Inserção; B-Derivação; C-Isolação",
      "A-Isolação; B-Inserção; C-Derivação"
    ],
    ans: 2
  },
  {
    id: 49,
    q: "Em que faixa de frequência trabalham os sinais de CATV?",
    options: ["THz", "GHz", "KHz", "MHz"],
    ans: 3
  },
  {
    id: 50,
    q: "Qual a finalidade da pingadeira?",
    options: [
      "Apenas para deixar a estética da instalação ideal",
      "Serve como reserva técnica caso o cliente queira mudar o local",
      "Ocasionar infiltração de água na casa do cliente",
      "Evitar que haja infiltração de água na casa do cliente através do cabo"
    ],
    ans: 3
  },
  {
    id: 51,
    q: "Quais as partes que compõem um cabo de Fibra Óptica?",
    options: ["Todas as alternativas acima", "Capa protetora", "Núcleo", "Casca"],
    ans: 0
  },
  {
    id: 52,
    q: "Em alta frequência, a corrente tende a migrar para a extremidade do condutor. Que fenômeno é esse?",
    options: ["Efeito Skin", "Efeito Migratório", "Efeito Senoidal", "Efeito QuasiSquare"],
    ans: 0
  },
  {
    id: 53,
    q: "O cliente possui uma TV LCD HD e um decoder HD. Qual opção permite imagem em alta definição?",
    options: ["Cabo SPDIF", "Cabo Vídeo Componente", "Cabo HDMI", "Cabo S-VHS"],
    ans: 2
  },
  {
    id: 54,
    q: "Qual a função do cable isolator?",
    options: [
      "Amplificar o sinal luminoso da fibra óptica",
      "Proteger a instalação e os equipamentos da Claro contra picos de tensão e retorno de AC",
      "Filtrar frequências acima de 350 MHz",
      "Dividir os sinais elétricos em valores iguais"
    ],
    ans: 1
  },
  {
    id: 55,
    q: "Qual a função da Carga Casada?",
    options: [
      "Minimizar pirataria em equipamentos internos e externos",
      "Adequação da rede, fazendo o casamento de impedância do circuito",
      "Unir dois conectores ou cabos distintos",
      "Proteger a instalação contra picos de tensão"
    ],
    ans: 1
  },
  {
    id: 56,
    q: "Qual é o significado de BER?",
    options: ["Taxa de download", "Taxa de transferência de bit", "Taxa de erro de bit", "Taxa de relação sinal-ruído"],
    ans: 2
  },
  {
    id: 57,
    q: "O Claro Fixo utiliza qual padrão de discagem?",
    options: ["VoIP", "FSK", "DTMF ou TOM", "Pulse"],
    ans: 2
  },
  {
    id: 58,
    q: "O que significa cabo Drop?",
    options: [
      "Cabo que conecta o eMTA ao computador",
      "Cabo que liga o poste da companhia elétrica até o ponto de entrada da casa do cliente",
      "Cabo do divisor até o equipamento da Claro",
      "Cabo do decodificador até a TV"
    ],
    ans: 1
  },
  {
    id: 59,
    q: "Quais são os tipos de Modulação Digital utilizados na rede de cabos da Claro?",
    options: ["QPSK e QAM", "QAM e XADSL", "QAM e TDM", "QPSK e TDM"],
    ans: 0
  },
  {
    id: 60,
    q: "O que é FEC?",
    options: [
      "Código detector de sinal",
      "Código detector de transmissão digital",
      "Código detector e corretor de erros",
      "Código detector de erro de bit"
    ],
    ans: 2
  },
  {
    id: 61,
    q: "O que é Canal Direto?",
    options: [
      "Sinal transmitido do cliente até o Headend",
      "Sinal transmitido entre clientes da Claro",
      "Sinal transmitido do Headend até o cliente",
      "Sinal transmitido entre Headends"
    ],
    ans: 2
  },
  {
    id: 62,
    q: "Quais são as faixas de frequência do Canal de Retorno?",
    options: [
      "55 MHz a 750 MHz / 104 MHz a 1 GHz",
      "213 MHz a 550 MHz / 85 MHz a 104 MHz",
      "5 MHz a 55 MHz / 5 MHz a 104 MHz",
      "5 MHz a 42 MHz / 5 MHz a 85 MHz"
    ],
    ans: 3
  },
  {
    id: 63,
    q: "O que é Upstream?",
    options: [
      "Sinal que o eMTA envia para o medidor",
      "Sinal que o eMTA envia para o CMTS",
      "Sinal que o medidor envia para o eMTA",
      "Sinal que o CMTS envia para o eMTA"
    ],
    ans: 1
  },
  {
    id: 64,
    q: "Quais sinais trafegam no Canal Direto?",
    options: [
      "Canais Downstream",
      "Todas as alternativas anteriores",
      "Canais de Vídeo",
      "Canais piloto (alto e baixo)"
    ],
    ans: 1
  },
  {
    id: 65,
    q: "O que é portabilidade?",
    options: [
      "Trocar número fixo por móvel",
      "N.D.A",
      "Manter número independentemente da operadora, mesmo com titulares diferentes",
      "Manter o número fixo ou móvel independentemente da operadora"
    ],
    ans: 3
  },
  {
    id: 66,
    q: "Se o cliente agenda das 11:00 às 14:00 e o técnico chega 14:20, qual indicador é afetado?",
    options: ["TEC1", "ISRA", "STFC", "SCM"],
    ans: 1
  },
  {
    id: 67,
    q: "Qual a função do CMTS?",
    options: [
      "Concentrar dados da internet para transmitir via upstream ao cable modem",
      "Fazer a comunicação e o gerenciamento dos modems",
      "Interligar a rede interna à rede HFC",
      "Interligar a rede de telefonia à internet (VoIP)"
    ],
    ans: 1
  }
];

const quiz2 = [
  { id: 18, q: "Qual das opções representa uma prática correta ao montar o conector RG6?", options: ["Evitar contato entre malha e condutor central", "Emitir alertas automáticos sobre quedas de energia na rede elétrica", "Deixar o dielétrico exposto", "Não descascar a blindagem"], ans: 0 },
  { id: 19, q: "Qual é a principal função da funcionalidade “Certidão de Atendimento” no aplicativo Técnico Nota 10?", options: ["Monitorar o uso de dados dos clientes em tempo real", "O número de série do TAP", "Fornecer relatórios administrativos sobre o desempenho dos técnicos", "Realizar a leitura e análise das frequências de canais digitais como Upstream, Downstream, OFDM e OFDMA"], ans: 3 },
  { id: 20, q: "O que é ruído?", options: ["É uma forma de amplificar o sinal", "É uma forma que o equipamento entende o sinal em alta qualidade", "Ruído é uma interferência vinda de fontes externas que ingressa na instalação e causa defeito nos produtos instalados", "É uma forma de transmitir o sinal ao Headend"], ans: 2 },
  { id: 21, q: "Qual é o padrão de funcionamento do RX nos terminais (Decodificadores e eMTAs)?", options: ["Entre +20dBmV e -20dBmV", "Entre +12dBmV e -12dBmV", "Entre +5dBmV e -5dBmV", "Entre +15dBmV e -15dBmV"], ans: 1 },
  { id: 22, q: "Qual é o padrão de funcionamento do TX nos terminais (Decodificadores e eMTAs)?", options: ["Entre 27dBmV e 57dBmV", "Entre 35dBmV e 55dBmV", "Entre 38dBmV e 51dBmV", "Entre +10dBmV e -10dBmV"], ans: 2 },
  { id: 23, q: "Qual é o padrão de funcionamento do SNR Down e SNR Up nos terminais (Decodificadores e eMTAs)?", options: ["SNR Down abaixo de 27dB e SNR Up abaixo de 15dB", "SNR Down acima de 35dB e SNR Up acima de 27dB", "SNR Down abaixo de 35dB e SNR Up abaixo de 27dB", "SNR Down entre 20dB e 30dB e SNR Up entre 17dB e 22dB"], ans: 1},
  { id: 24, q: "É possível efetuar a medição de níveis de sinal pelo seu próprio smartphone. Basta acessar um site. Qual é o site usado para medição de níveis?", options: ["sinais.claro.virtua.com", "medidordesinal.com.br", "niveis.virtua.com.br", "datacenter.virtua.com"], ans: 2 },
  { id: 25, q: "Qual é a atenuação de um divisor three way balanceado?", options: ["6dB em todas as portas", "8dB em todas as portas", "4,5dB em todas as portas", "Não existe atenuação neste divisor"], ans: 0 },
  { id: 26, q: "Para que os canais da grade QAM funcionem corretamente em terminais híbridos, qual configuração é essencial?", options: ["Instalar apenas o cabo coaxial e executar a varredura de canais na configuração", "Conectar o terminal somente à internet e configurar a senha de conteúdos", "Instalar o cabo coaxial, conectar à internet e executar a varredura de canais", "Conectar o terminal somente à internet e executar o valida retorno"], ans: 2 },
  { id: 27, q: "Ao realizar a instalação do serviço de TV é necessário efetuar o Valida Retorno. Qual é a função deste teste?", options: ["Habilitar todos os serviços do canal direto", "Realizar a validação do canal de retorno do decoder com o Headend", "Validar o pacote do cliente", "Liberar os canais do pacote"], ans: 1 }
];

export default function App() {
  const [selectedQuiz, setSelectedQuiz] = useState(null);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);
  const [showResult, setShowResult] = useState(false);

  // Mapeia a seleção para o banco de dados correto
  const questions = 
    selectedQuiz === 'quiz1' ? quiz1 : 
    selectedQuiz === 'quiz1_1' ? quiz1_1 : 
    quiz2;

  const handleAnswer = (index) => {
    if (index === questions[currentQuestion].ans) setScore(score + 1);
    const next = currentQuestion + 1;
    if (next < questions.length) {
      setCurrentQuestion(next);
    } else {
      setShowResult(true);
    }
  };

  const resetAll = () => {
    setSelectedQuiz(null);
    setCurrentQuestion(0);
    setScore(0);
    setShowResult(false);
  };

  // --- TELA DE SELEÇÃO ---
  if (!selectedQuiz) {
    return (
      <div className="min-h-screen bg-slate-900 text-slate-100 flex items-center justify-center p-4">
        <div className="max-w-md w-full bg-slate-800 p-8 rounded-2xl border border-slate-700 shadow-2xl text-center">
          <h1 className="text-3xl font-bold text-blue-400 mb-8">Simulados Técnicos</h1>
          <div className="space-y-4">
            <button 
              onClick={() => setSelectedQuiz('quiz1')}
              className="w-full bg-slate-700 hover:bg-blue-600 p-6 rounded-xl border border-slate-600 font-bold transition-all"
            >
              🚀 Simulado 1 (Básico/HFC)
            </button>
            <button 
              onClick={() => setSelectedQuiz('quiz1_1')}
              className="w-full bg-slate-700 hover:bg-green-600 p-6 rounded-xl border border-slate-600 font-bold transition-all"
            >
              🚀 Simulado 1.1 (Básico/HFC)
            </button>
            <button 
              onClick={() => setSelectedQuiz('quiz2')}
              className="w-full bg-slate-700 hover:bg-blue-600 p-6 rounded-xl border border-slate-600 font-bold transition-all"
            >
              🛠️ Simulado 2 (Técnico/App)
            </button>
          </div>
        </div>
      </div>
    );
  }

  // --- TELA DO SIMULADO ---
  return (
    <div className="min-h-screen bg-slate-900 text-slate-100 p-4 flex items-center justify-center">
      <div className="max-w-2xl w-full bg-slate-800 rounded-2xl shadow-2xl overflow-hidden border border-slate-700">
        
        {!showResult && (
          <div className="p-6 bg-slate-700/50 border-b border-slate-600">
            <div className="flex justify-between items-center mb-4">
              <button onClick={resetAll} className="text-sm text-slate-400 hover:text-white">← Voltar</button>
              <h1 className="text-xl font-bold text-blue-400">
                {selectedQuiz === 'quiz1' ? 'Simulado 1' : selectedQuiz === 'quiz1_1' ? 'Simulado 1.1' : 'Simulado 2'}
              </h1>
              <span className="text-xs font-mono bg-blue-900/50 px-2 py-1 rounded">
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
              <button onClick={resetAll} className="w-full bg-blue-600 hover:bg-blue-500 text-white font-bold py-4 rounded-xl transition-all">
                Ir para Início
              </button>
            </div>
          ) : (
            <div className="animate-in fade-in slide-in-from-bottom-4 duration-500 text-center">
              <h2 className="text-2xl font-semibold mb-6 text-slate-100 leading-tight">
                {questions[currentQuestion].q}
              </h2>

              {questions[currentQuestion].image && (
                <img 
                  src={questions[currentQuestion].image} 
                  alt="Diagrama" 
                  className="mb-8 rounded-lg border border-slate-600 max-w-full h-auto mx-auto shadow-lg bg-white p-2"
                />
              )}

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