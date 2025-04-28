// req and res manage
import { Request, Response } from 'express'
import { userService } from './user.service'
import catchAsync from '../../utils/catchAsync'
import sendResponse from '../../utils/sendResponse';
import { StatusCodes } from 'http-status-codes'

const createUser = catchAsync(async (req, res) => {
  const payload = req.body
  const result = await userService.createUser(payload)

  sendResponse(res, {
    status: true,
    statusCode: StatusCodes.CREATED,
    message: 'User created successfully',
    data: result,
  })
})


const getUser = catchAsync(async (req: Request, res: Response) => {

  const result = await userService.getUser()

  sendResponse(res, {
    status: true,
    statusCode: StatusCodes.CREATED,
    message: 'User created successfully',
    data: result,
  })
})



export const userController = {
  createUser,
  getUser,
}
