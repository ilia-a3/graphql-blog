const backend_uri = import.meta.env.VITE_BACKEND_URI;

export class Query {
  private static async graphqlQuery(graphql: object) {
    // console.log(backend_uri);
    try {
      //   console.log("query sent");
      const req = await fetch(backend_uri, {
        headers: {
          "Content-Type": "application/json",
        },
        method: "POST",
        body: JSON.stringify(graphql),
      });
      return await req.json();
    } catch {
      console.log(`error doing statement: ${graphql}`);
    }
  }
  public static addAuthor(name: string) {
    this.graphqlQuery({
      query: `mutation {
        addAuthor(author: {name: "${name}"}) {
                    id
                    name
            }}`,
      variables: { name },
    });
  }
  public static addBlog(args: {
    title: string;
    authorId: number;
    body: string;
  }) {
    this.graphqlQuery({
      query: `mutation {
            addBlog(blog: {title: ${args.title}, authorId: ${args.authorId}, body: ${args.body}}){
                id
            }
        }`,
      variables: {},
    });
  }
  public static async getAuthors(): Promise<{ id: number; name: string }[]> {
    const res = this.graphqlQuery({
      query: `query Authors {
        authors {
            id
            name
        }
        }`,
    });

    const authors = res.then((data) => data.data.authors);

    return authors;
  }
  public static async getBlogs(): Promise<
    {
      id: number;
      title: string;
      body: string;
      authorId: number;
    }[]
  > {
    const res = this.graphqlQuery({
      query: `query Blogs {
            blogs {
                id
                title
                body
                authorId
            }
        }`,
    });
    return res.then((data) => data.data.blogs);
  }
}
