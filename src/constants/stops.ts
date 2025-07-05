import { StopCode } from "./stopCode.js";

export type Stop = {
  stop: StopCode;
  nameEn: string;
  nameZh: string;
  color: string;
  textColor: string;
};

export const TUM: Stop = {
  stop: StopCode.TUM,
  nameEn: "Tuen Mun",
  nameZh: "屯門",
  color: "#035F94",
  textColor: "#FFFFFF",
};

export const SIH: Stop = {
  stop: StopCode.SIH,
  nameEn: "Siu Hong",
  nameZh: "兆康",
  color: "#79BFB3",
  textColor: "#000000",
};

export const TIS: Stop = {
  stop: StopCode.TIS,
  nameEn: "Tin Shui Wai",
  nameZh: "天水圍",
  color: "#FFCF2A",
  textColor: "#FFFFFF",
};

export const LOP: Stop = {
  stop: StopCode.LOP,
  nameEn: "Long Ping",
  nameZh: "朗屏",
  color: "#F697B4",
  textColor: "#000000",
};

export const YUL: Stop = {
  stop: StopCode.YUL,
  nameEn: "Yuen Long",
  nameZh: "元朗",
  color: "#42D7DC",
  textColor: "#000000",
};

export const KSR: Stop = {
  stop: StopCode.KSR,
  nameEn: "Kam Sheung Road",
  nameZh: "錦上路",
  color: "#BF431A",
  textColor: "#FFFFFF",
};

export const TWW: Stop = {
  stop: StopCode.TWW,
  nameEn: "Tsuen Wan West",
  nameZh: "荃灣西",
  color: "#A81C07",
  textColor: "#FFFFFF",
};

export const MEF: Stop = {
  stop: StopCode.MEF,
  nameEn: "Mei Foo",
  nameZh: "美孚",
  color: "#0088DD",
  textColor: "#FFFFFF",
};

export const NAC: Stop = {
  stop: StopCode.NAC,
  nameEn: "Nam Cheong",
  nameZh: "南昌",
  color: "#FFFF80",
  textColor: "#000000",
};

export const AUS: Stop = {
  stop: StopCode.AUS,
  nameEn: "Austin",
  nameZh: "柯士甸",
  color: "#D05A3A",
  textColor: "#FFFFFF",
};

export const ETS: Stop = {
  stop: StopCode.ETS,
  nameEn: "East Tsim Sha Tsui",
  nameZh: "尖東",
  color: "#ffff00",
  textColor: "#000000",
};

export const HUH: Stop = {
  stop: StopCode.HUH,
  nameEn: "Hung Hom",
  nameZh: "紅磡",
  color: "#FF2492",
  textColor: "#000000",
};

export const HOM: Stop = {
  stop: StopCode.HOM,
  nameEn: "Ho Man Tin",
  nameZh: "何文田",
  color: "#ABBB77",
  textColor: "#000000",
};

export const TKW: Stop = {
  stop: StopCode.TKW,
  nameEn: "To Kwa Wan",
  nameZh: "土瓜灣",
  color: "#95D0D0",
  textColor: "#000000",
};

export const SUW: Stop = {
  stop: StopCode.SUW,
  nameEn: "Sung Wong Toi",
  nameZh: "宋皇臺",
  color: "#E6C35C",
  textColor: "#000000",
};

export const KAT: Stop = {
  stop: StopCode.KAT,
  nameEn: "Kai Tak",
  nameZh: "啟德",
  color: "#EBC411",
  textColor: "#000000",
};

export const DIH: Stop = {
  stop: StopCode.DIH,
  nameEn: "Diamond Hill",
  nameZh: "鑽石山",
  color: "#202020",
  textColor: "#FFFFFF",
};

export const HIK: Stop = {
  stop: StopCode.HIK,
  nameEn: "Hin Keng",
  nameZh: "顯徑",
  color: "#72DC72",
  textColor: "#182F4F",
};

export const TAW: Stop = {
  stop: StopCode.TAW,
  nameEn: "Tai Wai",
  nameZh: "大圍",
  color: "#00008b",
  textColor: "#FFFFFF",
};

export const CKT: Stop = {
  stop: StopCode.CKT,
  nameEn: "Che Kung Temple",
  nameZh: "車公廟",
  color: "#EED9B8",
  textColor: "#000000",
};

export const STW: Stop = {
  stop: StopCode.STW,
  nameEn: "Sha Tin Wai",
  nameZh: "沙田圍",
  color: "#FFBCD9",
  textColor: "#000000",
};

export const CIO: Stop = {
  stop: StopCode.CIO,
  nameEn: "City One",
  nameZh: "第一城",
  color: "#FFCF2E",
  textColor: "#000000",
};

export const SHM: Stop = {
  stop: StopCode.SHM,
  nameEn: "Shek Mun",
  nameZh: "石門",
  color: "#FBEC5D",
  textColor: "#000000",
};

export const TSH: Stop = {
  stop: StopCode.TSH,
  nameEn: "Tai Shui Hang",
  nameZh: "大水坑",
  color: "#9DE4E0",
  textColor: "#000000",
};

export const HEO: Stop = {
  stop: StopCode.HEO,
  nameEn: "Heng On",
  nameZh: "恆安",
  color: "#B4CBE6",
  textColor: "#000000",
};

export const MOS: Stop = {
  stop: StopCode.MOS,
  nameEn: "Ma On Shan",
  nameZh: "馬鞍山",
  color: "#BAAADB",
  textColor: "#000000",
};

export const WKS: Stop = {
  stop: StopCode.WKS,
  nameEn: "Wu Kai Sha",
  nameZh: "烏溪沙",
  color: "#954535",
  textColor: "#FFFFFF",
};

export const ADM: Stop = {
  stop: StopCode.ADM,
  nameEn: "Admiralty",
  nameZh: "金鐘",
  color: "#3A86D4",
  textColor: "#FFFFFF",
};

export const EXC: Stop = {
  stop: StopCode.EXC,
  nameEn: "Exhibition Centre",
  nameZh: "會展",
  color: "#94A8B0",
  textColor: "#FFFFFF",
};

export const MKK: Stop = {
  stop: StopCode.MKK,
  nameEn: "Mong Kok East",
  nameZh: "旺角東",
  color: "#006400",
  textColor: "#FFFFFF",
};

export const KOT: Stop = {
  stop: StopCode.KOT,
  nameEn: "Kowloon Tong",
  nameZh: "九龍塘",
  color: "#007FFF",
  textColor: "#FFFFFF",
};

export const SHT: Stop = {
  stop: StopCode.SHT,
  nameEn: "Sha Tin",
  nameZh: "沙田",
  color: "#BB7796",
  textColor: "#FFFFFF",
};

export const FOT: Stop = {
  stop: StopCode.FOT,
  nameEn: "Fo Tan",
  nameZh: "火炭",
  color: "#FFA500",
  textColor: "#FFFFFF",
};

export const RAC: Stop = {
  stop: StopCode.RAC,
  nameEn: "Racecourse",
  nameZh: "馬場",
  color: "#15AE69",
  textColor: "#FFFFFF",
};

export const UNI: Stop = {
  stop: StopCode.UNI,
  nameEn: "University",
  nameZh: "大學",
  color: "#A2D7DD",
  textColor: "#FFFFFF",
};

export const TAP: Stop = {
  stop: StopCode.TAP,
  nameEn: "Tai Po Market",
  nameZh: "大埔墟",
  color: "#976E9A",
  textColor: "#FFFFFF",
};

export const TWO: Stop = {
  stop: StopCode.TWO,
  nameEn: "Tai Wo",
  nameZh: "太和",
  color: "#C89F05",
  textColor: "#FFFFFF",
};

export const FAN: Stop = {
  stop: StopCode.FAN,
  nameEn: "Fanling",
  nameZh: "粉嶺",
  color: "#9ACD32",
  textColor: "#FFFFFF",
};

export const SHS: Stop = {
  stop: StopCode.SHS,
  nameEn: "Sheung Shui",
  nameZh: "上水",
  color: "#F6A600",
  textColor: "#FFFFFF",
};

export const LOW: Stop = {
  stop: StopCode.LOW,
  nameEn: "Lo Wu",
  nameZh: "羅湖",
  color: "#8DC476",
  textColor: "#FFFFFF",
};

export const LMC: Stop = {
  stop: StopCode.LMC,
  nameEn: "Lok Ma Chau",
  nameZh: "落馬洲",
  color: "#009E9B",
  textColor: "#FFFFFF",
};

export const TSW: Stop = {
  stop: StopCode.TSW,
  nameZh: "荃灣",
  nameEn: "Tsuen Wan",
  color: "#BB2200",
  textColor: "#FFFFFF",
};

export const TWH: Stop = {
  stop: StopCode.TWH,
  nameZh: "大窩口",
  nameEn: "Tai Wo Hau",
  color: "#A2B741",
  textColor: "#FFFFFF",
};

export const KWH: Stop = {
  stop: StopCode.KWH,
  nameZh: "葵興",
  nameEn: "Kwai Hing",
  color: "#F1CC00",
  textColor: "#000000",
};

export const KWF: Stop = {
  stop: StopCode.KWF,
  nameZh: "葵芳",
  nameEn: "Kwai Fong",
  color: "#233D3A",
  textColor: "#FFFFFF",
};

export const LAK: Stop = {
  stop: StopCode.LAK,
  nameZh: "茘景",
  nameEn: "Lai King",
  color: "#BB2200",
  textColor: "#FFFFFF",
};

export const LCK: Stop = {
  stop: StopCode.LCK,
  nameZh: "茘枝角",
  nameEn: "Lai Chi Kok",
  color: "#E04300",
  textColor: "#FFFFFF",
};

export const CSW: Stop = {
  stop: StopCode.CSW,
  nameZh: "長沙灣",
  nameEn: "Cheung Sha Wan",
  color: "#B5A265",
  textColor: "#000000",
};

export const SSP: Stop = {
  stop: StopCode.SSP,
  nameZh: "深水埗",
  nameEn: "Sham Shui Po",
  color: "#016258",
  textColor: "#FFFFFF",
};

export const PRE: Stop = {
  stop: StopCode.PRE,
  nameZh: "太子",
  nameEn: "Prince Edward",
  color: "#8674A1",
  textColor: "#FFFFFF",
};

export const MOK: Stop = {
  stop: StopCode.MOK,
  nameZh: "旺角",
  nameEn: "Mong Kok",
  color: "#BE2700",
  textColor: "#FFFFFF",
};

export const YMT: Stop = {
  stop: StopCode.YMT,
  nameZh: "油麻地",
  nameEn: "Yau Ma Tei",
  color: "#CCCCCC",
  textColor: "#000000",
};

export const JOR: Stop = {
  stop: StopCode.JOR,
  nameZh: "佐敦",
  nameEn: "Jordan",
  color: "#69B72B",
  textColor: "#FFFFFF",
};

export const TST: Stop = {
  stop: StopCode.TST,
  nameZh: "尖沙咀",
  nameEn: "Tsim Sha Tsui",
  color: "#FFEF00",
  textColor: "#000000",
};

export const CEN: Stop = {
  stop: StopCode.CEN,
  nameZh: "中環",
  nameEn: "Central",
  color: "#AA0000",
  textColor: "#FFFFFF",
};

export const HOK: Stop = {
  stop: StopCode.HOK,
  nameEn: "Hong Kong",
  nameZh: "香港",
  color: "#FFFAFA",
  textColor: "#000000",
};

export const KOW: Stop = {
  stop: StopCode.KOW,
  nameEn: "Kowloon",
  nameZh: "九龍",
  color: "#ACA28A",
  textColor: "#000000",
};

export const OLY: Stop = {
  stop: StopCode.OLY,
  nameEn: "Olympic",
  nameZh: "奧運",
  color: "#4584C4",
  textColor: "#000000",
};

export const TSY: Stop = {
  stop: StopCode.TSY,
  nameEn: "Tsing Yi",
  nameZh: "青衣",
  color: "#A1C6CA",
  textColor: "#000000",
};

export const SUN: Stop = {
  stop: StopCode.SUN,
  nameEn: "Sunny Bay",
  nameZh: "欣澳",
  color: "#808080",
  textColor: "#C0C0C0",
};

export const TUC: Stop = {
  stop: StopCode.TUC,
  nameEn: "Tung Chung",
  nameZh: "	東涌",
  color: "#6A5ACD",
  textColor: "#000000",
};

export const NOP: Stop = {
  stop: StopCode.NOP,
  nameEn: "North Point",
  nameZh: "北角",
  color: "#E86220",
  textColor: "#000000",
};

export const QUB: Stop = {
  stop: StopCode.QUB,
  nameEn: "Quarry Bay",
  nameZh: "鰂魚涌",
  color: "#00918C",
  textColor: "#FFFFFF",
};

export const YAT: Stop = {
  stop: StopCode.YAT,
  nameEn: "Yau Tong",
  nameZh: "油塘",
  color: "#FFEF00",
  textColor: "#000000",
};

export const TIK: Stop = {
  stop: StopCode.TIK,
  nameEn: "Tiu Keng Leng",
  nameZh: "調景嶺",
  color: "#DCD144",
  textColor: "#000000",
};

export const TKO: Stop = {
  stop: StopCode.TKO,
  nameEn: "Tseung Kwan O",
  nameZh: "將軍澳",
  color: "#E60012",
  textColor: "#FFFFFF",
};

export const LHP: Stop = {
  stop: StopCode.LHP,
  nameEn: "LOHAS Park",
  nameZh: "康城",
  color: "#826F79",
  textColor: "#FFFFFF",
};

export const HAH: Stop = {
  stop: StopCode.HAH,
  nameEn: "Hang Hau",
  nameZh: "坑口",
  color: "#2EA9DF",
  textColor: "#000000",
};

export const POA: Stop = {
  stop: StopCode.POA,
  nameEn: "Po Lam",
  nameZh: "寶琳",
  color: "#F28500",
  textColor: "#000000",
};

export const AIR: Stop = {
  stop: StopCode.AIR,
  nameEn: "Airport",
  nameZh: "機場",
  color: "#808080",
  textColor: "#000000",
};

export const AWE: Stop = {
  stop: StopCode.AWE,
  nameEn: "AsiaWorld Expo",
  nameZh: "博覽館",
  color: "#FFFFFF",
  textColor: "#000000",
};

export const LAT: Stop = {
  stop: StopCode.LAT,
  nameZh: "藍田",
  nameEn: "Lam Tin",
  color: "#0083BE",
  textColor: "#000000",
};

export const KWT: Stop = {
  stop: StopCode.KWT,
  nameZh: "觀塘",
  nameEn: "Kwun Tong",
  color: "#FFFFFF",
  textColor: "#000000",
};

export const NTK: Stop = {
  stop: StopCode.NTK,
  nameZh: "牛頭角",
  nameEn: "Ngau Tau Kok",
  color: "#92B6A3",
  textColor: "#FFFFFF",
};

export const KOB: Stop = {
  stop: StopCode.KOB,
  nameZh: "九龍灣",
  nameEn: "Kowloon Bay",
  color: "#C80815",
  textColor: "#FFFFFF",
};

export const CHH: Stop = {
  stop: StopCode.CHH,
  nameZh: "彩虹",
  nameEn: "Choi Hung",
  color: "#27408B",
  textColor: "#FFFFFF",
};

export const WTS: Stop = {
  stop: StopCode.WTS,
  nameZh: "黃大仙",
  nameEn: "Wong Tai Sin",
  color: "#FFFF00",
  textColor: "#000000",
};

export const LOF: Stop = {
  stop: StopCode.LOF,
  nameZh: "樂富",
  nameEn: "Lok Fu",
  color: "#579E2F",
  textColor: "#000000",
};

export const SKM: Stop = {
  stop: StopCode.SKM,
  nameZh: "石硤尾",
  nameEn: "Shek Kip Mei",
  color: "#669933",
  textColor: "#FFFFFF",
};

export const WHA: Stop = {
  stop: StopCode.WHA,
  nameZh: "黃埔",
  nameEn: "Whampoa",
  color: "#AECFF0",
  textColor: "#000000",
};

export const DIS: Stop = {
  stop: StopCode.DIS,
  nameZh: "迪士尼",
  nameEn: "Disneyland Resort",
  color: "#005533",
  textColor: "#D4AF37",
};

export const CHW: Stop = {
  stop: StopCode.CHW,
  nameZh: "柴灣",
  nameEn: "Chai Wan",
  color: "#38510E",
  textColor: "#FFFFFF",
};

export const HFC: Stop = {
  stop: StopCode.HFC,
  nameZh: "杏花邨",
  nameEn: "Heng Fa Chuen",
  color: "#C01204",
  textColor: "#FFFFFF",
};

export const SKW: Stop = {
  stop: StopCode.SKW,
  nameZh: "筲箕灣",
  nameEn: "Shau Kei Wan",
  color: "#191970",
  textColor: "#FFFFFF",
};

export const SWH: Stop = {
  stop: StopCode.SWH,
  nameZh: "西灣河",
  nameEn: "Sai Wan Ho",
  color: "#FFCC00",
  textColor: "#000000",
};

export const TAK: Stop = {
  stop: StopCode.TAK,
  nameZh: "太古",
  nameEn: "Tai Koo",
  color: "#BB2200",
  textColor: "#FFFFFF",
};

export const FOH: Stop = {
  stop: StopCode.FOH,
  nameZh: "炮台山",
  nameEn: "Fortress Hill",
  color: "#4B8842",
  textColor: "#FFFFFF",
};

export const TIH: Stop = {
  stop: StopCode.TIH,
  nameZh: "天后",
  nameEn: "Tin Hau",
  color: "#FF7D00",
  textColor: "#000000",
};

export const CAB: Stop = {
  stop: StopCode.CAB,
  nameZh: "銅鑼灣",
  nameEn: "Causeway Bay",
  color: "#C8A2C8",
  textColor: "#000000",
};

export const WAC: Stop = {
  stop: StopCode.WAC,
  nameZh: "灣仔",
  nameEn: "Wan Chai",
  color: "#E1EB2B",
  textColor: "#000000",
};

export const SHW: Stop = {
  stop: StopCode.SHW,
  nameZh: "上環",
  nameEn: "Sheung Wan",
  color: "#FFD280",
  textColor: "#6B4513",
};

export const SYP: Stop = {
  stop: StopCode.SYP,
  nameZh: "西營盤",
  nameEn: "Sai Ying Pun",
  color: "#8B7BA0",
  textColor: "#000000",
};

export const HKU: Stop = {
  stop: StopCode.HKU,
  nameZh: "香港大學",
  nameEn: "HKU",
  color: "#B8DA89",
  textColor: "#000000",
};

export const KET: Stop = {
  stop: StopCode.KET,
  nameZh: "堅尼地城",
  nameEn: "Kennedy Town",
  color: "#95D0D0",
  textColor: "#000000",
};

export const OCP: Stop = {
  stop: StopCode.OCP,
  nameZh: "海洋公園",
  nameEn: "Ocean Park",
  color: "#00BFFF",
  textColor: "#FFFFFF",
};

export const WCH: Stop = {
  stop: StopCode.WCH,
  nameZh: "黃竹坑",
  nameEn: "Wong Chuk Hang",
  color: "#FFFF00",
  textColor: "#000000",
};

export const LET: Stop = {
  stop: StopCode.LET,
  nameZh: "利東",
  nameEn: "Lei Tung",
  color: "#FF7F00",
  textColor: "#FFFFFF",
};

export const SOH: Stop = {
  stop: StopCode.SOH,
  nameZh: "海怡半島",
  nameEn: "South Horizons",
  color: "#74B11B",
  textColor: "#FFFFFF",
};

export const stopMap: { [key in StopCode]: Stop } = {
  TUM,
  SIH,
  TIS,
  LOP,
  YUL,
  KSR,
  TWW,
  MEF,
  NAC,
  AUS,
  ETS,
  HUH,
  HOM,
  TKW,
  SUW,
  KAT,
  DIH,
  HIK,
  TAW,
  CKT,
  STW,
  CIO,
  SHM,
  TSH,
  HEO,
  MOS,
  WKS,
  ADM,
  EXC,
  MKK,
  KOT,
  SHT,
  FOT,
  RAC,
  UNI,
  TAP,
  TWO,
  FAN,
  SHS,
  LOW,
  LMC,
  TSW,
  TWH,
  KWH,
  KWF,
  LAK,
  LCK,
  CSW,
  SSP,
  PRE,
  MOK,
  YMT,
  JOR,
  TST,
  CEN,
  HOK,
  KOW,
  OLY,
  TSY,
  SUN,
  TUC,
  NOP,
  QUB,
  YAT,
  TIK,
  TKO,
  LHP,
  HAH,
  POA,
  AIR,
  AWE,
  LAT,
  KWT,
  NTK,
  KOB,
  CHH,
  WTS,
  LOF,
  SKM,
  WHA,
  DIS,
  CHW,
  HFC,
  SKW,
  SWH,
  TAK,
  FOH,
  TIH,
  CAB,
  WAC,
  SHW,
  SYP,
  HKU,
  KET,
  OCP,
  WCH,
  LET,
  SOH,
};

export const stops = Object.values(stopMap);
