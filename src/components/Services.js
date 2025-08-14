import React, { useState } from 'react';
import './Services.css';

const servicesData = [
  {
    title: 'Direito Previdenciário -  Defesa dos Segurados do INSS',
    description:
      'Atuamos em todas as fases, desde o requerimento administrativo até ações judiciais, nas seguintes áreas: Aposentadorias (idade, tempo de contribuição, invalidez e especial); Pensão por morte; Auxílio-doença e auxílio-acidente; Revisão de benefícios;  Planejamento previdenciário;  Benefícios assistenciais – LOAS/BPC..',
  },
  {
    title: 'Direito Imobiliário – Proteção e Segurança para seu Patrimônio',
    description:
      'Atuação completa na defesa dos direitos dos segurados do INSS. Auxiliamos em requerimentos, revisões e processos judiciais relacionados a: Aposentadorias por idade, tempo de contribuição, invalidez e especial; Pensão por morte; Auxílio-doença e auxílio-acidente; Revisão de benefícios; Planejamento previdenciário; Benefícios assistenciais (LOAS/BPC).',
  },
  {
    title: 'Direito de Família',
    description:
      'Assessoria completa em conflitos familiares: Divórcio consensual e litigioso; Guarda, visitação e pensão alimentícia; Partilha de bens; União estável e sua dissolução; Reconhecimento de paternidade; Medidas protetivas em casos de violência doméstica.',
  },
  {
    title: 'Direito Sucessório',
    description:
      'Atuamos em planejamento sucessório, elaboração de testamentos, condução de inventários judiciais e extrajudiciais, bem como na partilha de bens, sempre com foco na segurança jurídica, proteção patrimonial e prevenção de conflitos familiares.',
  },
  {
    title: 'Direito Agrário',
    description:
      'Atuação em questões fundiárias, elaboração e revisão de contratos agrários, operações de crédito rural, regularização de imóveis rurais e defesa dos interesses do produtor, sempre com foco em segurança jurídica e proteção da atividade no campo.',
  },
  {
    title: 'Direito do Trabalho',
    description:
      'Atuação na defesa de direitos trabalhistas, incluindo verbas rescisórias, horas extras, reconhecimento de vínculo, estabilidade, casos de assédio e acidentes de trabalho, sempre com foco na reparação justa e na proteção do trabalhador.',
  },
  {
    title: 'Direito do Médico e da Saúde',
    description:
      'Consultoria e representação judicial em casos de responsabilidade civil médica, ações contra planos de saúde, questões relacionadas ao consentimento informado e defesa dos direitos de profissionais e pacientes, sempre com foco em segurança jurídica e efetividade das soluções',
  },
  {
    title: 'Direito Tributário',
    description:
      'Atuação estratégica na defesa de pessoas físicas em questões tributárias, abrangendo planejamento fiscal, restituição de tributos pagos indevidamente, isenções, mandados de segurança e atuação no contencioso administrativo e judicial, com orientação clara sobre direitos e deveres perante o fisco.',
  },
  {
    title: 'Direito Aduaneiro',
    description:
      'Atuação especializada em consultoria e defesa em operações de importação e exportação, incluindo liberação de mercadorias, regimes aduaneiros especiais, contencioso administrativo e judicial, além de mandados de segurança contra exigências fiscais indevidas.',
  },
];

// Função para formatar descrição em múltiplas linhas
function formatDescription(text) {
  const parts = text.split(':');
  if (parts.length < 2) {
    return text.split(';').map((part, idx, arr) => (
      <React.Fragment key={idx}>
        {part.trim()}
        {idx !== arr.length - 1 && <br />}
      </React.Fragment>
    ));
  }

  return (
    <>
      {parts[0].trim()}:
      <br />
      {parts[1].split(';').map((part, idx, arr) => (
        <React.Fragment key={idx}>
          {part.trim()}
          {idx !== arr.length - 1 && <br />}
        </React.Fragment>
      ))}
    </>
  );
}

export default function Services() {
  const [expandedCards, setExpandedCards] = useState({});

  const toggleExpand = (idx) => {
    setExpandedCards((prev) => ({
      ...prev,
      [idx]: !prev[idx],
    }));
  };

  const renderCard = (title, description, idx) => {
    const isExpanded = expandedCards[idx];
    const showToggle = description.length > 150;

    return (
      <article key={idx} className="service-card" tabIndex={0}>
        <h3 className="service-card-title">{title}</h3>
        <p className={`service-card-desc ${isExpanded ? 'expanded' : 'collapsed'}`}>
          {isExpanded ? formatDescription(description) : (
            // Mostrar só as primeiras 150 chars cortando no último ; antes de 150
            (() => {
              const truncated = description.slice(0, 150);
              const lastSemi = truncated.lastIndexOf(';');
              const preview = lastSemi !== -1 ? truncated.slice(0, lastSemi + 1) : truncated;
              return formatDescription(preview + (preview.endsWith(';') ? '' : '...'));
            })()
          )}
        </p>
        {showToggle && (
          <button className="toggle-btn" onClick={() => toggleExpand(idx)}>
            {isExpanded ? 'Ver menos' : 'Ver mais'}
          </button>
        )}
      </article>
    );
  };

  return (
    <section className="services" id="servicos">
      <h2 className="services-title">Áreas de Atuação</h2>
      <div className="services-row">
        {servicesData.slice(0, 3).map(({ title, description }, idx) =>
          renderCard(title, description, idx)
        )}
      </div>
      <div className="services-row services-row-center">
        {servicesData.slice(3).map(({ title, description }, idx) =>
          renderCard(title, description, idx + 3)
        )}
      </div>
    </section>
  );
}
