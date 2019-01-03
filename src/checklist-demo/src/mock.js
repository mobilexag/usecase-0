export const serviceCheckEn = ["Okay", "Not okay", "Fixed"];

export const addressListEn = [
  { address: "No Address", device: "" },
  {
    address: "Place d Armes, 78000 Versailles, France",
    device: "Spitzdüsen - XXL 1518"
  },
  {
    address: "Piazza del Duomo, 56126 Pisa PI, Italy",
    device: "Fließband - XL211"
  },
  {
    address: "Neuschwansteinstraße 20, 87645 Schwangau",
    device: "Walzfräsemaschine - WFM1214"
  }
];

export const checklistEn = [
  {
    key: "0",
    device: "Spitzdüsen - XXL 1518",
    notes: "Cleaned clogged dirtfilter. Defrost beyond the tolerance limits",
    date: "2018-04-23",
    address: "Place d Armes, 78000 Versailles, France",
    allOk: false,
    lamella: "Okay",
    airChannel: "Okay",
    dirtFilter: "Fixed",
    defrost: false,
    controllerSetting: true,
    lamellaNotOk: "",
    airChannelNotOk: "",
    dirtFilterNotOk: ""
  },
  {
    key: "1",
    device: "Walzfräsemaschine - WFM1214",
    notes: "Small interference in lamella",
    date: "2018-04-18",
    address: "Neuschwansteinstraße 20, 87645 Schwangau",
    allOk: true,
    lamella: "Okay",
    airChannel: "Okay",
    dirtFilter: "Okay",
    defrost: true,
    controllerSetting: true,
    lamellaNotOk: "",
    airChannelNotOk: "",
    dirtFilterNotOk: ""
  },
  {
    key: "2",
    device: "Fließband - XL211",
    notes: "Everything is alright",
    date: "2018-01-14",
    address: "Piazza del Duomo, 56126 Pisa PI, Italy",
    allOk: true,
    lamella: "Okay",
    airChannel: "Okay",
    dirtFilter: "Okay",
    defrost: true,
    controllerSetting: true,
    lamellaNotOk: "",
    airChannelNotOk: "",
    dirtFilterNotOk: ""
  },
  {
    key: "3",
    device: "Walzfräsemaschine - WFM1214",
    notes: "Alles ok",
    date: "2017-12-21",
    address: "Neuschwansteinstraße 20, 87645 Schwangau",
    allOk: true,
    lamella: "Okay",
    airChannel: "Not okay",
    dirtFilter: "Okay",
    defrost: true,
    controllerSetting: true,
    lamellaNotOk: "",
    airChannelNotOk: "To rusty.",
    dirtFilterNotOk: ""
  },
  {
    key: "4",
    device: "Fließband - XL211",
    notes: "New dirtfilter attached",
    date: "2017-11-22",
    address: "Piazza del Duomo, 56126 Pisa PI, Italy",
    allOk: true,
    lamella: "Okay",
    airChannel: "Okay",
    dirtFilter: "Fixed",
    defrost: true,
    controllerSetting: true,
    lamellaNotOk: "",
    airChannelNotOk: "",
    dirtFilterNotOk: ""
  }
];
