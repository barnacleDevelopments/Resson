export default {
  widgets: [
    { name: "structure-menu" },
    {
      name: "project-info",
      options: {
        __experimental_before: [
          {
            name: "netlify",
            options: {
              description:
                "NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.",
              sites: [
                {
                  buildHookId:
                    "624a3e1135b2250eba9adbde",
                  title: "Sanity Studio",
                  name: "resson-studio",
                  apiId: "d802b007-75da-4f71-8c67-4ea057758c66",
                },
                {
                  buildHookId: "624a3e11002169575acf0716",
                  title: "Blog Website",
                  name: "resson",
                  apiId: "13f8e377-80bc-4141-9c43-8a6f9253883b",
                },
              ],
            },
          },
        ],
        data: [
          {
            title: "GitHub repo",
            value:
              "https://github.com/barnacleDevelopments/Resson",
            category: "Code",
          },
          {
            title: "Frontend",
            value: "https://resson.netlify.app",
            category: "apps",
          },
        ],
      },
    },
    { name: "project-users", layout: { height: "auto" } },
    {
      name: "document-list",
      options: {
        title: "Recent blog posts",
        order: "_createdAt desc",
        types: ["post"],
      },
      layout: { width: "medium" },
    },
  ],
};
