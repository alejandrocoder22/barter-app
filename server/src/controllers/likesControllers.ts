import * as likesServices from '../services/likesServices'
import  { Response, }  from 'express'
export const postLike = async (req: any, res: Response) => {
  
    try {
        await likesServices.postLike(req.user.userId, req.body.productId)
        res.status(200).send('Like Created')
    } catch (error: any) {
        res.send(error.message)
    }
}

export const getLikes = async (req: any, res: Response) => {
try {
    const likes = await likesServices.getLikes(req.user.userId)
    res.status(200).send(likes)
} catch (error) {
    res.send(error)
}
}