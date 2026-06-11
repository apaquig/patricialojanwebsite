export const realEstateData = {
  es: {
    badgeAccent: "Ecuador y EE.UU.",
    introTitle: "Proyectos Inmobiliarios y Asesoría Patrimonial",
    introText: "El sector inmobiliario es uno de los pilares más sólidos para la protección y el crecimiento de tu patrimonio. Te brindamos una guía financiera y estratégica experta para tomar decisiones informadas en proyectos inmobiliarios tanto en Ecuador como en los Estados Unidos. Analizamos la viabilidad de la inversión, las estructuras fiscales más convenientes y los requerimientos de financiamiento para asegurar tu éxito.",
    ctaBannerTitle: "¿Quieres evaluar tu próximo paso en el mercado inmobiliario?",
    ctaBannerDesc: "Te ayudamos a analizar números, entender contratos y maximizar los rendimientos de tu capital de forma segura.",
    filterAll: "Todos",
    filterEcuador: "Ecuador",
    filterUsa: "Estados Unidos",
    projectsTitle: "Oportunidades Inmobiliarias Destacadas",
    projectsSubtitle: "Proyectos seleccionados por su solidez, ubicación y potencial de rendimiento",
    requestInfo: "Solicitar información del proyecto",
    scheduleConsult: "Agendar una asesoría inmobiliaria",
    viewOpportunities: "Conocer oportunidades disponibles",
    contactPreMessage: "Hola Patricia, me interesa recibir más información sobre el proyecto inmobiliario:",
    
    // Education Sections
    eduTitle: "Aprende antes de invertir",
    eduSubtitle: "Guía básica de inversión en bienes raíces",
    
    howEcuadorTitle: "Inversión Inmobiliaria en Ecuador",
    howEcuadorText: "El mercado ecuatoriano ofrece una excelente relación costo-beneficio, especialmente para la comunidad migrante que desea construir un patrimonio de retorno o asegurar el futuro de sus familias. La inversión se facilita mediante fideicomisos mercantiles seguros, compras en planos con cuotas directas sin intereses durante la construcción, y una economía completamente dolarizada que protege tu capital de la devaluación.",
    
    howUsaTitle: "Inversión Inmobiliaria en Estados Unidos",
    howUsaText: "Estados Unidos representa uno de los mercados más estables y líquidos del mundo. La inversión inmobiliaria aquí permite apalancarse mediante financiamiento bancario convencional o programas de préstamos para inversionistas extranjeros (DSCR). Además, se pueden estructurar a través de sociedades de responsabilidad limitada (LLC) para proteger tus activos personales y optimizar la carga fiscal corporativa.",
    
    comparisonTitle: "Diferencias Clave entre Mercados",
    comparisonHeaders: ["Característica", "Ecuador", "Estados Unidos"],
    comparisonRows: [
      ["Financiamiento", "Crédito directo con promotoras (sin intereses durante construcción) o banca local (tasas 8-10%).", "Apalancamiento bancario amplio con tasas competitivas (6-8%). Préstamos para extranjeros disponibles."],
      ["Seguridad Jurídica", "Resguardado mediante fideicomisos mercantiles independientes que administran los fondos.", "Leyes estrictas de transferencia de título de propiedad y uso de cuentas de custodia (Escrow) seguras."],
      ["Retorno Promedio (Yield)", "Rendimiento anual estimado de renta entre 6% y 9% en zonas premium.", "Rendimiento anual de renta entre 5% y 8%, complementado por una sólida plusvalía histórica."],
      ["Estructura Fiscal", "Impuestos prediales bajos. Exenciones aplicables para jubilados y retornados.", "Optimización fiscal mediante depreciación y deducción de intereses hipotecarios (a través de LLC)."]
    ],
    
    beforeInvestingTitle: "Factores clave a analizar antes de invertir",
    beforeInvestingSubtitle: "Evalúa estos puntos para minimizar riesgos y maximizar tu rentabilidad",
    factors: [
      {
        title: "Propósito de la Inversión",
        desc: "Define si buscas flujo de caja mensual (rentas), plusvalía a largo plazo (revalorización), una casa de vacaciones o patrimonio para tu retiro familiar."
      },
      {
        title: "Capacidad de Pago y Apalancamiento",
        desc: "Calcula tu presupuesto real analizando el pago inicial (down payment), costos de cierre, comisiones de fideicomiso y tasas de interés hipotecario aplicables."
      },
      {
        title: "Ubicación e Infraestructura",
        desc: "Investiga el crecimiento demográfico de la zona, cercanía a transporte, escuelas, atractivos turísticos o comerciales y proyectos de desarrollo urbano planificados."
      },
      {
        title: "Aspectos Legales y Tributarios",
        desc: "Consulta las leyes de propiedad locales, impuestos de adquisición, retenciones fiscales por rentas en el extranjero y la estructura de tenencia recomendada (personal vs. LLC)."
      }
    ],
    
    howWeHelpTitle: "¿Cómo te ayudamos en tu proceso de inversión?",
    howWeHelpText: "Nosotros no vendemos propiedades de forma directa como agentes de bienes raíces convencionales; nuestro rol es ser tu estratega financiero independiente. Te guiamos para que tomes la decisión que mejor se adapte a tu salud financiera global:",
    helpSteps: [
      "Análisis completo de tu capacidad financiera real y presupuesto de inversión.",
      "Comparación imparcial de propuestas inmobiliarias entre Ecuador y EE.UU.",
      "Asesoría en la constitución de empresas (LLC) en EE.UU. para la compra segura de inmuebles.",
      "Guía en la revisión de contratos de fideicomiso en Ecuador o procesos de Escrow en EE.UU.",
      "Planificación fiscal para declarar correctamente tus ingresos por rentas en ambos países."
    ],

    // Projects Array
    projects: [
      {
        id: "ecuador-rio",
        country: "ecuador",
        name: "Torres del Río",
        location: "Guayaquil, Ecuador",
        type: "Apartamentos de Lujo",
        image: "/assets/images/project_ecuador_rio.png",
        description: "Moderno complejo residencial de gran altura ubicado en la zona de mayor crecimiento y plusvalía frente al río. Diseñado con acabados europeos de primera clase y amenidades exclusivas de resort.",
        benefits: [
          "Financiamiento directo sin intereses durante la fase de construcción.",
          "Espectacular vista panorámica al río y amplias áreas verdes.",
          "Seguridad privada 24/7 y control de accesos automatizado.",
          "Alta demanda de alquiler temporal y de larga estancia para ejecutivos."
        ],
        ctaText: "Solicitar información de Torres del Río"
      },
      {
        id: "ecuador-andina",
        country: "ecuador",
        name: "Vista Andina",
        location: "Quito, Ecuador",
        type: "Condominio Residencial",
        image: "/assets/images/project_ecuador_andina.png",
        description: "Exclusivo edificio de apartamentos minimalistas integrados armónicamente con la naturaleza de los valles de Quito. Ideal para familias y jubilados que buscan aire puro y tranquilidad.",
        benefits: [
          "Ubicación estratégica en zona de alta plusvalía residencial.",
          "Eficiencia energética y sistemas inteligentes integrados (domótica).",
          "Terrazas privadas con jardines colgantes y áreas de BBQ comunales.",
          "Resguardado bajo un fideicomiso mercantil bancario certificado."
        ],
        ctaText: "Solicitar información de Vista Andina"
      },
      {
        id: "usa-brickell",
        country: "usa",
        name: "Brickell Horizon",
        location: "Miami, Florida, EE.UU.",
        type: "Apartamentos Urbanos",
        image: "/assets/images/project_usa_brickell.png",
        description: "Elegantes condominios de diseño cosmopolita en el corazón financiero de Brickell. Perfecto para inversionistas extranjeros que buscan ingresos estables en dólares bajo un esquema llave en mano.",
        benefits: [
          "Permite renta a corto plazo mediante plataformas digitales (Airbnb).",
          "Programas de financiamiento disponibles para inversionistas no residentes (préstamos DSCR).",
          "Amenidades de lujo: piscina infinita, spa y centro de negocios.",
          "Administración de propiedad profesional disponible (Property Management)."
        ],
        ctaText: "Solicitar información de Brickell Horizon"
      },
      {
        id: "usa-orlando",
        country: "usa",
        name: "Orlando Family Haven",
        location: "Orlando, Florida, EE.UU.",
        type: "Casas Vacacionales",
        image: "/assets/images/project_usa_orlando.png",
        description: "Casas familiares de estilo contemporáneo en una comunidad cerrada premium a pocos minutos de los principales parques temáticos. Excelente retorno vacacional durante todo el año.",
        benefits: [
          "Completamente amuebladas y listas para su explotación comercial.",
          "Casa club comunitaria con parque acuático y canchas deportivas.",
          "Altas tasas de ocupación impulsadas por el turismo global constante.",
          "Estructura óptima para compra a través de una LLC corporativa."
        ],
        ctaText: "Solicitar información de Orlando Family Haven"
      }
    ]
  },
  en: {
    badgeAccent: "Ecuador & USA",
    introTitle: "Real Estate Projects & Wealth Advising",
    introText: "The real estate sector is one of the most reliable pillars for protecting and growing your wealth. We provide expert financial and strategic guidance to help you make informed decisions in real estate projects both in Ecuador and the United States. We analyze investment viability, the most convenient tax structures, and financing requirements to secure your success.",
    ctaBannerTitle: "Want to evaluate your next step in the real estate market?",
    ctaBannerDesc: "We help you analyze numbers, understand contracts, and maximize your capital yields safely.",
    filterAll: "All",
    filterEcuador: "Ecuador",
    filterUsa: "United States",
    projectsTitle: "Featured Real Estate Opportunities",
    projectsSubtitle: "Projects selected for their financial strength, prime locations, and yield potential",
    requestInfo: "Request project details",
    scheduleConsult: "Schedule a real estate consultation",
    viewOpportunities: "Explore available opportunities",
    contactPreMessage: "Hello Patricia, I am interested in receiving more information about the real estate project:",
    
    // Education Sections
    eduTitle: "Learn Before Investing",
    eduSubtitle: "Basic guide to real estate investment",
    
    howEcuadorTitle: "Real Estate Investment in Ecuador",
    howEcuadorText: "The Ecuadorian market offers an excellent cost-benefit ratio, especially for the migrant community wishing to build a retirement estate or secure their family's future. Investment is facilitated through secure mercantile trusts (fideicomisos), purchasing off-plan with direct interest-free installments during construction, and a fully dollarized economy that shields your capital from devaluation.",
    
    howUsaTitle: "Real Estate Investment in the United States",
    howUsaText: "The United States represents one of the most stable and liquid markets in the world. Real estate investment here allows you to leverage through conventional bank financing or foreign national loan programs (DSCR). Additionally, purchases can be structured through Limited Liability Companies (LLCs) to protect personal assets and optimize corporate tax burdens.",
    
    comparisonTitle: "Key Differences Between Markets",
    comparisonHeaders: ["Feature", "Ecuador", "United States"],
    comparisonRows: [
      ["Financing", "Direct developer financing (interest-free during construction) or local banking (8-10% interest rates).", "Broad bank leverage with competitive interest rates (6-8%). Loans for foreign nationals are widely available."],
      ["Legal Security", "Funds are safely managed and administered by independent certified mercantile trusts.", "Strict title transfer laws and secure, independent escrow accounts protect buyer deposits."],
      ["Average Yield (Cap Rate)", "Estimated annual rental yields between 6% and 9% in premium locations.", "Annual rental yields between 5% and 8%, complemented by stable historical appreciation."],
      ["Tax Structure", "Very low property taxes. Special tax exemptions apply for retirees and returning expats.", "Tax optimization through property depreciation and mortgage interest deductions (via LLC)."]
    ],
    
    beforeInvestingTitle: "Key factors to analyze before investing",
    beforeInvestingSubtitle: "Evaluate these parameters to minimize risks and maximize your yields",
    factors: [
      {
        title: "Investment Purpose",
        desc: "Define if you are looking for monthly cash flow (rentals), long-term appreciation (growth), a vacation home, or retirement wealth for your family."
      },
      {
        title: "Payment Capacity & Leverage",
        desc: "Calculate your actual budget by analyzing down payment requirements, closing costs, trust fees, and applicable mortgage interest rates."
      },
      {
        title: "Location & Infrastructure",
        desc: "Research population growth in the area, proximity to public transit, schools, commercial spots, tourist attractions, and planned urban developments."
      },
      {
        title: "Legal & Tax Aspects",
        desc: "Consult local property laws, transfer taxes, foreign rental income tax withholding, and the recommended holding entity structure (personal vs. LLC)."
      }
    ],
    
    howWeHelpTitle: "How do we help you in your investment journey?",
    howWeHelpText: "We do not sell properties directly like conventional real estate agents; our role is to act as your independent financial strategist. We guide you to make the decision that best fits your global financial health:",
    helpSteps: [
      "Comprehensive analysis of your actual financial capacity and investment budget.",
      "Impartial comparison of real estate offers between Ecuador and the US.",
      "Advice on setting up corporate structures (LLCs) in the US for secure property acquisition.",
      "Guidance on reviewing trust contracts in Ecuador or Escrow processes in the US.",
      "Tax planning to properly file and declare rental income in both countries."
    ],

    // Projects Array
    projects: [
      {
        id: "ecuador-rio",
        country: "ecuador",
        name: "Torres del Río",
        location: "Guayaquil, Ecuador",
        type: "Luxury Apartments",
        image: "/assets/images/project_ecuador_rio.png",
        description: "Modern high-rise residential complex located in the fastest-growing waterfront area. Designed with premium European finishes and exclusive resort-style amenities.",
        benefits: [
          "Direct developer financing with 0% interest during construction.",
          "Spectacular panoramic river views and extensive green spaces.",
          "24/7 private security and automated access control.",
          "High demand for both short-term and executive long-term rentals."
        ],
        ctaText: "Request details for Torres del Río"
      },
      {
        id: "ecuador-andina",
        country: "ecuador",
        name: "Vista Andina",
        location: "Quito, Ecuador",
        type: "Residential Condo",
        image: "/assets/images/project_ecuador_andina.png",
        description: "An exclusive building of minimalist apartments harmoniously integrated with the nature of Quito's valleys. Ideal for families and retirees looking for clean air and peace.",
        benefits: [
          "Strategic location in a high-appreciation residential suburb.",
          "Energy efficiency and integrated smart home systems.",
          "Private terraces with hanging gardens and community BBQ areas.",
          "Secured under a certified banking mercantile trust."
        ],
        ctaText: "Request details for Vista Andina"
      },
      {
        id: "usa-brickell",
        country: "usa",
        name: "Brickell Horizon",
        location: "Miami, Florida, USA",
        type: "Urban Apartments",
        image: "/assets/images/project_usa_brickell.png",
        description: "Elegant condominiums with a cosmopolitan design in the heart of the Brickell financial district. Perfect for foreign investors seeking stable USD income with a turnkey setup.",
        benefits: [
          "Short-term rentals allowed through digital platforms (Airbnb).",
          "Financing programs available for non-resident investors (DSCR loans).",
          "Luxury amenities: infinity pool, spa, and business center.",
          "Professional turnkey property management services available."
        ],
        ctaText: "Request details for Brickell Horizon"
      },
      {
        id: "usa-orlando",
        country: "usa",
        name: "Orlando Family Haven",
        location: "Orlando, Florida, USA",
        type: "Vacation Homes",
        image: "/assets/images/project_usa_orlando.png",
        description: "Contemporary-style family homes in a premium gated community just minutes from major theme parks. Excellent vacation rental returns year-round.",
        benefits: [
          "Fully furnished and ready for commercial operation.",
          "Community clubhouse with water park and sports courts.",
          "High occupancy rates driven by constant global tourism.",
          "Optimal purchasing structure through a corporate LLC."
        ],
        ctaText: "Request details for Orlando Family Haven"
      }
    ]
  },
  pt: {
    badgeAccent: "Equador & EUA",
    introTitle: "Projetos Imobiliários e Assessoria Patrimonial",
    introText: "O setor imobiliário é um dos pilares mais sólidos para a proteção e o crescimento do seu patrimônio. Oferecemos orientação financeira e estratégica qualificada para que você tome decisões embasadas em projetos imobiliários tanto no Equador quanto nos Estados Unidos. Analisamos a viabilidade da compra, as estruturas fiscais mais eficientes e as condições de financiamento para garantir seu sucesso.",
    ctaBannerTitle: "Quer avaliar seu próximo passo no mercado imobiliário?",
    ctaBannerDesc: "Ajudamos você a analisar números, entender contratos e maximizar os rendimientos do seu capital de forma segura.",
    filterAll: "Todos",
    filterEcuador: "Equador",
    filterUsa: "Estados Unidos",
    projectsTitle: "Oportunidades Imobiliárias em Destaque",
    projectsSubtitle: "Projetos selecionados pela solidez financeira, localização privilegiada e potencial de rendimento",
    requestInfo: "Solicitar informações do projeto",
    scheduleConsult: "Agendar assessoria imobiliária",
    viewOpportunities: "Conhecer oportunidades disponíveis",
    contactPreMessage: "Olá Patricia, gostaria de receber mais informações sobre o projeto imobiliário:",
    
    // Education Sections
    eduTitle: "Aprenda Antes de Investir",
    eduSubtitle: "Guia básico de investimento em bens de raiz",
    
    howEcuadorTitle: "Investimento Imobiliário no Equador",
    howEcuadorText: "O mercado equatoriano oferece uma excelente relação custo-benefício, especialmente para a comunidade imigrante que deseja construir um patrimônio de retorno ou garantir o futuro de suas famílias. O investimento é facilitado por fundos fiduciários seguros (fideicomisos), compras na planta com parcelamento direto sem juros com a construtora, e uma economia totalmente dolarizada que protege seu capital da desvalorização cambial.",
    
    howUsaTitle: "Investimento Imobiliário nos Estados Unidos",
    howUsaText: "Os Estados Unidos representam um dos mercados mais estáveis e líquidos do mundo. O investimento imobiliário aqui permite alavancagem por meio de financiamento bancário convencional ou programas de crédito para investidores estrangeiros (DSCR). Além disso, pode ser estruturado por meio de sociedades de responsabilidade limitada (LLC) para proteger ativos pessoais e otimizar a carga tributária corporativa.",
    
    comparisonTitle: "Diferenças Principais entre os Mercados",
    comparisonHeaders: ["Característica", "Equador", "Estados Unidos"],
    comparisonRows: [
      ["Financiamento", "Crédito direto com a construtora (sem juros durante a obra) ou bancos locais (taxas de 8-10%).", "Alavancagem bancária ampla com taxas de juros competitivas (6-8%). Empréstimos para estrangeiros disponíveis."],
      ["Segurança Jurídica", "Fundos protegidos por fundos fiduciários mercantis (fideicomisos) independentes administradores.", "Leis rigorosas de transferência de propriedade e uso de contas de garantia (Escrow) seguras."],
      ["Retorno Médio (Yield)", "Rendimento anual estimado de aluguel entre 6% e 9% em áreas nobres.", "Rendimento anual de aluguel entre 5% e 8%, complementado por uma valorização histórica robusta."],
      ["Estrutura Fiscal", "Impostos sobre a propriedade (IPTU local) muito baixos. Isenções aplicáveis a aposentados.", "Otimização tributária via depreciação de ativos e dedução de juros hipotecários (através de LLC)."]
    ],
    
    beforeInvestingTitle: "Fatores fundamentais para analisar antes de investir",
    beforeInvestingSubtitle: "Avalie estes critérios para diminuir riscos e maximizar seu retorno financeiro",
    factors: [
      {
        title: "Objetivo do Investimento",
        desc: "Defina se o seu foco é a geração de renda passiva mensal (aluguel), valorização a longo prazo, casa de veraneio ou patrimônio estável para aposentadoria familiar."
      },
      {
        title: "Capacidade de Pagamento e Alavancagem",
        desc: "Calcule seu orçamento real analisando a entrada mínima (down payment), custos de fechamento de contrato, taxas fiduciárias e taxas de juros aplicáveis."
      },
      {
        title: "Localização e Infraestrutura",
        desc: "Pesquise o crescimento populacional da região, proximidade de transporte público, escolas, centros comerciais, atrativos turísticos e futuros planos de desenvolvimento urbano."
      },
      {
        title: "Aspectos Legais e Fiscais",
        desc: "Consulte a legislação de propriedade local, impostos sobre transações imobiliárias, impostos de renda sobre aluguel de estrangeiros e a melhor holding para compra (pessoa física vs. LLC)."
      }
    ],
    
    howWeHelpTitle: "Como ajudamos você no processo de investimento?",
    howWeHelpText: "Nós não vendemos imóveis diretamente como corretores de imóveis comuns; atuamos como seus estrategistas financeiros independentes. Apoiamos você a tomar a decisão ideal para a sua saúde financeira global:",
    helpSteps: [
      "Análise aprofundada da sua saúde financeira real e orçamento disponível para investimento.",
      "Comparação imparcial de propostas imobiliárias entre o Equador e os EUA.",
      "Assessoria na abertura de empresas (LLC) nos EUA para a aquisição segura de imóveis.",
      "Orientação na assinatura de contratos fiduciários no Equador ou processos de Escrow nos EUA.",
      "Planejamento fiscal para declaração correta das suas receitas de aluguel em ambos os países."
    ],

    // Projects Array
    projects: [
      {
        id: "ecuador-rio",
        country: "ecuador",
        name: "Torres del Río",
        location: "Guayaquil, Equador",
        type: "Apartamentos de Luxo",
        image: "/assets/images/project_ecuador_rio.png",
        description: "Moderno complexo residencial de alto padrão localizado na área de maior crescimento à beira-rio. Projetado com acabamento de alto nível e infraestrutura de lazer completa.",
        benefits: [
          "Financiamento direto com a construtora sem juros durante a fase de obras.",
          "Vista panorâmica incrível do rio e amplas áreas verdes.",
          "Segurança privada 24/7 com controle de acesso automatizado.",
          "Alta demanda para locações de curta e longa duração para executivos."
        ],
        ctaText: "Solicitar informações de Torres del Río"
      },
      {
        id: "ecuador-andina",
        country: "ecuador",
        name: "Vista Andina",
        location: "Quito, Equador",
        type: "Condomínio Residencial",
        image: "/assets/images/project_ecuador_andina.png",
        description: "Exclusivo prédio de apartamentos minimalistas integrados harmoniosamente à natureza dos vales de Quito. Perfeito para quem busca tranquilidade e ar puro.",
        benefits: [
          "Localização privilegiada em um subúrbio residencial de alta valorização.",
          "Eficiência energética avançada e automação residencial inteligente.",
          "Varandas privativas com jardins suspensos e churrasqueira de uso comum.",
          "Garantido sob a segurança de um fundo fiduciário bancário certificado."
        ],
        ctaText: "Solicitar informações de Vista Andina"
      },
      {
        id: "usa-brickell",
        country: "usa",
        name: "Brickell Horizon",
        location: "Miami, Flórida, EUA",
        type: "Apartamentos Urbanos",
        image: "/assets/images/project_usa_brickell.png",
        description: "Elegantes condomínios de design cosmopolita no coração financeiro de Brickell. Excelente para investidores que buscam rentabilidade estável em dólar em um modelo pronto.",
        benefits: [
          "Locação de curta temporada permitida em plataformas digitais (Airbnb).",
          "Programas de crédito facilitados para investidores estrangeiros não residentes (empréstimos DSCR).",
          "Lazer completo: piscina com borda infinita, spa e business center.",
          "Disponibilidade de serviços profissionais de gestão imobiliária (Property Management)."
        ],
        ctaText: "Solicitar informações de Brickell Horizon"
      },
      {
        id: "usa-orlando",
        country: "usa",
        name: "Orlando Family Haven",
        location: "Orlando, Flórida, EUA",
        type: "Casas de Férias",
        image: "/assets/images/project_usa_orlando.png",
        description: "Casas familiares de estilo contemporâneo em condomínio fechado de alto padrão a poucos minutos dos parques da Disney. Excelente ocupação o ano todo.",
        benefits: [
          "Totalmente mobiliadas e prontas para locação turística.",
          "Clubhouse do condomínio com parque aquático e quadras de esporte.",
          "Alta taxa de ocupação impulsionada pelo turismo global permanente em Orlando.",
          "Estrutura societária ideal para aquisição tributária via empresa LLC."
        ],
        ctaText: "Solicitar informações de Orlando Family Haven"
      }
    ]
  }
};
