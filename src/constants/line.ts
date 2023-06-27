import { StopCode } from './stop.js'

export enum LineCode {
  TML = 'TML',
  EAL = 'EAL',
  TWL = 'TWL',
  TCL = 'TCL',
  TKL = 'TKL',
  AEL = 'AEL',
  KTL = 'KTL',
  DRL = 'DRL',
  ISL = 'ISL',
  SIL = 'SIL',
}

export type Line = {
  code: LineCode
  nameEn: string
  nameZh: string
  color: string
  stops: StopCode[]
}

export const TML: Line = {
  code: LineCode.TML,
  nameEn: 'Tuen Ma Line',
  nameZh: '屯碼綫',
  color: '#9a3b26',
  stops: [
    StopCode.TUM,
    StopCode.SIH,
    StopCode.TIS,
    StopCode.LOP,
    StopCode.YUL,
    StopCode.KSR,
    StopCode.TWW,
    StopCode.MEF,
    StopCode.NAC,
    StopCode.AUS,
    StopCode.ETS,
    StopCode.HUH,
    StopCode.HOM,
    StopCode.TKW,
    StopCode.SUW,
    StopCode.KAT,
    StopCode.DIH,
    StopCode.HIK,
    StopCode.TAW,
    StopCode.CKT,
    StopCode.STW,
    StopCode.CIO,
    StopCode.SHM,
    StopCode.TSH,
    StopCode.HEO,
    StopCode.MOS,
    StopCode.WKS,
  ],
}

export const EAL: Line = {
  code: LineCode.EAL,
  nameEn: 'East Rail Line',
  nameZh: '東鐵線',
  color: '#53b7e8',
  stops: [
    StopCode.ADM,
    StopCode.EXC,
    StopCode.HUH,
    StopCode.MKK,
    StopCode.KOT,
    StopCode.TAW,
    StopCode.SHT,
    StopCode.FOT,
    StopCode.RAC,
    StopCode.UNI,
    StopCode.TAP,
    StopCode.TWO,
    StopCode.FAN,
    StopCode.SHS,
    StopCode.LOW,
    StopCode.LMC,
  ],
}

export const TWL: Line = {
  code: LineCode.TWL,
  nameEn: 'Tsuen Wan Line',
  nameZh: '荃灣綫',
  color: '#E2231A',
  stops: [
    StopCode.TSW,
    StopCode.TWH,
    StopCode.KWH,
    StopCode.KWF,
    StopCode.LAK,
    StopCode.MEF,
    StopCode.LCK,
    StopCode.CSW,
    StopCode.SSP,
    StopCode.PRE,
    StopCode.MOK,
    StopCode.YMT,
    StopCode.JOR,
    StopCode.TST,
    StopCode.ADM,
    StopCode.CEN,
  ],
}

export const TCL: Line = {
  code: LineCode.TCL,
  nameEn: 'Tung Chung Line',
  nameZh: '東涌綫',
  color: '#fe7f1d',
  stops: [
    StopCode.HOK,
    StopCode.KOW,
    StopCode.OLY,
    StopCode.NAC,
    StopCode.LAK,
    StopCode.TSY,
    StopCode.SUN,
    StopCode.TUC,
  ],
}

export const TKL: Line = {
  code: LineCode.TKL,
  nameEn: 'Tseung Kwan O Line',
  nameZh: '將軍澳綫',
  color: '#6b208b',
  stops: [
    StopCode.NOP,
    StopCode.QUB,
    StopCode.YAT,
    StopCode.TIK,
    StopCode.TKO,
    StopCode.LHP,
    StopCode.HAH,
    StopCode.POA,
  ],
}

export const AEL: Line = {
  code: LineCode.AEL,
  nameEn: 'Airport Express',
  nameZh: '機場快綫',
  color: '#1c7670',
  stops: [StopCode.HOK, StopCode.KOW, StopCode.TSY, StopCode.AIR, StopCode.AWE],
}

export const KTL: Line = {
  code: LineCode.KTL,
  nameEn: 'Kwun Tong Line',
  nameZh: '觀塘綫',
  color: '#1a9431',
  stops: [
    StopCode.TIK,
    StopCode.YAT,
    StopCode.LAT,
    StopCode.KWT,
    StopCode.NTK,
    StopCode.KOB,
    StopCode.CHH,
    StopCode.DIH,
    StopCode.WTS,
    StopCode.LOF,
    StopCode.KOT,
    StopCode.SKM,
    StopCode.PRE,
    StopCode.MOK,
    StopCode.YMT,
    StopCode.HOM,
    StopCode.WHA,
  ],
}

export const DRL: Line = {
  code: LineCode.DRL,
  nameEn: 'Disneyland Resort Line',
  nameZh: '迪士尼綫',
  color: '#f550a6',
  stops: [StopCode.SUN, StopCode.DIS],
}

export const ISL: Line = {
  code: LineCode.ISL,
  nameEn: 'Island Line',
  nameZh: '港島綫',
  color: '#0860a8',
  stops: [
    StopCode.CHW,
    StopCode.HFC,
    StopCode.SKW,
    StopCode.SWH,
    StopCode.TAK,
    StopCode.QUB,
    StopCode.NOP,
    StopCode.FOH,
    StopCode.TIH,
    StopCode.CAB,
    StopCode.WAC,
    StopCode.ADM,
    StopCode.CEN,
    StopCode.SHW,
    StopCode.SYP,
    StopCode.HKU,
    StopCode.KET,
  ],
}

export const SIL: Line = {
  code: LineCode.SIL,
  nameEn: 'South Island Line',
  nameZh: '南港島綫',
  color: '#b5bd00',
  stops: [StopCode.ADM, StopCode.OCP, StopCode.WCH, StopCode.LET, StopCode.SOH],
}

export const lineMap: { [key in LineCode]: Line } = {
  TML,
  EAL,
  TWL,
  TCL,
  TKL,
  AEL,
  KTL,
  DRL,
  ISL,
  SIL,
}

export const lines = Object.values(lineMap)
