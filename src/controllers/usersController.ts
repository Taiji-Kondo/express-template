import Express from 'express'

export default {
  index: (req: Express.Request, res: Express.Response): void => {
    console.log(req)
    res.send({ title: 'users' })
  },
}
