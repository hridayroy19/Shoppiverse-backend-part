import { StatusCodes } from "http-status-codes";
import catchAsync from "../../utils/catchAsync";
import sendResponse from "../../utils/sendResponse";
import { authService } from "./auth.Service";

const userRegister = catchAsync(async (req, res) => {
    const result = await authService.userRegisterDb(req.body)

    sendResponse(res, {
        status: true,
        statusCode: StatusCodes.CREATED,
        message: "User Register Successful",
        data: result
    })

})

const loginUser = catchAsync(async(req , res )=>{
    const result = await authService.loginUserDb(req.body)

    sendResponse(res,{
        status:true,
        statusCode:StatusCodes.ACCEPTED,
        message:"User Login Successful",
        token:result.token,
        data:result.user
    })
})


export const authController = {
    userRegister,
    loginUser
}