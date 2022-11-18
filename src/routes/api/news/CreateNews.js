const express = require("express");
const createNewsController = require("../../../components/news/controllers/CreateNews");
const News = require("../../../components/news/models/News");

const router = express.Router();
router.post(`/create`, async (req, res, next) => {
  try {
    const { news } = req.body;
    console.log("🚀 ~ file: Createnews.js ~ line 7 ~ router.post ~ news", news);
    const data = await createNewsController(news);
    data
      ? res.json({
          status: "Success",
          message: "Create news successfully",
          error: false,
          isCreated: true,
          data: data,
        })
      : res.json({
          status: "Fail",
          message: "Create news fail",
          error: true,
          isCreated: false,
          data: null,
        });
  } catch (error) {
    next(error);
  }
});

router.post(`/insert-newslist`, async (req, res, next) => {
  try {
    const data = await News.insertMany(fakeNews);
    data
      ? res.json({
          status: "Success",
          message: "Insert news successfully",
          error: false,
          isCreated: true,
          data: data,
        })
      : res.json({
          status: "Fail",
          message: "Insert news fail",
          error: true,
          isCreated: false,
          data: null,
        });
  } catch (error) {
    next(error);
  }
});
module.exports = router;
const fakeNews = [
  {
    title: "reiciendis perspiciatis velit",
    description:
      "Dolor laborum occaecati eum expedita. Placeat occaecati est est excepturi et est molestias voluptas accusantium. Sunt laboriosam nostrum velit totam est. Quis saepe ex ut nihil deserunt illo. Ut consequatur vitae beatae.",
    imageUrl:
      "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/1058.jpg",
  },
  {
    title: "unde labore omnis",
    description:
      "Necessitatibus libero modi hic. Aperiam possimus voluptatem consequatur. Sit praesentium illum illum hic ratione. Nihil omnis dicta iusto dignissimos.",
    imageUrl:
      "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/1236.jpg",
  },
  {
    title: "et dignissimos odit",
    description:
      "Voluptas quia et veritatis ut eveniet itaque. Quia quia sunt error est accusamus quia provident eaque. Et rerum rerum.",
    imageUrl:
      "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/764.jpg",
  },
  {
    title: "reiciendis omnis nisi",
    description:
      "Omnis iusto et accusamus nemo et in quae esse. Ratione dolores ut nulla ipsa modi qui voluptatem necessitatibus ea. Voluptas mollitia ab consequatur itaque et esse.",
    imageUrl:
      "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/509.jpg",
  },
  {
    title: "ad dolores corporis",
    description:
      "Nostrum nostrum ipsa illo sapiente. In velit harum sequi perferendis quia non. Qui neque doloremque expedita et tempore totam ipsa molestias. Nulla id ratione nulla aut velit qui. Fugit veniam quisquam sint animi quidem et soluta facere beatae. Labore quia autem dolor.",
    imageUrl:
      "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/261.jpg",
  },
  {
    title: "vel harum beatae",
    description:
      "Sunt fugit quia officia. Non et perspiciatis enim voluptates nesciunt unde omnis eos. Voluptatibus minima et quam qui qui incidunt laudantium.",
    imageUrl:
      "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/918.jpg",
  },
  {
    title: "error molestiae ipsa",
    description:
      "Illum sit at velit consequatur. Enim magni eum in qui dolor suscipit placeat quod quos. Dolorem facilis mollitia.",
    imageUrl:
      "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/100.jpg",
  },
  {
    title: "neque dolores similique",
    description:
      "Nisi adipisci libero in. Architecto doloremque itaque excepturi eveniet id distinctio qui.",
    imageUrl:
      "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/548.jpg",
  },
  {
    title: "earum aut et",
    description:
      "Doloremque sapiente nam sunt tenetur dolorem sit minus occaecati. Ut nisi occaecati. Omnis est beatae minus. Autem facilis sit necessitatibus libero veniam. Quia voluptatem dolor expedita aliquam rem aliquid ab. Et sapiente quam autem quia aut necessitatibus occaecati voluptates esse.",
    imageUrl:
      "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/879.jpg",
  },
  {
    title: "voluptas qui facere",
    description:
      "Nihil vel earum nulla hic sit. Nobis libero optio voluptatem similique non. Molestias repudiandae laborum rerum qui magnam voluptates exercitationem et delectus. Recusandae est iste facilis sit.",
    imageUrl:
      "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/26.jpg",
  },
  {
    title: "animi saepe culpa",
    description:
      "In sunt et inventore ullam. Optio quia incidunt. Temporibus rerum nesciunt velit repellendus. Consequuntur officiis qui error soluta ut.",
    imageUrl:
      "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/981.jpg",
  },
  {
    title: "eos sunt amet",
    description:
      "Accusantium molestiae possimus ea libero eaque itaque sed. Dolor ea omnis dolorem earum nostrum aliquam facilis sint. Quidem explicabo id accusamus eos.",
    imageUrl:
      "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/291.jpg",
  },
  {
    title: "delectus quam voluptatum",
    description:
      "Nemo dolore error quasi dolorem ut modi quos minima animi. Ut dolorem et earum ut.",
    imageUrl:
      "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/989.jpg",
  },
  {
    title: "blanditiis et sint",
    description:
      "Et et est aut quia. Officiis molestiae maiores sunt alias qui minima ratione. Impedit labore occaecati cum. Aliquam qui eum minus quibusdam quaerat repellendus vitae. Vel sapiente nihil illum neque voluptates vitae tempore nulla numquam.",
    imageUrl:
      "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/210.jpg",
  },
];