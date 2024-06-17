import express from 'express'
import multer from 'multer';
import bodyParser from 'body-parser';
import { fileURLToPath } from 'url';
import path, { dirname } from 'path';
const routers = express.Router();
import { Createuser, GetUsers, UpdateUser, DeleteUser, importUser ,addAttendence,removeAttendence} from '../controller/UserController.mjs'
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

var storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, './public/uploads');
    },
    filename: (req, file, cb) => {
        cb(null, file.originalname);
    }
})
var upload = multer({ storage: storage });
routers.post('/importUser', upload.single('file'),)
routers.use(bodyParser.urlencoded({ extended: true }));
routers.use(express.static(path.resolve(__dirname, "public")));
routers.post('/create', Createuser)
routers.get('/get', GetUsers);
routers.post('/update/:id', UpdateUser);
routers.post('/deleteUser/:id', DeleteUser);
routers.post('/importUser', importUser)
routers.post('/addAttendence',addAttendence)
routers.post('/removeAttendence',removeAttendence)
export default routers;