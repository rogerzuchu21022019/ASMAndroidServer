const express = require("express");
const createCategoryController = require("../../../components/category/controllers/CreateCategory");
const Category = require("../../../components/category/models/Category");

const router = express.Router();
router.post(`/create`, async (req, res, next) => {
  try {
    const { category } = req.body;
    console.log("🚀 ~ file: CreateCategory.js ~ line 7 ~ router.post ~ category", category)
    const data = await createCategoryController(category);
    data
      ? res.json({
          status: "Success",
          message: "Create category successfully",
          error: false,
          isCreated: true,
          data: data,
        })
      : res.json({
          status: "Fail",
          message: "Create category fail",
          error: true,
          isCreated: false,
          data: null,
        });
  } catch (error) {
    next(error);
  }
});

router.post(`/insert-categories`, async (req, res, next) => {
  try {
    const data = await Category.insertMany(fakeCategories)
    // const data = await createCategoryController(category);
    data
      ? res.json({
          status: "Success",
          message: "Create category successfully",
          error: false,
          isCreated: true,
          data: data,
        })
      : res.json({
          status: "Fail",
          message: "Create category fail",
          error: true,
          isCreated: false,
          data: null,
        });
  } catch (error) {
    next(error);
  }
});
module.exports = router;

const fakeCategories = [
  {
    name: "a6818c83-0138-4b3d-bc68-2e63541a3cad",
    description: "placeat praesentium voluptate",
    title: "hic porro fugiat",
    imageUrl:
      "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/219.jpg",
    category: "3fe90110-228a-4d95-823d-f97be23118b2",
    id: "1",
  },
  {
    name: "a3728bd3-b949-4ffa-8d75-16abe9f445eb",
    description: "magnam sit voluptatem",
    title: "non est vel",
    imageUrl:
      "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/396.jpg",
    category: "1e656f4e-7907-4434-a7dd-a14c8c4a96c8",
    id: "2",
  },
  {
    name: "54056bdd-4e16-4bf0-8aa5-6761c36ca5ef",
    description: "repudiandae ut excepturi",
    title: "dolorem natus aut",
    imageUrl:
      "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/246.jpg",
    category: "14406488-0fa8-4c0b-9b58-57e60619e01b",
    id: "3",
  },
  {
    name: "4a999d13-8224-45b9-9cf7-9ea38bdf7eef",
    description: "distinctio voluptatem cum",
    title: "sed dolores delectus",
    imageUrl:
      "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/43.jpg",
    category: "f1fd2662-8086-4661-9368-62393331ca6f",
    id: "4",
  },
  {
    name: "7a4f460b-f9f1-41c1-adb3-27d1afcf1cd6",
    description: "reprehenderit et nesciunt",
    title: "quidem nemo magni",
    imageUrl:
      "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/308.jpg",
    category: "2d2f441f-cfb0-4820-ae2e-c8df2a94b49b",
    id: "5",
  },
  {
    name: "2eaced83-7339-4f02-b6f2-cbbd253c9624",
    description: "aut magni assumenda",
    title: "delectus corporis voluptas",
    imageUrl:
      "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/866.jpg",
    category: "0777d6bd-faa4-4ab1-989b-0a057c8204b2",
    id: "6",
  },
  {
    name: "99d7831a-0d32-4511-bdd7-6146026c95b8",
    description: "expedita molestiae qui",
    title: "temporibus eum doloribus",
    imageUrl:
      "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/1139.jpg",
    category: "a903b32b-a7d7-48d9-9557-615365559468",
    id: "7",
  },
  {
    name: "b74c6151-048f-43b2-a2d0-2d3fbd9375dc",
    description: "aliquid est et",
    title: "consequatur culpa velit",
    imageUrl:
      "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/96.jpg",
    category: "2b949c9d-d271-4330-9351-3bd85704ad1e",
    id: "8",
  },
  {
    name: "6fb204a0-9bee-4c6d-88b4-da6c5903305a",
    description: "aut nemo repudiandae",
    title: "velit eveniet perferendis",
    imageUrl:
      "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/307.jpg",
    category: "0a4457dd-51e5-49e1-8dba-cc5c27123108",
    id: "9",
  },
  {
    name: "9d93193e-3471-41d8-86a8-a96a817e92dc",
    description: "eum et culpa",
    title: "ut ipsa nesciunt",
    imageUrl:
      "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/962.jpg",
    category: "032a7dfc-d07e-428d-8747-d36f76884f14",
    id: "10",
  },
  {
    name: "f061662b-d124-4f63-9a96-2be14d110891",
    description: "ipsa et accusamus",
    title: "assumenda qui officiis",
    imageUrl:
      "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/794.jpg",
    category: "55a132ea-ae62-49c1-8ae0-57e02f6fccf2",
    id: "11",
  },
  {
    name: "49dd0682-4185-4b35-aa6c-02798d3e726c",
    description: "commodi animi est",
    title: "qui deleniti dicta",
    imageUrl:
      "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/901.jpg",
    category: "17db606b-6fba-4a0e-82b8-0c81603e2598",
    id: "12",
  },
  {
    name: "89cd25f6-0bbb-4cd7-b65e-df87c215761b",
    description: "at esse asperiores",
    title: "iure et aut",
    imageUrl:
      "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/185.jpg",
    category: "bed6183e-0334-4ce0-8608-755640f994cd",
    id: "13",
  },
  {
    name: "55f0d44a-8bab-4134-bc68-cc4a7b3c4df4",
    description: "ipsam explicabo nemo",
    title: "pariatur aliquid voluptas",
    imageUrl:
      "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/1216.jpg",
    category: "e1515368-15fe-4bbc-a860-521206a81d00",
    id: "14",
  },
];
