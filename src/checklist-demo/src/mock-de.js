export const serviceCheckDe = [
  "In Ordnung",
  "Nicht in Ordnung",
  "Fehler behoben"
];

export const addressListDe = [
  { address: "Keine Adresse angegeben", device: "" },
  {
    address: "Place d Armes, 78000 Versailles, France",
    device: "Spitzdüsen - XXL 1518"
  },
  {
    address: "Piazza del Duomo, 56126 Pisa PI, Italy",
    device: "Fließband - XL211"
  },
  {
    address: "Neuschwansteinstraße 20, 87645 Schwangau",
    device: "Walzfräsemaschine - WFM1214"
  }
];

export const checklistDe = [
  {
    key: "0",
    device: "Spitzdüsen - XXL 1518",
    notes: "Schmutzfilter konnte nicht gereinigt werden. Weg war versperrt.",
    date: "2018-04-23",
    address: "Place d Armes, 78000 Versailles, France",
    allOk: true,
    lamella: "In Ordnung",
    airChannel: "In Ordnung",
    dirtFilter: "Nicht in Ordnung",
    defrost: true,
    controllerSetting: true,
    lamellaNotOk: "",
    airChannelNotOk: "",
    dirtFilterNotOk: "Weg ist versperrt"
  },
  {
    key: "1",
    device: "Fließband - XL211",
    notes: "Schmutzfilter gereinigt",
    date: "2018-1-11",
    address: "Piazza del Duomo, 56126 Pisa PI, Italy",
    allOk: true,
    lamella: "In Ordnung",
    airChannel: "In Ordnung",
    dirtFilter: "Fehler behoben",
    defrost: true,
    controllerSetting: true,
    lamellaNotOk: "",
    airChannelNotOk: "",
    dirtFilterNotOk: ""
  },
  {
    key: "2",
    device: "Walzfräsemaschine - WFM1214",
    notes: "Reglereinstellungen veraltet",
    date: "2017-12-13",
    address: "Neuschwansteinstraße 20, 87645 Schwangau",
    allOk: true,
    lamella: "In Ordnung",
    airChannel: "In Ordnung",
    dirtFilter: "In Ordnung",
    defrost: true,
    controllerSetting: false,
    lamellaNotOk: "",
    airChannelNotOk: "",
    dirtFilterNotOk: ""
  },
  {
    key: "3",
    device: "Fließband - XL211",
    notes: "Abtauueinheit außerhalb der Toleranz",
    date: "2017-12-10",
    address: "Piazza del Duomo, 56126 Pisa PI, Italy",
    allOk: false,
    lamella: "In Ordnung",
    airChannel: "In Ordnung",
    dirtFilter: "In Ordnung",
    defrost: false,
    controllerSetting: true,
    lamellaNotOk: "",
    airChannelNotOk: "",
    dirtFilterNotOk: ""
  },
  {
    key: "4",
    device: "Walzfräsemaschine - WFM1214",
    notes: "Leichte Störgeräusche an der Lamelle. Nichts auffälliges gefunden",
    date: "2017-11-22",
    address: "Neuschwansteinstraße 20, 87645 Schwangau",
    allOk: true,
    lamella: "In Ordnung",
    airChannel: "In Ordnung",
    dirtFilter: "In Ordnung",
    defrost: true,
    controllerSetting: true,
    lamellaNotOk: "",
    airChannelNotOk: "",
    dirtFilterNotOk: ""
  }
];
