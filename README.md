
<div align="center">

![Banner](docs/banner.png 'Banner')

# MTR Kit

Constants and utils for [MTR HK](https://www.mtr.com.hk/)

![GitHub CI](https://github.com/MTR-Today/mtr-kit/actions/workflows/runTest.yml/badge.svg) [![Conventional Commits](https://img.shields.io/badge/Conventional%20Commits-1.0.0-yellow.svg)](https://conventionalcommits.org) [![npm type definitions](https://img.shields.io/npm/types/typescript.svg)](https://www.typescriptlang.org/)

[Usage](#-usage) | [Development](#%EF%B8%8F-development) | [Contributing](#-contributing)

</div>

## 📦 Installation

```bash
npm i mtr-kit
// Or
yarn add mtr-kit
// Or
pnpm i mtr-kit
```

## 💻 Usage

### API

#### RT Api

API client for Official [Real-time MTR train information](https://data.gov.hk/en-data/dataset/mtr-data2-nexttrain-data/resource/53ef7ded-4a80-42d9-92a1-6f0d340c5c91)

```ts
import { rtApi } from "mtr-kit" // API Client
import { stopScheduleApi, LineCode } from "mtr-kit" // use the schedule API directly

const schedule = await stopScheduleApi.get({ line: LineCode.TML, stop: StopCode.TMU })

console.log(schedule)
/*
Output:
{
  status: 1,
  message: 'successful',
  sys_time: '2023-07-13 11:10:07',
  curr_time: '2023-07-13 11:09:58',
  data: {
    'TML-TUM': {
      curr_time: '2023-07-13 11:09:58',
      sys_time: '2023-07-13 11:10:07',
      DOWN: [Array]
    }
  },
  isdelay: 'N'
}
*/

```

#### Open Data API

API client for [MTR routes, fares and barrier-fee facilities](https://data.gov.hk/en-data/dataset/mtr-data-routes-fares-barrier-free-facilities)

```ts
import { openDataApi } from "mtr-kit" // API Client
import { fareApi, LineCode } from "mtr-kit" // use the fare API directly

const mtrFares = await fareApi.listMtrFares()

console.log(mtrFares)

/*
Output:
[
  {
    SRC_STATION_NAME: 'Central',
    SRC_STATION_ID: 1,
    DEST_STATION_NAME: 'Central',
    DEST_STATION_ID: 1,
    OCT_ADT_FARE: 0,
    OCT_STD_FARE: 0,
    OCT_JOYYOU_SIXTY_FARE: 0,
    SINGLE_ADT_FARE: 0,
    OCT_CON_CHILD_FARE: 0,
    OCT_CON_ELDERLY_FARE: 0,
    OCT_CON_PWD_FARE: 0,
    SINGLE_CON_CHILD_FARE: 0,
    SINGLE_CON_ELDERLY_FARE: 0
  },
  ...more
]
*/

const airportExpressFares = await fareApi.listAirportExpressFares()


/*
Output:
[
  {
    ST_FROM: 'HongKong',
    ST_FROM_ID: 44,
    ST_TO: 'Airport',
    ST_TO_ID: 47,
    OCT_ADT_FARE: 110,
    OCT_CHD_FARE: 55,
    SINGLE_ADT_FARE: 115,
    SINGLE_CHD_FARE: 57.5
  },
  ...more
]
*/


```

### Constants

#### LineCode

Line code according to the [Real-time MTR train information](https://data.gov.hk/en-data/dataset/mtr-data2-nexttrain-data/resource/53ef7ded-4a80-42d9-92a1-6f0d340c5c91)

```ts
import { LineCode } from "mtr-kit"
```

#### Lines

Line basic information

```ts
type Line = {
  line: LineCode
  nameEn: string
  nameZh: string
  color: string
  stops: {
    stop: StopCode
    up: LineStopDirection
    down: LineStopDirection
  }[]
}

import { lines } from "mtr-kit" // Line[]
import { lineMap } from "mtr-kit" // { [key in LineCode]: Line }


// Import line specifically
import { TML } from "mtr-kit" // Line

```

#### StopCode

Stop code according to the [Real-time MTR train information](https://data.gov.hk/en-data/dataset/mtr-data2-nexttrain-data/resource/53ef7ded-4a80-42d9-92a1-6f0d340c5c91)

```ts
import { StopCode } from "mtr-kit"
```

#### Stops

Stop basic information

```ts
type Stop = {
  stop: StopCode
  nameEn: string
  nameZh: string
  color: string
  textColor: string
}

import { stops } from "mtr-kit" // Stop[]
import { stopMap } from "mtr-kit" // { [key in StopCode]: Stop }


// Import stop specifically
import { TUM } from "mtr-kit" // Stop

```

## ⌨️ Development

### Local Development

```bash
pnpm i
pnpm run test
```

### Build

```bash
npm run build
```

## 🤝 Contributing

### 🚢 Release Flow

This repo uses [Release Please](https://github.com/google-github-actions/release-please-action) to release.

### To release a new version

1. Merge `develop` into `main`
2. A GH Action will run(triggered automatically) and a Release PR will be created.
3. Merge the release PR
4. Wait for the second GH Action to run(triggered automatically)
5. Create merge back PR(from `main` back to `develop`)
6. You're done!
