import { LineCode } from './lineCode.js'
import { StopCode } from './stopCode.js'

export type LineStopDirection = {
  platforms: number[]
  nextStops: StopCode[]
}

export type LineStop = {
  stop: StopCode
  up: LineStopDirection
  down: LineStopDirection
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
      up: { platforms: [1, 2], nextStops: [] },
      down: { platforms: [1, 2], nextStops: [StopCode.SIH] },
    },
    {
      stop: StopCode.SIH,
      up: { platforms: [1], nextStops: [StopCode.TUM] },
      down: { platforms: [2], nextStops: [StopCode.TIS] },
    },
    {
      stop: StopCode.TIS,
      up: { platforms: [1], nextStops: [StopCode.SIH] },
      down: { platforms: [2], nextStops: [StopCode.LOP] },
    },
    {
      stop: StopCode.LOP,
      up: { platforms: [1], nextStops: [StopCode.TIS] },
      down: { platforms: [2], nextStops: [StopCode.YUL] },
    },
    {
      stop: StopCode.YUL,
      up: { platforms: [1], nextStops: [StopCode.LOP] },
      down: { platforms: [2], nextStops: [StopCode.KSR] },
    },
    {
      stop: StopCode.KSR,
      up: { platforms: [1], nextStops: [StopCode.YUL] },
      down: { platforms: [2], nextStops: [StopCode.TWW] },
    },
    {
      stop: StopCode.TWW,
      up: { platforms: [1], nextStops: [StopCode.KSR] },
      down: { platforms: [2], nextStops: [StopCode.MEF] },
    },
    {
      stop: StopCode.MEF,
      up: { platforms: [1], nextStops: [StopCode.TWW] },
      down: { platforms: [2], nextStops: [StopCode.NAC] },
    },
    {
      stop: StopCode.NAC,
      up: { platforms: [1], nextStops: [StopCode.MEF] },
      down: { platforms: [2], nextStops: [StopCode.AUS] },
    },
    {
      stop: StopCode.AUS,
      up: { platforms: [1], nextStops: [StopCode.NAC] },
      down: { platforms: [2], nextStops: [StopCode.ETS] },
    },
    {
      stop: StopCode.ETS,
      up: { platforms: [1], nextStops: [StopCode.AUS] },
      down: { platforms: [2], nextStops: [StopCode.HUH] },
    },
    {
      stop: StopCode.HUH,
      up: { platforms: [3], nextStops: [StopCode.ETS] },
      down: { platforms: [2], nextStops: [StopCode.HOM] },
    },
    {
      stop: StopCode.HOM,
      up: { platforms: [3], nextStops: [StopCode.HUH] },
      down: { platforms: [4], nextStops: [StopCode.TKW] },
    },
    {
      stop: StopCode.TKW,
      up: { platforms: [1], nextStops: [StopCode.HOM] },
      down: { platforms: [2], nextStops: [StopCode.SUW] },
    },
    {
      stop: StopCode.SUW,
      up: { platforms: [1], nextStops: [StopCode.TKW] },
      down: { platforms: [2], nextStops: [StopCode.KAT] },
    },
    {
      stop: StopCode.KAT,
      up: { platforms: [1], nextStops: [StopCode.SUW] },
      down: { platforms: [2], nextStops: [StopCode.DIH] },
    },
    {
      stop: StopCode.DIH,
      up: { platforms: [3], nextStops: [StopCode.KAT] },
      down: { platforms: [4], nextStops: [StopCode.HIK] },
    },
    {
      stop: StopCode.HIK,
      up: { platforms: [1], nextStops: [StopCode.DIH] },
      down: { platforms: [2], nextStops: [StopCode.TAW] },
    },
    {
      stop: StopCode.TAW,
      up: { platforms: [1], nextStops: [StopCode.HIK] },
      down: { platforms: [2], nextStops: [StopCode.CKT] },
    },
    {
      stop: StopCode.CKT,
      up: { platforms: [1], nextStops: [StopCode.TAW] },
      down: { platforms: [2], nextStops: [StopCode.STW] },
    },
    {
      stop: StopCode.STW,
      up: { platforms: [1], nextStops: [StopCode.CKT] },
      down: { platforms: [2], nextStops: [StopCode.CIO] },
    },
    {
      stop: StopCode.CIO,
      up: { platforms: [1], nextStops: [StopCode.STW] },
      down: { platforms: [2], nextStops: [StopCode.SHM] },
    },
    {
      stop: StopCode.SHM,
      up: { platforms: [1], nextStops: [StopCode.CIO] },
      down: { platforms: [2], nextStops: [StopCode.TSH] },
    },
    {
      stop: StopCode.TSH,
      up: { platforms: [1], nextStops: [StopCode.SHM] },
      down: { platforms: [2], nextStops: [StopCode.HEO] },
    },
    {
      stop: StopCode.HEO,
      up: { platforms: [1], nextStops: [StopCode.TSH] },
      down: { platforms: [2], nextStops: [StopCode.MOS] },
    },
    {
      stop: StopCode.MOS,
      up: { platforms: [1], nextStops: [StopCode.HEO] },
      down: { platforms: [2], nextStops: [StopCode.WKS] },
    },
    {
      stop: StopCode.WKS,
      up: { platforms: [1, 2], nextStops: [StopCode.MOS] },
      down: { platforms: [1, 2], nextStops: [] },
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
      up: { platforms: [1, 2], nextStops: [] },
      down: { platforms: [1, 2], nextStops: [StopCode.SHS] },
    },
    {
      stop: StopCode.LOW,
      up: { platforms: [2, 3], nextStops: [] },
      down: { platforms: [1, 4], nextStops: [StopCode.SHS] },
    },
    {
      stop: StopCode.SHS,
      up: { platforms: [1], nextStops: [StopCode.LOW] },
      down: { platforms: [2], nextStops: [StopCode.FAN] },
    },
    {
      stop: StopCode.FAN,
      up: { platforms: [1], nextStops: [StopCode.SHS] },
      down: { platforms: [2], nextStops: [StopCode.TWO] },
    },
    {
      stop: StopCode.TWO,
      up: { platforms: [1], nextStops: [StopCode.FAN] },
      down: { platforms: [2], nextStops: [StopCode.TAP] },
    },
    {
      stop: StopCode.TAP,
      up: { platforms: [1, 2], nextStops: [StopCode.TWO] },
      down: { platforms: [3, 4], nextStops: [StopCode.UNI] },
    },
    {
      stop: StopCode.UNI,
      up: { platforms: [1], nextStops: [StopCode.TAP] },
      down: { platforms: [2], nextStops: [StopCode.FOT, StopCode.RAC] },
    },
    {
      stop: StopCode.RAC,
      up: { platforms: [1, 2], nextStops: [StopCode.UNI] },
      down: { platforms: [1, 2], nextStops: [StopCode.SHT] },
    },
    {
      stop: StopCode.FOT,
      up: { platforms: [1, 2], nextStops: [StopCode.UNI] },
      down: { platforms: [3, 4], nextStops: [StopCode.SHT] },
    },
    {
      stop: StopCode.SHT,
      up: { platforms: [1, 2], nextStops: [StopCode.FOT, StopCode.RAC] },
      down: { platforms: [3, 4], nextStops: [StopCode.TAW] },
    },
    {
      stop: StopCode.TAW,
      up: { platforms: [1], nextStops: [StopCode.SHT] },
      down: { platforms: [2], nextStops: [StopCode.KOT] },
    },
    {
      stop: StopCode.KOT,
      up: { platforms: [1], nextStops: [StopCode.TAW] },
      down: { platforms: [2], nextStops: [StopCode.MKK] },
    },
    {
      stop: StopCode.MKK,
      up: { platforms: [1, 2], nextStops: [StopCode.KOT] },
      down: { platforms: [3], nextStops: [StopCode.HUH] },
    },
    {
      stop: StopCode.HUH,
      up: { platforms: [1], nextStops: [StopCode.MKK] },
      down: { platforms: [4], nextStops: [StopCode.EXC] },
    },
    {
      stop: StopCode.EXC,
      up: { platforms: [1], nextStops: [StopCode.HUH] },
      down: { platforms: [2], nextStops: [StopCode.ADM] },
    },
    {
      stop: StopCode.ADM,
      up: { platforms: [7], nextStops: [StopCode.EXC] },
      down: { platforms: [8], nextStops: [] },
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
      up: { platforms: [1], nextStops: [] },
      down: { platforms: [2], nextStops: [StopCode.TWH] },
    },
    {
      stop: StopCode.TWH,
      up: { platforms: [1], nextStops: [StopCode.TSW] },
      down: { platforms: [2], nextStops: [StopCode.KWH] },
    },
    {
      stop: StopCode.KWH,
      up: { platforms: [1], nextStops: [StopCode.TWH] },
      down: { platforms: [2], nextStops: [StopCode.KWF] },
    },
    {
      stop: StopCode.KWF,
      up: { platforms: [1], nextStops: [StopCode.KWH] },
      down: { platforms: [2], nextStops: [StopCode.LAK] },
    },
    {
      stop: StopCode.LAK,
      up: { platforms: [1], nextStops: [StopCode.KWF] },
      down: { platforms: [2], nextStops: [StopCode.MEF] },
    },
    {
      stop: StopCode.MEF,
      up: { platforms: [1], nextStops: [StopCode.LAK] },
      down: { platforms: [2], nextStops: [StopCode.LCK] },
    },
    {
      stop: StopCode.LCK,
      up: { platforms: [1], nextStops: [StopCode.MEF] },
      down: { platforms: [2], nextStops: [StopCode.CSW] },
    },
    {
      stop: StopCode.CSW,
      up: { platforms: [1], nextStops: [StopCode.LCK] },
      down: { platforms: [2], nextStops: [StopCode.SSP] },
    },
    {
      stop: StopCode.SSP,
      up: { platforms: [1], nextStops: [StopCode.CSW] },
      down: { platforms: [2], nextStops: [StopCode.PRE] },
    },
    {
      stop: StopCode.PRE,
      up: { platforms: [1], nextStops: [StopCode.SSP] },
      down: { platforms: [4], nextStops: [StopCode.MOK] },
    },
    {
      stop: StopCode.MOK,
      up: { platforms: [1], nextStops: [StopCode.PRE] },
      down: { platforms: [2], nextStops: [StopCode.YMT] },
    },
    {
      stop: StopCode.YMT,
      up: { platforms: [1], nextStops: [StopCode.MOK] },
      down: { platforms: [2], nextStops: [StopCode.JOR] },
    },
    {
      stop: StopCode.JOR,
      up: { platforms: [1], nextStops: [StopCode.YMT] },
      down: { platforms: [2], nextStops: [StopCode.TST] },
    },
    {
      stop: StopCode.TST,
      up: { platforms: [1], nextStops: [StopCode.JOR] },
      down: { platforms: [2], nextStops: [StopCode.ADM] },
    },
    {
      stop: StopCode.ADM,
      up: { platforms: [1], nextStops: [StopCode.TST] },
      down: { platforms: [4], nextStops: [StopCode.CEN] },
    },
    {
      stop: StopCode.CEN,
      up: { platforms: [1, 2], nextStops: [StopCode.ADM] },
      down: { platforms: [1, 2], nextStops: [] },
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
      up: { platforms: [1, 2], nextStops: [] },
      down: { platforms: [1, 2], nextStops: [StopCode.SUN] },
    },
    {
      stop: StopCode.SUN,
      up: { platforms: [1], nextStops: [StopCode.TUC] },
      down: { platforms: [2], nextStops: [StopCode.TSY] },
    },
    {
      stop: StopCode.TSY,
      up: { platforms: [3], nextStops: [StopCode.SUN] },
      down: { platforms: [4], nextStops: [StopCode.LAK] },
    },
    {
      stop: StopCode.LAK,
      up: { platforms: [3], nextStops: [StopCode.TSY] },
      down: { platforms: [4], nextStops: [StopCode.NAC] },
    },
    {
      stop: StopCode.NAC,
      up: { platforms: [3], nextStops: [StopCode.LAK] },
      down: { platforms: [4], nextStops: [StopCode.OLY] },
    },
    {
      stop: StopCode.OLY,
      up: { platforms: [1], nextStops: [StopCode.NAC] },
      down: { platforms: [2], nextStops: [StopCode.KOW] },
    },
    {
      stop: StopCode.KOW,
      up: { platforms: [3], nextStops: [StopCode.OLY] },
      down: { platforms: [4], nextStops: [StopCode.HOK] },
    },
    {
      stop: StopCode.HOK,
      up: { platforms: [3, 4], nextStops: [StopCode.KOW] },
      down: { platforms: [3, 4], nextStops: [] },
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
      up: { platforms: [1, 2], nextStops: [] },
      down: { platforms: [1, 2], nextStops: [StopCode.TKO] },
    },
    {
      stop: StopCode.POA,
      up: { platforms: [1], nextStops: [] },
      down: { platforms: [1], nextStops: [StopCode.HAH] },
    },
    {
      stop: StopCode.HAH,
      up: { platforms: [1], nextStops: [StopCode.POA] },
      down: { platforms: [2], nextStops: [StopCode.TKO] },
    },
    {
      stop: StopCode.TKO,
      up: { platforms: [1], nextStops: [StopCode.HAH] },
      down: { platforms: [2], nextStops: [StopCode.TIK] },
    },
    {
      stop: StopCode.TIK,
      up: { platforms: [3], nextStops: [StopCode.TKO] },
      down: { platforms: [4], nextStops: [StopCode.YAT] },
    },
    {
      stop: StopCode.YAT,
      up: { platforms: [3], nextStops: [StopCode.TIK] },
      down: { platforms: [4], nextStops: [StopCode.QUB] },
    },
    {
      stop: StopCode.QUB,
      up: { platforms: [3], nextStops: [StopCode.YAT] },
      down: { platforms: [4], nextStops: [StopCode.NOP] },
    },
    {
      stop: StopCode.NOP,
      up: { platforms: [3], nextStops: [StopCode.QUB] },
      down: { platforms: [4], nextStops: [] },
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
      up: { platforms: [1], nextStops: [] },
      down: { platforms: [1], nextStops: [StopCode.AIR] },
    },
    {
      stop: StopCode.AIR,
      up: { platforms: [1], nextStops: [StopCode.AWE] },
      down: { platforms: [2], nextStops: [StopCode.TSY] },
    },
    {
      stop: StopCode.TSY,
      up: { platforms: [1], nextStops: [StopCode.AIR] },
      down: { platforms: [2], nextStops: [StopCode.KOW] },
    },
    {
      stop: StopCode.KOW,
      up: { platforms: [1], nextStops: [StopCode.TSY] },
      down: { platforms: [2], nextStops: [StopCode.HOK] },
    },
    {
      stop: StopCode.HOK,
      up: { platforms: [1], nextStops: [StopCode.KOW] },
      down: { platforms: [1], nextStops: [] },
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
      up: { platforms: [1], nextStops: [] },
      down: { platforms: [2], nextStops: [StopCode.YAT] },
    },
    {
      stop: StopCode.YAT,
      up: { platforms: [1], nextStops: [StopCode.TIK] },
      down: { platforms: [2], nextStops: [StopCode.LAT] },
    },
    {
      stop: StopCode.LAT,
      up: { platforms: [1], nextStops: [StopCode.YAT] },
      down: { platforms: [2], nextStops: [StopCode.KWT] },
    },
    {
      stop: StopCode.KWT,
      up: { platforms: [1], nextStops: [StopCode.LAT] },
      down: { platforms: [2], nextStops: [StopCode.NTK] },
    },
    {
      stop: StopCode.NTK,
      up: { platforms: [1], nextStops: [StopCode.KWT] },
      down: { platforms: [2], nextStops: [StopCode.KOB] },
    },
    {
      stop: StopCode.KOB,
      up: { platforms: [1], nextStops: [StopCode.NTK] },
      down: { platforms: [2], nextStops: [StopCode.CHH] },
    },
    {
      stop: StopCode.CHH,
      up: { platforms: [1, 2], nextStops: [StopCode.KOB] },
      down: { platforms: [3, 4], nextStops: [StopCode.DIH] },
    },
    {
      stop: StopCode.DIH,
      up: { platforms: [1], nextStops: [StopCode.CHH] },
      down: { platforms: [2], nextStops: [StopCode.WTS] },
    },
    {
      stop: StopCode.WTS,
      up: { platforms: [1], nextStops: [StopCode.DIH] },
      down: { platforms: [2], nextStops: [StopCode.LOF] },
    },
    {
      stop: StopCode.LOF,
      up: { platforms: [1], nextStops: [StopCode.WTS] },
      down: { platforms: [2], nextStops: [StopCode.KOT] },
    },
    {
      stop: StopCode.KOT,
      up: { platforms: [1], nextStops: [StopCode.LOF] },
      down: { platforms: [2], nextStops: [StopCode.SKM] },
    },
    {
      stop: StopCode.SKM,
      up: { platforms: [1], nextStops: [StopCode.KOT] },
      down: { platforms: [2], nextStops: [StopCode.PRE] },
    },
    {
      stop: StopCode.PRE,
      up: { platforms: [3], nextStops: [StopCode.SKM] },
      down: { platforms: [2], nextStops: [StopCode.MOK] },
    },
    {
      stop: StopCode.MOK,
      up: { platforms: [3], nextStops: [StopCode.PRE] },
      down: { platforms: [4], nextStops: [StopCode.YMT] },
    },
    {
      stop: StopCode.YMT,
      up: { platforms: [1], nextStops: [StopCode.MOK] },
      down: { platforms: [2], nextStops: [StopCode.HOM] },
    },
    {
      stop: StopCode.HOM,
      up: { platforms: [1], nextStops: [StopCode.YMT] },
      down: { platforms: [2], nextStops: [StopCode.WHA] },
    },
    {
      stop: StopCode.WHA,
      up: { platforms: [1], nextStops: [StopCode.HOM] },
      down: { platforms: [1], nextStops: [] },
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
      up: { platforms: [3], nextStops: [] },
      down: { platforms: [3], nextStops: [StopCode.DIS] },
    },
    {
      stop: StopCode.DIS,
      up: { platforms: [1], nextStops: [StopCode.SUN] },
      down: { platforms: [1], nextStops: [] },
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
      up: { platforms: [1, 2], nextStops: [] },
      down: { platforms: [1, 2], nextStops: [StopCode.HFC] },
    },
    {
      stop: StopCode.HFC,
      up: { platforms: [1], nextStops: [StopCode.CHW] },
      down: { platforms: [2], nextStops: [StopCode.SKW] },
    },
    {
      stop: StopCode.SKW,
      up: { platforms: [1], nextStops: [StopCode.HFC] },
      down: { platforms: [2], nextStops: [StopCode.SWH] },
    },
    {
      stop: StopCode.SWH,
      up: { platforms: [1], nextStops: [StopCode.SKW] },
      down: { platforms: [2], nextStops: [StopCode.TAK] },
    },
    {
      stop: StopCode.TAK,
      up: { platforms: [1], nextStops: [StopCode.SWH] },
      down: { platforms: [2], nextStops: [StopCode.QUB] },
    },
    {
      stop: StopCode.QUB,
      up: { platforms: [1], nextStops: [StopCode.TAK] },
      down: { platforms: [2], nextStops: [StopCode.NOP] },
    },
    {
      stop: StopCode.NOP,
      up: { platforms: [1], nextStops: [StopCode.QUB] },
      down: { platforms: [2], nextStops: [StopCode.FOH] },
    },
    {
      stop: StopCode.FOH,
      up: { platforms: [1], nextStops: [StopCode.NOP] },
      down: { platforms: [2], nextStops: [StopCode.TIH] },
    },
    {
      stop: StopCode.TIH,
      up: { platforms: [1], nextStops: [StopCode.FOH] },
      down: { platforms: [2], nextStops: [StopCode.CAB] },
    },
    {
      stop: StopCode.CAB,
      up: { platforms: [1], nextStops: [StopCode.TIH] },
      down: { platforms: [2], nextStops: [StopCode.WAC] },
    },
    {
      stop: StopCode.WAC,
      up: { platforms: [1], nextStops: [StopCode.CAB] },
      down: { platforms: [2], nextStops: [StopCode.ADM] },
    },
    {
      stop: StopCode.ADM,
      up: { platforms: [3], nextStops: [StopCode.WAC] },
      down: { platforms: [2], nextStops: [StopCode.CEN] },
    },
    {
      stop: StopCode.CEN,
      up: { platforms: [3], nextStops: [StopCode.ADM] },
      down: { platforms: [4], nextStops: [StopCode.SHW] },
    },
    {
      stop: StopCode.SHW,
      up: { platforms: [1], nextStops: [StopCode.CEN] },
      down: { platforms: [2], nextStops: [StopCode.SYP] },
    },
    {
      stop: StopCode.SYP,
      up: { platforms: [1], nextStops: [StopCode.SHW] },
      down: { platforms: [2], nextStops: [StopCode.HKU] },
    },
    {
      stop: StopCode.HKU,
      up: { platforms: [1], nextStops: [StopCode.SYP] },
      down: { platforms: [2], nextStops: [StopCode.KET] },
    },
    {
      stop: StopCode.KET,
      up: { platforms: [1], nextStops: [StopCode.HKU] },
      down: { platforms: [2], nextStops: [] },
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
      up: { platforms: [1, 2], nextStops: [] },
      down: { platforms: [1, 2], nextStops: [StopCode.LET] },
    },
    {
      stop: StopCode.LET,
      up: { platforms: [1], nextStops: [StopCode.SOH] },
      down: { platforms: [2], nextStops: [StopCode.WCH] },
    },
    {
      stop: StopCode.WCH,
      up: { platforms: [1], nextStops: [StopCode.LET] },
      down: { platforms: [2], nextStops: [StopCode.OCP] },
    },
    {
      stop: StopCode.OCP,
      up: { platforms: [1], nextStops: [StopCode.WCH] },
      down: { platforms: [2], nextStops: [StopCode.ADM] },
    },
    {
      stop: StopCode.ADM,
      up: { platforms: [1], nextStops: [StopCode.OCP] },
      down: { platforms: [5, 6], nextStops: [] },
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
