import {get} from '../utils/requests'
const Professor = () => {
    get('users').then((res)=>{
        console.log(res.data)
    })
    return (
        <div>
            Professor
        </div>
    )
}

export default Professor;