import { LineCode } from './lineCode.js'
import { StopCode } from './stopCode.js'

type NonEmptyArray<T> = [T, ...T[]]

export type LineStop = {
  stop: StopCode
  up: {
    platform: number | NonEmptyArray<number>
    nextStop: StopCode | NonEmptyArray<StopCode> | null
  }
  down: {
    platform: number | NonEmptyArray<number>
    nextStop: StopCode | NonEmptyArray<StopCode> | null
  }
}

export type Line = {
  line: LineCode
  nameEn: string
  nameZh: string
  color: string
  stops: LineStop[]
}

export const TML: Line = {
  line: LineCode.TML,
  nameEn: 'Tuen Ma Line',
  nameZh: '屯碼綫',
  color: '#9a3b26',
  stops: [
    // up
    {
      stop: StopCode.TUM,
      up: { platform: [1, 2], nextStop: null },
      down: { platform: [1, 2], nextStop: StopCode.SIH },
    },
    {
      stop: StopCode.SIH,
      up: { platform: 1, nextStop: StopCode.TUM },
      down: { platform: 2, nextStop: StopCode.TIS },
    },
    {
      stop: StopCode.TIS,
      up: { platform: 1, nextStop: StopCode.SIH },
      down: { platform: 2, nextStop: StopCode.LOP },
    },
    {
      stop: StopCode.LOP,
      up: { platform: 1, nextStop: StopCode.TIS },
      down: { platform: 2, nextStop: StopCode.YUL },
    },
    {
      stop: StopCode.YUL,
      up: { platform: 1, nextStop: StopCode.LOP },
      down: { platform: 2, nextStop: StopCode.KSR },
    },
    {
      stop: StopCode.KSR,
      up: { platform: 1, nextStop: StopCode.YUL },
      down: { platform: 2, nextStop: StopCode.TWW },
    },
    {
      stop: StopCode.TWW,
      up: { platform: 1, nextStop: StopCode.KSR },
      down: { platform: 2, nextStop: StopCode.MEF },
    },
    {
      stop: StopCode.MEF,
      up: { platform: 1, nextStop: StopCode.TWW },
      down: { platform: 2, nextStop: StopCode.NAC },
    },
    {
      stop: StopCode.NAC,
      up: { platform: 1, nextStop: StopCode.MEF },
      down: { platform: 2, nextStop: StopCode.AUS },
    },
    {
      stop: StopCode.AUS,
      up: { platform: 1, nextStop: StopCode.NAC },
      down: { platform: 2, nextStop: StopCode.ETS },
    },
    {
      stop: StopCode.ETS,
      up: { platform: 1, nextStop: StopCode.AUS },
      down: { platform: 2, nextStop: StopCode.HUH },
    },
    {
      stop: StopCode.HUH,
      up: { platform: 3, nextStop: StopCode.ETS },
      down: { platform: 2, nextStop: StopCode.HOM },
    },
    {
      stop: StopCode.HOM,
      up: { platform: 3, nextStop: StopCode.HUH },
      down: { platform: 4, nextStop: StopCode.TKW },
    },
    {
      stop: StopCode.TKW,
      up: { platform: 1, nextStop: StopCode.HOM },
      down: { platform: 2, nextStop: StopCode.SUW },
    },
    {
      stop: StopCode.SUW,
      up: { platform: 1, nextStop: StopCode.TKW },
      down: { platform: 2, nextStop: StopCode.KAT },
    },
    {
      stop: StopCode.KAT,
      up: { platform: 1, nextStop: StopCode.SUW },
      down: { platform: 2, nextStop: StopCode.DIH },
    },
    {
      stop: StopCode.DIH,
      up: { platform: 3, nextStop: StopCode.KAT },
      down: { platform: 4, nextStop: StopCode.HIK },
    },
    {
      stop: StopCode.HIK,
      up: { platform: 1, nextStop: StopCode.DIH },
      down: { platform: 2, nextStop: StopCode.TAW },
    },
    {
      stop: StopCode.TAW,
      up: { platform: 1, nextStop: StopCode.HIK },
      down: { platform: 2, nextStop: StopCode.CKT },
    },
    {
      stop: StopCode.CKT,
      up: { platform: 1, nextStop: StopCode.TAW },
      down: { platform: 2, nextStop: StopCode.STW },
    },
    {
      stop: StopCode.STW,
      up: { platform: 1, nextStop: StopCode.CKT },
      down: { platform: 2, nextStop: StopCode.CIO },
    },
    {
      stop: StopCode.CIO,
      up: { platform: 1, nextStop: StopCode.STW },
      down: { platform: 2, nextStop: StopCode.SHM },
    },
    {
      stop: StopCode.SHM,
      up: { platform: 1, nextStop: StopCode.CIO },
      down: { platform: 2, nextStop: StopCode.TSH },
    },
    {
      stop: StopCode.TSH,
      up: { platform: 1, nextStop: StopCode.SHM },
      down: { platform: 2, nextStop: StopCode.HEO },
    },
    {
      stop: StopCode.HEO,
      up: { platform: 1, nextStop: StopCode.TSH },
      down: { platform: 2, nextStop: StopCode.MOS },
    },
    {
      stop: StopCode.MOS,
      up: { platform: 1, nextStop: StopCode.HEO },
      down: { platform: 2, nextStop: StopCode.WKS },
    },
    {
      stop: StopCode.WKS,
      up: { platform: [1, 2], nextStop: StopCode.MOS },
      down: { platform: [1, 2], nextStop: null },
    },
    // down
  ],
}

export const EAL: Line = {
  line: LineCode.EAL,
  nameEn: 'East Rail Line',
  nameZh: '東鐵線',
  color: '#53b7e8',
  stops: [
    // up
    {
      stop: StopCode.LMC,
      up: { platform: [1, 2], nextStop: null },
      down: { platform: [1, 2], nextStop: StopCode.SHS },
    },
    {
      stop: StopCode.LOW,
      up: { platform: [2, 3], nextStop: null },
      down: { platform: [1, 4], nextStop: StopCode.SHS },
    },
    {
      stop: StopCode.SHS,
      up: { platform: 1, nextStop: StopCode.LOW },
      down: { platform: 2, nextStop: StopCode.FAN },
    },
    {
      stop: StopCode.FAN,
      up: { platform: 1, nextStop: StopCode.SHS },
      down: { platform: 2, nextStop: StopCode.TWO },
    },
    {
      stop: StopCode.TWO,
      up: { platform: 1, nextStop: StopCode.FAN },
      down: { platform: 2, nextStop: StopCode.TAP },
    },
    {
      stop: StopCode.TAP,
      up: { platform: [1, 2], nextStop: StopCode.TWO },
      down: { platform: [3, 4], nextStop: StopCode.UNI },
    },
    {
      stop: StopCode.UNI,
      up: { platform: 1, nextStop: StopCode.TAP },
      down: { platform: 2, nextStop: [StopCode.FOT, StopCode.RAC] },
    },
    {
      stop: StopCode.RAC,
      up: { platform: [1, 2], nextStop: StopCode.UNI },
      down: { platform: [1, 2], nextStop: StopCode.SHT },
    },
    {
      stop: StopCode.FOT,
      up: { platform: [1, 2], nextStop: StopCode.UNI },
      down: { platform: [3, 4], nextStop: StopCode.SHT },
    },
    {
      stop: StopCode.SHT,
      up: { platform: [1, 2], nextStop: [StopCode.FOT, StopCode.RAC] },
      down: { platform: [3, 4], nextStop: StopCode.TAW },
    },
    {
      stop: StopCode.TAW,
      up: { platform: 1, nextStop: StopCode.SHT },
      down: { platform: 2, nextStop: StopCode.KOT },
    },
    {
      stop: StopCode.KOT,
      up: { platform: 1, nextStop: StopCode.TAW },
      down: { platform: 2, nextStop: StopCode.MKK },
    },
    {
      stop: StopCode.MKK,
      up: { platform: [1, 2], nextStop: StopCode.KOT },
      down: { platform: 3, nextStop: StopCode.HUH },
    },
    {
      stop: StopCode.HUH,
      up: { platform: 1, nextStop: StopCode.MKK },
      down: { platform: 4, nextStop: StopCode.EXC },
    },
    {
      stop: StopCode.EXC,
      up: { platform: 1, nextStop: StopCode.HUH },
      down: { platform: 2, nextStop: StopCode.ADM },
    },
    {
      stop: StopCode.ADM,
      up: { platform: 7, nextStop: StopCode.EXC },
      down: { platform: 8, nextStop: null },
    },
    // down
  ],
}

export const TWL: Line = {
  line: LineCode.TWL,
  nameEn: 'Tsuen Wan Line',
  nameZh: '荃灣綫',
  color: '#E2231A',
  stops: [
    // up
    {
      stop: StopCode.TSW,
      up: { platform: 1, nextStop: null },
      down: { platform: 2, nextStop: StopCode.TWH },
    },
    {
      stop: StopCode.TWH,
      up: { platform: 1, nextStop: StopCode.TSW },
      down: { platform: 2, nextStop: StopCode.KWH },
    },
    {
      stop: StopCode.KWH,
      up: { platform: 1, nextStop: StopCode.TWH },
      down: { platform: 2, nextStop: StopCode.KWF },
    },
    {
      stop: StopCode.KWF,
      up: { platform: 1, nextStop: StopCode.KWH },
      down: { platform: 2, nextStop: StopCode.LAK },
    },
    {
      stop: StopCode.LAK,
      up: { platform: 1, nextStop: StopCode.KWF },
      down: { platform: 2, nextStop: StopCode.MEF },
    },
    {
      stop: StopCode.MEF,
      up: { platform: 1, nextStop: StopCode.LAK },
      down: { platform: 2, nextStop: StopCode.LCK },
    },
    {
      stop: StopCode.LCK,
      up: { platform: 1, nextStop: StopCode.MEF },
      down: { platform: 2, nextStop: StopCode.CSW },
    },
    {
      stop: StopCode.CSW,
      up: { platform: 1, nextStop: StopCode.LCK },
      down: { platform: 2, nextStop: StopCode.SSP },
    },
    {
      stop: StopCode.SSP,
      up: { platform: 1, nextStop: StopCode.CSW },
      down: { platform: 2, nextStop: StopCode.PRE },
    },
    {
      stop: StopCode.PRE,
      up: { platform: 1, nextStop: StopCode.SSP },
      down: { platform: 4, nextStop: StopCode.MOK },
    },
    {
      stop: StopCode.MOK,
      up: { platform: 1, nextStop: StopCode.PRE },
      down: { platform: 2, nextStop: StopCode.YMT },
    },
    {
      stop: StopCode.YMT,
      up: { platform: 1, nextStop: StopCode.MOK },
      down: { platform: 2, nextStop: StopCode.JOR },
    },
    {
      stop: StopCode.JOR,
      up: { platform: 1, nextStop: StopCode.YMT },
      down: { platform: 2, nextStop: StopCode.TST },
    },
    {
      stop: StopCode.TST,
      up: { platform: 1, nextStop: StopCode.JOR },
      down: { platform: 2, nextStop: StopCode.ADM },
    },
    {
      stop: StopCode.ADM,
      up: { platform: 1, nextStop: StopCode.TST },
      down: { platform: 4, nextStop: StopCode.CEN },
    },
    {
      stop: StopCode.CEN,
      up: { platform: [1, 2], nextStop: StopCode.ADM },
      down: { platform: [1, 2], nextStop: null },
    },
    // down
  ],
}

export const TCL: Line = {
  line: LineCode.TCL,
  nameEn: 'Tung Chung Line',
  nameZh: '東涌綫',
  color: '#fe7f1d',
  stops: [
    // up
    {
      stop: StopCode.TUC,
      up: { platform: [1, 2], nextStop: null },
      down: { platform: [1, 2], nextStop: StopCode.SUN },
    },
    {
      stop: StopCode.SUN,
      up: { platform: 1, nextStop: StopCode.TUC },
      down: { platform: 2, nextStop: StopCode.TSY },
    },
    {
      stop: StopCode.TSY,
      up: { platform: 3, nextStop: StopCode.SUN },
      down: { platform: 4, nextStop: StopCode.LAK },
    },
    {
      stop: StopCode.LAK,
      up: { platform: 3, nextStop: StopCode.TSY },
      down: { platform: 4, nextStop: StopCode.NAC },
    },
    {
      stop: StopCode.NAC,
      up: { platform: 3, nextStop: StopCode.LAK },
      down: { platform: 4, nextStop: StopCode.OLY },
    },
    {
      stop: StopCode.OLY,
      up: { platform: 1, nextStop: StopCode.NAC },
      down: { platform: 2, nextStop: StopCode.KOW },
    },
    {
      stop: StopCode.KOW,
      up: { platform: 3, nextStop: StopCode.OLY },
      down: { platform: 4, nextStop: StopCode.HOK },
    },
    {
      stop: StopCode.HOK,
      up: { platform: [3, 4], nextStop: StopCode.KOW },
      down: { platform: [3, 4], nextStop: null },
    },
    // down
  ],
}

export const TKL: Line = {
  line: LineCode.TKL,
  nameEn: 'Tseung Kwan O Line',
  nameZh: '將軍澳綫',
  color: '#6b208b',
  stops: [
    // up
    {
      stop: StopCode.LHP,
      up: { platform: [1, 2], nextStop: null },
      down: { platform: [1, 2], nextStop: StopCode.TKO },
    },
    {
      stop: StopCode.POA,
      up: { platform: 1, nextStop: null },
      down: { platform: 1, nextStop: StopCode.HAH },
    },
    {
      stop: StopCode.HAH,
      up: { platform: 1, nextStop: StopCode.POA },
      down: { platform: 2, nextStop: StopCode.TKO },
    },
    {
      stop: StopCode.TKO,
      up: { platform: 1, nextStop: StopCode.HAH },
      down: { platform: 2, nextStop: StopCode.TIK },
    },
    {
      stop: StopCode.TIK,
      up: { platform: 3, nextStop: StopCode.TKO },
      down: { platform: 4, nextStop: StopCode.YAT },
    },
    {
      stop: StopCode.YAT,
      up: { platform: 3, nextStop: StopCode.TIK },
      down: { platform: 4, nextStop: StopCode.QUB },
    },
    {
      stop: StopCode.QUB,
      up: { platform: 3, nextStop: StopCode.YAT },
      down: { platform: 4, nextStop: StopCode.NOP },
    },
    {
      stop: StopCode.NOP,
      up: { platform: 3, nextStop: StopCode.QUB },
      down: { platform: 4, nextStop: null },
    },
    // down
  ],
}

export const AEL: Line = {
  line: LineCode.AEL,
  nameEn: 'Airport Express',
  nameZh: '機場快綫',
  color: '#1c7670',
  stops: [
    // up
    {
      stop: StopCode.AWE,
      up: { platform: 1, nextStop: null },
      down: { platform: 1, nextStop: StopCode.AIR },
    },
    {
      stop: StopCode.AIR,
      up: { platform: 1, nextStop: StopCode.AWE },
      down: { platform: 2, nextStop: StopCode.TSY },
    },
    {
      stop: StopCode.TSY,
      up: { platform: 1, nextStop: StopCode.AIR },
      down: { platform: 2, nextStop: StopCode.KOW },
    },
    {
      stop: StopCode.KOW,
      up: { platform: 1, nextStop: StopCode.TSY },
      down: { platform: 2, nextStop: StopCode.HOK },
    },
    {
      stop: StopCode.HOK,
      up: { platform: 1, nextStop: StopCode.KOW },
      down: { platform: 1, nextStop: null },
    },
    // down
  ],
}

export const KTL: Line = {
  line: LineCode.KTL,
  nameEn: 'Kwun Tong Line',
  nameZh: '觀塘綫',
  color: '#1a9431',
  stops: [
    // up
    {
      stop: StopCode.TIK,
      up: { platform: 1, nextStop: null },
      down: { platform: 2, nextStop: StopCode.YAT },
    },
    {
      stop: StopCode.YAT,
      up: { platform: 1, nextStop: StopCode.TIK },
      down: { platform: 2, nextStop: StopCode.LAT },
    },
    {
      stop: StopCode.LAT,
      up: { platform: 1, nextStop: StopCode.YAT },
      down: { platform: 2, nextStop: StopCode.KWT },
    },
    {
      stop: StopCode.KWT,
      up: { platform: 1, nextStop: StopCode.LAT },
      down: { platform: 2, nextStop: StopCode.NTK },
    },
    {
      stop: StopCode.NTK,
      up: { platform: 1, nextStop: StopCode.KWT },
      down: { platform: 2, nextStop: StopCode.KOB },
    },
    {
      stop: StopCode.KOB,
      up: { platform: 1, nextStop: StopCode.NTK },
      down: { platform: 2, nextStop: StopCode.CHH },
    },
    {
      stop: StopCode.CHH,
      up: { platform: [1, 2], nextStop: StopCode.KOB },
      down: { platform: [3, 4], nextStop: StopCode.DIH },
    },
    {
      stop: StopCode.DIH,
      up: { platform: 1, nextStop: StopCode.CHH },
      down: { platform: 2, nextStop: StopCode.WTS },
    },
    {
      stop: StopCode.WTS,
      up: { platform: 1, nextStop: StopCode.DIH },
      down: { platform: 2, nextStop: StopCode.LOF },
    },
    {
      stop: StopCode.LOF,
      up: { platform: 1, nextStop: StopCode.WTS },
      down: { platform: 2, nextStop: StopCode.KOT },
    },
    {
      stop: StopCode.KOT,
      up: { platform: 1, nextStop: StopCode.LOF },
      down: { platform: 2, nextStop: StopCode.SKM },
    },
    {
      stop: StopCode.SKM,
      up: { platform: 1, nextStop: StopCode.KOT },
      down: { platform: 2, nextStop: StopCode.PRE },
    },
    {
      stop: StopCode.PRE,
      up: { platform: 3, nextStop: StopCode.SKM },
      down: { platform: 2, nextStop: StopCode.MOK },
    },
    {
      stop: StopCode.MOK,
      up: { platform: 3, nextStop: StopCode.PRE },
      down: { platform: 4, nextStop: StopCode.YMT },
    },
    {
      stop: StopCode.YMT,
      up: { platform: 1, nextStop: StopCode.MOK },
      down: { platform: 2, nextStop: StopCode.HOM },
    },
    {
      stop: StopCode.HOM,
      up: { platform: 1, nextStop: StopCode.YMT },
      down: { platform: 2, nextStop: StopCode.WHA },
    },
    {
      stop: StopCode.WHA,
      up: { platform: 1, nextStop: StopCode.HOM },
      down: { platform: 1, nextStop: null },
    },
    // down
  ],
}

export const DRL: Line = {
  line: LineCode.DRL,
  nameEn: 'Disneyland Resort Line',
  nameZh: '迪士尼綫',
  color: '#f550a6',
  stops: [
    // up
    {
      stop: StopCode.SUN,
      up: { platform: 3, nextStop: null },
      down: { platform: 3, nextStop: StopCode.DIS },
    },
    {
      stop: StopCode.DIS,
      up: { platform: 1, nextStop: StopCode.SUN },
      down: { platform: 1, nextStop: null },
    },
    // down
  ],
}

export const ISL: Line = {
  line: LineCode.ISL,
  nameEn: 'Island Line',
  nameZh: '港島綫',
  color: '#0860a8',
  stops: [
    // up
    {
      stop: StopCode.CHW,
      up: { platform: [1, 2], nextStop: null },
      down: { platform: [1, 2], nextStop: StopCode.HFC },
    },
    {
      stop: StopCode.HFC,
      up: { platform: 1, nextStop: StopCode.CHW },
      down: { platform: 2, nextStop: StopCode.SKW },
    },
    {
      stop: StopCode.SKW,
      up: { platform: 1, nextStop: StopCode.HFC },
      down: { platform: 2, nextStop: StopCode.SWH },
    },
    {
      stop: StopCode.SWH,
      up: { platform: 1, nextStop: StopCode.SKW },
      down: { platform: 2, nextStop: StopCode.TAK },
    },
    {
      stop: StopCode.TAK,
      up: { platform: 1, nextStop: StopCode.SWH },
      down: { platform: 2, nextStop: StopCode.QUB },
    },
    {
      stop: StopCode.QUB,
      up: { platform: 1, nextStop: StopCode.TAK },
      down: { platform: 2, nextStop: StopCode.NOP },
    },
    {
      stop: StopCode.NOP,
      up: { platform: 1, nextStop: StopCode.QUB },
      down: { platform: 2, nextStop: StopCode.FOH },
    },
    {
      stop: StopCode.FOH,
      up: { platform: 1, nextStop: StopCode.NOP },
      down: { platform: 2, nextStop: StopCode.TIH },
    },
    {
      stop: StopCode.TIH,
      up: { platform: 1, nextStop: StopCode.FOH },
      down: { platform: 2, nextStop: StopCode.CAB },
    },
    {
      stop: StopCode.CAB,
      up: { platform: 1, nextStop: StopCode.TIH },
      down: { platform: 2, nextStop: StopCode.WAC },
    },
    {
      stop: StopCode.WAC,
      up: { platform: 1, nextStop: StopCode.CAB },
      down: { platform: 2, nextStop: StopCode.ADM },
    },
    {
      stop: StopCode.ADM,
      up: { platform: 3, nextStop: StopCode.WAC },
      down: { platform: 2, nextStop: StopCode.CEN },
    },
    {
      stop: StopCode.CEN,
      up: { platform: 3, nextStop: StopCode.ADM },
      down: { platform: 4, nextStop: StopCode.SHW },
    },
    {
      stop: StopCode.SHW,
      up: { platform: 1, nextStop: StopCode.CEN },
      down: { platform: 2, nextStop: StopCode.SYP },
    },
    {
      stop: StopCode.SYP,
      up: { platform: 1, nextStop: StopCode.SHW },
      down: { platform: 2, nextStop: StopCode.HKU },
    },
    {
      stop: StopCode.HKU,
      up: { platform: 1, nextStop: StopCode.SYP },
      down: { platform: 2, nextStop: StopCode.KET },
    },
    {
      stop: StopCode.KET,
      up: { platform: 1, nextStop: StopCode.HKU },
      down: { platform: 2, nextStop: null },
    },
    // down
  ],
}

export const SIL: Line = {
  line: LineCode.SIL,
  nameEn: 'South Island Line',
  nameZh: '南港島綫',
  color: '#b5bd00',
  stops: [
    // up
    {
      stop: StopCode.SOH,
      up: { platform: [1, 2], nextStop: null },
      down: { platform: [1, 2], nextStop: StopCode.LET },
    },
    {
      stop: StopCode.LET,
      up: { platform: 1, nextStop: StopCode.SOH },
      down: { platform: 2, nextStop: StopCode.WCH },
    },
    {
      stop: StopCode.WCH,
      up: { platform: 1, nextStop: StopCode.LET },
      down: { platform: 2, nextStop: StopCode.OCP },
    },
    {
      stop: StopCode.OCP,
      up: { platform: 1, nextStop: StopCode.WCH },
      down: { platform: 2, nextStop: StopCode.ADM },
    },
    {
      stop: StopCode.ADM,
      up: { platform: 1, nextStop: StopCode.OCP },
      down: { platform: [5, 6], nextStop: null },
    },
    // down
  ],
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
