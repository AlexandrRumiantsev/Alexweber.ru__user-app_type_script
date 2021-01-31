import { useRouter } from 'next/router'
import {Layout} from '../../src/components/Layout'
import { useSelector, useDispatch } from "react-redux";
import {getProject} from "../../store/actions/projects";
import {Project} from '../../src/components/Projects/item/Project'



export default props => 
  <Layout>
    <Project/>
  </Layout>
