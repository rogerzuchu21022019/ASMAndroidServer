import { Router } from "express";
var router = Router();
import registerController from "../../../../components/users/controllers/Register";
import User from "../../../../components/users/models/User.js";

router.post("/register", async (req, res, next) => {
  try {
    const { user } = req.body;
    const data = await registerController(user);
    return res.status(200).json({
      status: `Success`,
      message: "Register Success",
      error: false,
      isRegister: false,
      data: data,
    });
  } catch (error) {
    res.status(409).json({
      status: `Fail`,
      message: `${error.message}`,
      error: true,
      isRegister: true,
    });
  }
});

router.post("/insert-users", async (req, res, next) => {
  try {
    const users = User.insertMany(usersFake);
    console.log(
      "🚀 ~ file: Register.js ~ line 69 ~ router.post ~ users",
      users
    );
  } catch (error) {
    next(error);
  }
});

// router.all("/auth-login", async (req, res, next) => {
//   try {
//     const { email, password, address, name, phone } = req.body;

//     const data = await UserController(email, password, address, name, phone);
//     console.log("🚀 ~ file: register.js ~ line 42 ~ router.post ~ data", data)
//     res.render("login", {
//       home: navigation.HOME,
//       login: navigation.LOGIN,
//       logout: navigation.LOGOUT,
//       chart: navigation.CHART,
//       register: navigation.REGISTER,
//       analystic: navigation.ANALYSTIC,
//       data_table: navigation.DATATABLE,
//     });
//   } catch (error) {}
// });

export default router;

const usersFake = [
  {
    name: "Kristopher Volkman",
    email: "Skyla.Mann@gmail.com",
    phone: "617-482-0423",
    address: "96173 Shields Club",
    imageUrl:
      "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/1191.jpg",
    dob: "2025-08-07T06:26:46.409Z",
    password: "bYbak12xvMCmGbX",
  },
  {
    name: "Miss Wilfred Gutmann",
    email: "Cullen.Zboncak@hotmail.com",
    phone: "830-837-4023",
    address: "20781 Buckridge Springs",
    imageUrl:
      "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/368.jpg",
    dob: "2038-09-20T06:07:25.764Z",
    password: "qIJ7jIulrN8xF8S",
  },
  {
    name: "Francis McKenzie",
    email: "Regan52@gmail.com",
    phone: "264-883-1585",
    address: "2092 Lilla Well",
    imageUrl:
      "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/554.jpg",
    dob: "2067-02-02T15:35:50.549Z",
    password: "wUiP84fuvbn8SWk",
  },
  {
    name: "Arlene Schiller",
    email: "Danny33@hotmail.com",
    phone: "953-995-1271",
    address: "12652 Sherman Ferry",
    imageUrl:
      "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/1010.jpg",
    dob: "2082-08-26T19:57:13.932Z",
    password: "fckswIQQcTfJ5Rb",
  },
  {
    name: "Josh Hane",
    email: "Jayne_Ernser12@yahoo.com",
    phone: "270-582-6162",
    address: "944 Prosacco Curve",
    imageUrl:
      "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/430.jpg",
    dob: "2072-07-07T06:02:08.268Z",
    password: "8JsWr_Z93dXn1o8",
  },
  {
    name: "Lowell Lakin",
    email: "Leonardo_Streich@hotmail.com",
    phone: "943-965-8744",
    address: "544 Adrain Grove",
    imageUrl:
      "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/1203.jpg",
    dob: "2014-08-24T11:20:30.916Z",
    password: "CYPWdSRInUPWfNR",
  },
  {
    name: "Gustavo Wunsch",
    email: "Mariane_Volkman72@yahoo.com",
    phone: "534-721-3233",
    address: "1586 Deion Springs",
    imageUrl:
      "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/287.jpg",
    dob: "2057-01-08T04:55:53.924Z",
    password: "gGpSLdSif_tg_gB",
  },
  {
    name: "Karl Jones",
    email: "Vincenzo_Hudson24@gmail.com",
    phone: "269-767-9206",
    address: "53640 Zulauf Walk",
    imageUrl:
      "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/553.jpg",
    dob: "2074-06-07T02:17:58.313Z",
    password: "LyFw67q0Rkehoku",
  },
  {
    name: "Emma Skiles",
    email: "Norval_Mueller15@gmail.com",
    phone: "553-924-3664",
    address: "471 Hollis Meadows",
    imageUrl:
      "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/326.jpg",
    dob: "2098-04-04T17:54:58.857Z",
    password: "znzbyd1fnPD1lOG",
  },
  {
    name: "Tracey Trantow",
    email: "Kaleb.Feeney56@gmail.com",
    phone: "841-411-4011",
    address: "11412 Schimmel Court",
    imageUrl:
      "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/633.jpg",
    dob: "2038-10-18T09:06:35.898Z",
    password: "MoEe3nK8SQLknxg",
  },
  {
    name: "Mr. Geneva Thiel",
    email: "Eudora_Kozey20@hotmail.com",
    phone: "672-604-0376",
    address: "612 Cummerata Forges",
    imageUrl:
      "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/1169.jpg",
    dob: "2073-08-11T15:43:07.802Z",
    password: "E7yrpDpHZcxEuTg",
  },
  {
    name: "Sara White",
    email: "Opal.Gleason30@hotmail.com",
    phone: "421-655-0225",
    address: "5120 Larry Valley",
    imageUrl:
      "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/346.jpg",
    dob: "2027-03-06T12:00:56.470Z",
    password: "vxz0dwvy6kSF4V_",
  },
  {
    name: "Earnest Rath",
    email: "Eleanora50@yahoo.com",
    phone: "619-592-5409",
    address: "3796 Spencer Ports",
    imageUrl:
      "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/888.jpg",
    dob: "2060-06-28T02:12:49.972Z",
    password: "VWVmL0szoiGD1kL",
  },
  {
    name: "Garry Pagac",
    email: "Brycen26@hotmail.com",
    phone: "725-521-1314",
    address: "50257 Bayer Ville",
    imageUrl:
      "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/855.jpg",
    dob: "2017-12-30T04:41:34.350Z",
    password: "vCBBqgVI1nqXbMW",
  },
  {
    name: "Ms. Kristin Bednar",
    email: "Aurelia_Maggio89@gmail.com",
    phone: "723-285-1681",
    address: "12897 Houston Dam",
    imageUrl:
      "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/603.jpg",
    dob: "2083-09-10T22:04:02.516Z",
    password: "y0JgV345jzTR8dS",
  },
  {
    name: "Miss Jerry Bailey",
    email: "Aiden_Fay73@yahoo.com",
    phone: "211-551-7739",
    address: "33186 Bauch Fork",
    imageUrl:
      "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/1166.jpg",
    dob: "1994-01-01T08:25:15.970Z",
    password: "7RGa_tt80rLms2s",
  },
  {
    name: "Herman Spinka",
    email: "Sonya.Torp@hotmail.com",
    phone: "383-340-3221",
    address: "408 Mckenna Station",
    imageUrl:
      "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/332.jpg",
    dob: "2048-10-30T07:28:08.741Z",
    password: "5XXkHpAVhQjiBKL",
  },
  {
    name: "Claude VonRueden",
    email: "Sydni49@hotmail.com",
    phone: "406-309-8454",
    address: "221 Angus Walks",
    imageUrl:
      "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/493.jpg",
    dob: "2092-03-18T20:47:21.524Z",
    password: "K77hGBrho0hMGAq",
  },
  {
    name: "Nettie Padberg",
    email: "Bessie75@yahoo.com",
    phone: "927-555-1063",
    address: "1152 Newton Stream",
    imageUrl:
      "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/396.jpg",
    dob: "2020-05-13T10:35:16.451Z",
    password: "j6VtcJnKfdlLyas",
  },
  {
    name: "Eddie Hyatt",
    email: "Dashawn.Heathcote@hotmail.com",
    phone: "814-402-3643",
    address: "581 Josianne Plaza",
    imageUrl:
      "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/837.jpg",
    dob: "2053-07-01T07:31:00.940Z",
    password: "F5E5Py5l06NXh49",
  },
  {
    name: "Brooke West",
    email: "Kelsi90@gmail.com",
    phone: "263-688-8269",
    address: "76094 Morissette Way",
    imageUrl:
      "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/882.jpg",
    dob: "2075-12-11T11:29:52.882Z",
    password: "8v0lJ4TOIzSQeqL",
  },
  {
    name: "Brian Strosin",
    email: "Adela_Williamson32@gmail.com",
    phone: "566-468-7337",
    address: "39792 Francisca Mall",
    imageUrl:
      "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/751.jpg",
    dob: "1991-09-05T09:25:30.316Z",
    password: "mkILpJl0C0_VN_H",
  },
  {
    name: "Angelina Schuppe I",
    email: "Laverne_Lindgren24@hotmail.com",
    phone: "872-525-2754",
    address: "9251 Candida Forge",
    imageUrl:
      "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/322.jpg",
    dob: "2017-09-15T02:52:09.436Z",
    password: "smfwBSSz7QOIofG",
  },
  {
    name: "Tricia Cormier",
    email: "Alva.Dickens@gmail.com",
    phone: "547-235-6355",
    address: "853 Waelchi Views",
    imageUrl:
      "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/808.jpg",
    dob: "2022-12-13T22:16:36.014Z",
    password: "LKdjgCwrAH1Z0oB",
  },
  {
    name: "Salvador Rowe",
    email: "Nayeli_Johns@gmail.com",
    phone: "673-662-8812",
    address: "7354 Gottlieb Burgs",
    imageUrl:
      "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/537.jpg",
    dob: "2091-10-13T13:21:15.381Z",
    password: "Dnm8qMnf9xbSjXV",
  },
  {
    name: "Olga Dach",
    email: "Jalon96@yahoo.com",
    phone: "402-761-6399",
    address: "2998 Vivien Radial",
    imageUrl:
      "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/701.jpg",
    dob: "2089-02-12T01:36:04.019Z",
    password: "kmSUXv7LubPitEu",
  },
  {
    name: "Edgar Strosin",
    email: "Linda51@hotmail.com",
    phone: "780-944-3256",
    address: "75867 Hamill Corners",
    imageUrl:
      "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/332.jpg",
    dob: "1995-11-17T22:33:41.746Z",
    password: "lHuaSmjYbjqHq8k",
  },
  {
    name: "Kayla Osinski",
    email: "Andreane35@yahoo.com",
    phone: "223-616-3686",
    address: "205 Douglas Falls",
    imageUrl:
      "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/1083.jpg",
    dob: "2035-04-23T14:50:35.916Z",
    password: "AnWWBL3JWUuApDV",
  },
  {
    name: "Dr. Mack Schultz",
    email: "Devan_Abshire91@hotmail.com",
    phone: "404-236-3485",
    address: "84676 Damian Branch",
    imageUrl:
      "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/1084.jpg",
    dob: "2048-12-01T23:01:46.996Z",
    password: "pzvd3Vkv9LkKIc3",
  },
  {
    name: "Thomas Von",
    email: "River.Shields38@hotmail.com",
    phone: "290-640-8779",
    address: "0863 Lazaro Motorway",
    imageUrl:
      "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/1033.jpg",
    dob: "2021-01-13T07:10:15.708Z",
    password: "rAvyefYpIpVU1wl",
  },
  {
    name: "Shelley Larkin",
    email: "Mohammad55@gmail.com",
    phone: "333-201-0258",
    address: "57060 Bert Isle",
    imageUrl:
      "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/409.jpg",
    dob: "2075-03-11T14:20:23.235Z",
    password: "2mXzoQqb3X3LFCc",
  },
  {
    name: "Ginger Considine",
    email: "Jonas.Auer48@hotmail.com",
    phone: "736-750-3015",
    address: "225 Pat Walks",
    imageUrl:
      "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/740.jpg",
    dob: "2013-06-24T01:42:41.125Z",
    password: "RsGxV4hMIw5EInn",
  },
  {
    name: "Rosemarie Beer",
    email: "Miller25@gmail.com",
    phone: "610-932-8249",
    address: "5729 Madonna Key",
    imageUrl:
      "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/971.jpg",
    dob: "1993-12-10T08:14:41.665Z",
    password: "ApDurbcMnPl42Q3",
  },
  {
    name: "Judy Hilpert II",
    email: "Christina.Hamill23@yahoo.com",
    phone: "779-882-1531",
    address: "49261 Blair Union",
    imageUrl:
      "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/101.jpg",
    dob: "1994-02-25T01:36:34.501Z",
    password: "NyRwU58a7FxEe0Z",
  },
  {
    name: "Sheldon Zemlak",
    email: "Golden_Kozey63@hotmail.com",
    phone: "645-422-9400",
    address: "247 Leuschke Lakes",
    imageUrl:
      "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/666.jpg",
    dob: "2036-06-10T00:41:48.179Z",
    password: "fijO9WBCjsxGEJo",
  },
  {
    name: "Hazel Daugherty",
    email: "Petra43@hotmail.com",
    phone: "494-699-8053",
    address: "70332 Muller Parks",
    imageUrl:
      "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/699.jpg",
    dob: "2071-02-01T22:34:55.624Z",
    password: "zq4Bow0FGR6FiKE",
  },
  {
    name: "Roderick Beahan",
    email: "Elmira14@yahoo.com",
    phone: "410-504-7384",
    address: "3581 Smith Square",
    imageUrl:
      "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/25.jpg",
    dob: "2028-04-18T18:42:30.225Z",
    password: "JIHkHIpTcIPwbGv",
  },
  {
    name: "Cheryl Fahey",
    email: "Maud_Miller@hotmail.com",
    phone: "302-638-0502",
    address: "58796 Wilton Courts",
    imageUrl:
      "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/315.jpg",
    dob: "2050-08-08T22:44:19.480Z",
    password: "LsYPqlxHrPFfFx3",
  },
  {
    name: "Rex Bauch",
    email: "Flavio.Schultz78@hotmail.com",
    phone: "225-419-0266",
    address: "72009 Shayna Avenue",
    imageUrl:
      "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/479.jpg",
    dob: "2041-07-06T17:06:11.336Z",
    password: "lYYX6gtArDAgT7h",
  },
  {
    name: "Mr. Joe Kub",
    email: "Jacey89@gmail.com",
    phone: "552-494-3786",
    address: "64831 Bernhard Fields",
    imageUrl:
      "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/561.jpg",
    dob: "2017-05-20T12:22:24.028Z",
    password: "P_wXPBQT5SIs7jA",
  },
  {
    name: "Brent Morissette",
    email: "Abdullah_Hills91@yahoo.com",
    phone: "920-513-2483",
    address: "204 Emilio Mission",
    imageUrl:
      "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/767.jpg",
    dob: "2053-09-16T18:39:59.612Z",
    password: "Z9lZIDz25rEEaaS",
  },
  {
    name: "Jeffery Quigley",
    email: "Joel.Kertzmann56@yahoo.com",
    phone: "924-547-3909",
    address: "81707 Witting Estate",
    imageUrl:
      "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/192.jpg",
    dob: "2043-02-25T16:32:09.961Z",
    password: "fhQuAoM5ghsrVFg",
  },
  {
    name: "Olive Gutkowski",
    email: "Litzy_Dach93@yahoo.com",
    phone: "206-937-1043",
    address: "168 Schuppe Center",
    imageUrl:
      "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/1007.jpg",
    dob: "2073-07-11T07:33:14.732Z",
    password: "MXA1uYZWsnRGYa5",
  },
  {
    name: "Clarence Blanda",
    email: "Ryan_Bradtke@gmail.com",
    phone: "326-932-1830",
    address: "92114 Roob Road",
    imageUrl:
      "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/845.jpg",
    dob: "2098-07-21T02:40:26.439Z",
    password: "mZGLsz7PpLwkbG0",
  },
  {
    name: "Ms. Miriam Hudson",
    email: "Brennan.Rolfson@hotmail.com",
    phone: "948-739-3007",
    address: "63572 Myrtle Roads",
    imageUrl:
      "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/167.jpg",
    dob: "2035-03-11T17:26:31.286Z",
    password: "S0zpzsVVGxu9mPG",
  },
  {
    name: "Patti Franey",
    email: "Darlene.Jast47@gmail.com",
    phone: "795-618-1584",
    address: "451 Zemlak Mills",
    imageUrl:
      "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/374.jpg",
    dob: "2022-10-22T21:31:27.279Z",
    password: "Dr_y72Kzc_ATGZO",
  },
  {
    name: "Ruth Welch",
    email: "Samson.Okuneva@yahoo.com",
    phone: "620-455-9811",
    address: "467 Effertz Avenue",
    imageUrl:
      "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/76.jpg",
    dob: "2004-08-01T10:29:15.032Z",
    password: "DYwhHb0XOiqfmA1",
  },
  {
    name: "Beulah Stanton II",
    email: "Eino_Zulauf72@gmail.com",
    phone: "806-472-3844",
    address: "05444 Rogahn Extensions",
    imageUrl:
      "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/961.jpg",
    dob: "2050-10-31T13:42:22.096Z",
    password: "xTUoxl9zZB1RbCm",
  },
  {
    name: "Joshua Yost",
    email: "Kelsie8@hotmail.com",
    phone: "342-808-6985",
    address: "54778 Cormier Crossroad",
    imageUrl:
      "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/372.jpg",
    dob: "2073-01-05T09:05:11.732Z",
    password: "vGFDEAYvGn0TECF",
  },
  {
    name: "Lindsey Fisher",
    email: "Peggie.OHara65@yahoo.com",
    phone: "656-758-9068",
    address: "69502 Rath Vista",
    imageUrl:
      "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/765.jpg",
    dob: "2036-07-20T06:49:05.363Z",
    password: "kTBZ88sQlFqkFSG",
  },
];
