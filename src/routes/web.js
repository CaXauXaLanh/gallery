import express from "express"
import homeController from "../controllers/homeController"

const router = express.Router()

const initWebRouter = (app) => {

    router.post('/create-new-user', homeController.createNewUser)

    router.get('/detail/user/:userID', homeController.getDetail)

    router.get('/create', homeController.createUser)

    router.get('/', homeController.getHomePage)

    return app.use('/', router)
}

export default initWebRouter