export interface Conta {
    ContaMensal: number,
    ContaAnual: number,
    Consumo: string,
    Investimento: number,
    EconomiaAno01: number,
    EconomiaAno02: number,
    EconomiaAno03: number,
    EconomiaAno04: number,
    EconomiaAno05: number,
    EconomiaAno06: number,
    EconomiaAno07: number,
    GanhoTotalSemAplicacao: number,
    GanhoTotalComAplicacao: number,
}

export const economiaConta = [
    {
        ContaMensal: 0,
        ContaAnual: 0,
        Consumo: "0 kWh",
        Investimento: 0,
        EconomiaAno01: 0,
        EconomiaAno02: 0,
        EconomiaAno03: 0,
        EconomiaAno04: 0,
        EconomiaAno05: 0,
        EconomiaAno06: 0,
        EconomiaAno07: 0,
        GanhoTotalSemAplicacao: 0,
        GanhoTotalComAplicacao: 0 
    },
    {
        ContaMensal: 1000,
        ContaAnual: 12000,
        Consumo: "1.000 kWh",
        Investimento: 28000,
        EconomiaAno01: 2400,
        EconomiaAno02: 2400,
        EconomiaAno03: 3600,
        EconomiaAno04: 3600,
        EconomiaAno05: 4800,
        EconomiaAno06: 4800,
        EconomiaAno07: 6000,
        GanhoTotalSemAplicacao: 105600,
        GanhoTotalComAplicacao: 356358 
    },
    {
        ContaMensal: 1500,
        ContaAnual: 18000,
        Consumo: "1.500 kWh",
        Investimento: 35000,
        EconomiaAno01: 3600,
        EconomiaAno02: 3600,
        EconomiaAno03: 5400,
        EconomiaAno04: 5400,
        EconomiaAno05: 7200,
        EconomiaAno06: 7200,
        EconomiaAno07: 9000,
        GanhoTotalSemAplicacao: 158400,
        GanhoTotalComAplicacao: 534537 
    },
    {
        ContaMensal: 2000,
        ContaAnual: 24000,
        Consumo: "2.000 kWh",
        Investimento: 45000,
        EconomiaAno01: 4800,
        EconomiaAno02: 4800,
        EconomiaAno03: 7200,
        EconomiaAno04: 7200,
        EconomiaAno05: 9600,
        EconomiaAno06: 9600,
        EconomiaAno07: 12000,
        GanhoTotalSemAplicacao: 211200,
        GanhoTotalComAplicacao: 712716 
    },
    {
        ContaMensal: 3000,
        ContaAnual: 36000,
        Consumo: "2.000 kWh",
        Investimento: 65000,
        EconomiaAno01: 7200,
        EconomiaAno02: 7200,
        EconomiaAno03: 10800,
        EconomiaAno04: 10800,
        EconomiaAno05: 14400,
        EconomiaAno06: 14400,
        EconomiaAno07: 18000,
        GanhoTotalSemAplicacao: 316800,
        GanhoTotalComAplicacao: 1069075 
    },
    {
        ContaMensal: 4000,
        ContaAnual: 48000,
        Consumo: "4.000 kWh",
        Investimento: 85000,
        EconomiaAno01: 9600,
        EconomiaAno02: 9600,
        EconomiaAno03: 14400,
        EconomiaAno04: 14400,
        EconomiaAno05: 19200,
        EconomiaAno06: 19200,
        EconomiaAno07: 24000,
        GanhoTotalSemAplicacao: 422400,
        GanhoTotalComAplicacao: 1361049 
    },
    {
        ContaMensal: 5000,
        ContaAnual: 60000,
        Consumo: "5.000 kWh",
        Investimento: 105000,
        EconomiaAno01: 12000,
        EconomiaAno02: 12000,
        EconomiaAno03: 18000,
        EconomiaAno04: 18000,
        EconomiaAno05: 24000,
        EconomiaAno06: 24000,
        EconomiaAno07: 30000,
        GanhoTotalSemAplicacao: 528000,
        GanhoTotalComAplicacao: 1781791 
    },
    {
        ContaMensal: 6000,
        ContaAnual: 72000,
        Consumo: "6.000 kWh",
        Investimento: 125000,
        EconomiaAno01: 14400,
        EconomiaAno02: 14400,
        EconomiaAno03: 21600,
        EconomiaAno04: 21600,
        EconomiaAno05: 28800,
        EconomiaAno06: 28800,
        EconomiaAno07: 36000,
        GanhoTotalSemAplicacao: 633600,
        GanhoTotalComAplicacao: 2138149 
    },
    {
        ContaMensal: 7000,
        ContaAnual: 84000,
        Consumo: "7.000 kWh",
        Investimento: 150000,
        EconomiaAno01: 16800,
        EconomiaAno02: 16800,
        EconomiaAno03: 25200,
        EconomiaAno04: 25200,
        EconomiaAno05: 33600,
        EconomiaAno06: 33600,
        EconomiaAno07: 42000,
        GanhoTotalSemAplicacao: 739200,
        GanhoTotalComAplicacao: 2495507 
    },
    {
        ContaMensal: 8000,
        ContaAnual: 96000,
        Consumo: "8.000 kWh",
        Investimento: 165000,
        EconomiaAno01: 19200,
        EconomiaAno02: 19200,
        EconomiaAno03: 28800,
        EconomiaAno04: 28800,
        EconomiaAno05: 38400,
        EconomiaAno06: 38400,
        EconomiaAno07: 48000,
        GanhoTotalSemAplicacao: 844800,
        GanhoTotalComAplicacao: 2850866,
    },
    {
        ContaMensal: 9000,
        ContaAnual: 108000,
        Consumo: "9.000 kWh",
        Investimento: 185000,
        EconomiaAno01: 21600,
        EconomiaAno02: 21600,
        EconomiaAno03: 32400,
        EconomiaAno04: 32400,
        EconomiaAno05: 43200,
        EconomiaAno06: 43200,
        EconomiaAno07: 54000,
        GanhoTotalSemAplicacao: 950400,
        GanhoTotalComAplicacao: 3207224,
    },
    {
        ContaMensal: 10000,
        ContaAnual: 120000,
        Consumo: "10.000 kWh",
        Investimento: 205000,
        EconomiaAno01: 24000,
        EconomiaAno02: 24000,
        EconomiaAno03: 36000,
        EconomiaAno04: 36000,
        EconomiaAno05: 48000,
        EconomiaAno06: 48000,
        EconomiaAno07: 60000,
        GanhoTotalSemAplicacao: 1056000,
        GanhoTotalComAplicacao: 3563582,
    },
    {
        ContaMensal: 11000,
        ContaAnual: 132000,
        Consumo: "11.000 kWh",
        Investimento: 225000,
        EconomiaAno01: 26400,
        EconomiaAno02: 26400,
        EconomiaAno03: 39600,
        EconomiaAno04: 39600,
        EconomiaAno05: 52800,
        EconomiaAno06: 52800,
        EconomiaAno07: 66000,
        GanhoTotalSemAplicacao: 1161600,
        GanhoTotalComAplicacao: 3919941,
    },
    {
        ContaMensal: 12000,
        ContaAnual: 144000,
        Consumo: "12.000 kWh",
        Investimento: 245000,
        EconomiaAno01: 28800,
        EconomiaAno02: 28800,
        EconomiaAno03: 43200,
        EconomiaAno04: 43200,
        EconomiaAno05: 57600,
        EconomiaAno06: 57600,
        EconomiaAno07: 72000,
        GanhoTotalSemAplicacao: 1267200,
        GanhoTotalComAplicacao: 4276299,
    },
    {
        ContaMensal: 13000,
        ContaAnual: 156000,
        Consumo: "13.000 kWh",
        Investimento: 265000,
        EconomiaAno01: 31200,
        EconomiaAno02: 31200,
        EconomiaAno03: 46800,
        EconomiaAno04: 46800,
        EconomiaAno05: 62400,
        EconomiaAno06: 62400,
        EconomiaAno07: 78000,
        GanhoTotalSemAplicacao: 1372800,
        GanhoTotalComAplicacao: 4632657,
    },
    {
        ContaMensal: 14000,
        ContaAnual: 168000,
        Consumo: "14.000 kWh",
        Investimento: 285000,
        EconomiaAno01: 33600,
        EconomiaAno02: 33600,
        EconomiaAno03: 50400,
        EconomiaAno04: 50400,
        EconomiaAno05: 67200,
        EconomiaAno06: 67200,
        EconomiaAno07: 84000,
        GanhoTotalSemAplicacao: 1478400,
        GanhoTotalComAplicacao: 4989015,
    },
    {
        ContaMensal: 15000,
        ContaAnual: 180000,
        Consumo: "15.000 kWh",
        Investimento: 305000,
        EconomiaAno01: 36000,
        EconomiaAno02: 36000,
        EconomiaAno03: 54000,
        EconomiaAno04: 54000,
        EconomiaAno05: 72000,
        EconomiaAno06: 72000,
        EconomiaAno07: 90000,
        GanhoTotalSemAplicacao: 1584000,
        GanhoTotalComAplicacao: 5345374,
    },
    {
        ContaMensal: 16000,
        ContaAnual: 192000,
        Consumo: "16.000 kWh",
        Investimento: 325000,
        EconomiaAno01: 38400,
        EconomiaAno02: 38400,
        EconomiaAno03: 57600,
        EconomiaAno04: 57600,
        EconomiaAno05: 76800,
        EconomiaAno06: 76800,
        EconomiaAno07: 96000,
        GanhoTotalSemAplicacao: 1689600,
        GanhoTotalComAplicacao: 5701732,
    },
    {
        ContaMensal: 17000,
        ContaAnual: 204000,
        Consumo: "17.000 kWh",
        Investimento: 345000,
        EconomiaAno01: 40800,
        EconomiaAno02: 40800,
        EconomiaAno03: 61200,
        EconomiaAno04: 61200,
        EconomiaAno05: 81600,
        EconomiaAno06: 81600,
        EconomiaAno07: 102000,
        GanhoTotalSemAplicacao: 1795200,
        GanhoTotalComAplicacao: 6058090,
    },
    {
        ContaMensal: 18000,
        ContaAnual: 216000,
        Consumo: "18.000 kWh",
        Investimento: 365000,
        EconomiaAno01: 43200,
        EconomiaAno02: 43200,
        EconomiaAno03: 64800,
        EconomiaAno04: 64800,
        EconomiaAno05: 86400,
        EconomiaAno06: 86400,
        EconomiaAno07: 108000,
        GanhoTotalSemAplicacao: 1900800,
        GanhoTotalComAplicacao: 6306328,
    },
    {
        ContaMensal: 19000,
        ContaAnual: 228000,
        Consumo: "19.000 kWh",
        Investimento: 385000,
        EconomiaAno01: 45600,
        EconomiaAno02: 45600,
        EconomiaAno03: 68400,
        EconomiaAno04: 68400,
        EconomiaAno05: 91200,
        EconomiaAno06: 91200,
        EconomiaAno07: 114000,
        GanhoTotalSemAplicacao: 2006400,
        GanhoTotalComAplicacao: 6770807,
    },
    {
        ContaMensal: 20000,
        ContaAnual: 240000,
        Consumo: "20.000 kWh",
        Investimento: 405000,
        EconomiaAno01: 48000,
        EconomiaAno02: 48000,
        EconomiaAno03: 72000,
        EconomiaAno04: 72000,
        EconomiaAno05: 96000,
        EconomiaAno06: 96000,
        EconomiaAno07: 120000,
        GanhoTotalSemAplicacao: 2112000,
        GanhoTotalComAplicacao: 7127165,
    },
];