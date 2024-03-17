import { Hono } from 'hono'

const app = new Hono()

async function authMiddleware(c:any, next:any) {
  if(c.req.header("Authorization")){
    await next()
  }else{
    return c.text("You don't have access");
  }
}
app.use(authMiddleware);

app.get('/', authMiddleware, async (c) => {
  // const body = await c.req.json();
  // console.log(body); //get request body
  // console.log(c.req.header("Authorization")); //get request headers authorization
  // console.log(c.req.query("param")); //get request query parameters

  return c.text('Hello Hono!')
})

export default app
