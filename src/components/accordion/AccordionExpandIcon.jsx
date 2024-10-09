import * as React from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward';

import "./AccordionExpandIcon.css"

export default function AccordionExpandIcon() {
  return (
    <div className='accordion-container'>
      <Accordion>
        <AccordionSummary
          expandIcon={<ArrowDownwardIcon />}
          aria-controls="panel1-content"
          id="panel1-header"
        >
          <Typography>
            <p className="accordion-title">
              Crimes ambienais podem intensificar as mudanças climáticas, impactando não apenas o clima, mas também a saúde dos ecossistemas e a qualidade de vida das populações humanas.
            </p>
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            <p className="accordion-description">
              As mudanças climáticas são uma das maiores ameaças que enfrentamos atualmente. O aumento das temperaturas globais está associado a eventos climáticos extremos, como ondas de calor, tempestades intensas e secas prolongadas. Esses eventos não apenas devastam comunidades, mas também afetam a agricultura, a segurança alimentar e a saúde pública. O IPCC alerta que, se não adotarmos medidas urgentes, poderemos ultrapassar o limite crítico de 1,5 °C de aumento de temperatura, resultando em efeitos catastróficos que podem afetar bilhões de pessoas. A transição para uma economia de baixo carbono é essencial e pode ser alcançada por meio de políticas robustas de redução de emissões e investimentos em tecnologia limpa.
            </p>
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary
          expandIcon={<ArrowDownwardIcon />}
          aria-controls="panel2-content"
          id="panel2-header"
        >
          <Typography>
            <p className="accordion-title">
              O desmatamento reduz a biodiversidade e contribui para a liberação de gases de efeito estufa, especialmente em áreas tropicais, comprometendo esses seus ecossistêmicos vitais.
            </p>
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            <p className="accordion-description">
              O desmatamento é um fator central na degradação ambiental. As florestas atuam como sumidouros de carbono, absorvendo CO2 da atmosfera e ajudando a mitigar o aquecimento global. Quando essas florestas são destruídas, não só liberamos grandes quantidades de carbono armazenado, mas também eliminamos habitats essenciais para inúmeras espécies. Além disso, o desmatamento afeta comunidades locais que dependem das florestas para sua sobrevivência, comprometendo sua segurança alimentar e econômica. Proteger e restaurar florestas, por meio de iniciativas como reflorestamento e agroflorestas, é uma solução viável que também pode promover a biodiversidade e a resiliência climática.
            </p>

          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary
          expandIcon={<ArrowDownwardIcon />}
          aria-controls="panel2-content"
          id="panel2-header"
        >
          <Typography>
            <p className="accordion-title">
              Crimes ambientais diminuem a biodiversidade, afetando a saúde dos ecossistemas e a sobrevivência humana.
            </p></Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            <p className="accordion-description">
              A biodiversidade é a base da vida na Terra, e sua perda representa uma ameaça significativa à segurança alimentar, à saúde e ao bem-estar humano. Ecossistemas diversos são mais resilientes a mudanças ambientais e oferecem serviços essenciais, como polinização, purificação da água e controle de pragas. O relatório da ONU destaca que a perda de biodiversidade está acelerada pela urbanização, poluição e práticas agrícolas insustentáveis. Se não agirmos agora para conservar a biodiversidade, podemos comprometer o futuro da agricultura e da medicina, além de prejudicar a capacidade dos ecossistemas de se adaptarem a mudanças climáticas. Práticas como a proteção de habitats e a restauração de ecossistemas são fundamentais para reverter essa tendência.
            </p>
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary
          expandIcon={<ArrowDownwardIcon />}
          aria-controls="panel2-content"
          id="panel2-header"
        >
          <Typography>
            <p className="accordion-title">
              De maneira indireta, alguns crimes ambientais alcançam os oceanos, afetando a cadeia aquática e a saúde humana.
            </p>
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            <p className="accordion-description">
              Os oceanos são vitais para o equilíbrio do nosso planeta, mas estão sob pressão crescente devido à poluição. O plástico, por exemplo, não apenas afeta a vida marinha, mas também entra na cadeia alimentar humana, gerando preocupações de saúde pública. O impacto da poluição química nos ecossistemas marinhos é igualmente alarmante, com a morte de zonas marinhas resultando em consequências severas para a pesca e a biodiversidade. Para proteger nossos oceanos, é fundamental reduzir a produção de plástico, aumentar a reciclagem e implementar políticas que protejam os ecossistemas marinhos. A preservação dos oceanos é uma questão de saúde planetária e um imperativo moral.
            </p>
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary
          expandIcon={<ArrowDownwardIcon />}
          aria-controls="panel2-content"
          id="panel2-header"
        >
          <Typography>
            <p className="accordion-title">Além dos oceanos, os corpos de água doce são atingidos também, compromente o principal recurso natural: a água.</p>
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            <p className="accordion-description">
              A água é um recurso escasso e vital, e sua gestão inadequada pode levar a crises humanitárias e ambientais. A escassez de água afeta diretamente a agricultura, a saúde e o desenvolvimento econômico. Com o aumento da população e as mudanças climáticas, a pressão sobre os recursos hídricos só tende a aumentar. Estudos indicam que, em algumas regiões, a escassez pode se tornar uma causa de conflitos. É imperativo implementar práticas de conservação e uso sustentável da água, além de tecnologias que aumentem a eficiência hídrica. Proteger as fontes de água e restaurar ecossistemas aquáticos são ações necessárias para garantir um futuro sustentável.
            </p>
          </Typography>
        </AccordionDetails>
      </Accordion>
    </div >
  );
}