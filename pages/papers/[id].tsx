import { useRouter } from 'next/router'
import {Layout} from '../../src/components/Layout'
import { useSelector, useDispatch } from "react-redux";
import {getProject} from "../../store/actions/projects";
import {Paper} from '../../src/components/Papers/item/Paper'



export default props => 
  <Layout>
    <Paper/>
  </Layout>