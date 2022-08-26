import Resolver from "@forge/resolver";
import api, { route } from "@forge/api";

const resolver = new Resolver();

resolver.define("get-issue-title", async ({ payload, context }) => {
  const {
    extension: {
      issue: { id },
    },
  } = context;

  const res = await api.asApp().requestJira(route`/rest/api/3/issue/${id}`);
  const data = await res.json();

  return data;
});

export const handler = resolver.getDefinitions();
