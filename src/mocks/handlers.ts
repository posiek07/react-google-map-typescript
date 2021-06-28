import { rest } from "msw";
import data from "./data.json";

let newData = JSON.stringify(data);
newData = JSON.parse(newData);

export const handlers = [
  rest.get(
    "https://s3-eu-west-1.amazonaws.com/olio-staging-images/developer/test-articles-v4.json",
    (req, res, ctx) => {
      return res(ctx.json(newData));
    }
  ),
];
