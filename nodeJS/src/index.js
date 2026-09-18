import moment from "moment";
import { sayHello } from "./sayHello";
import { sayGoodbye } from "./sayGoodbye";

import './css/index.css'

sayHello()
sayGoodbye()

console.log(moment().format('DD-MM-YYYY'))
