import {UserType} from "../HW8";

type generalType = {type: 'sort', payload: 'up' | "down"} | {type: "check", payload: number}

export const homeWorkReducer = (state: UserType[], action: generalType):UserType[] => { // need to fix any
    switch (action.type) {
        case 'sort': {
            // need to fix
            const peopleState = [...state].sort((a,b)=> {
                if (a.name > b.name) {
                    return 1
                } else if (a.name < b.name){
                    return -1
                } else return 0
            })
                return action.payload === "up" ? peopleState : peopleState.reverse()
        }
        case 'check': {
            // need to fix
            return state.filter(el=> el.age >= action.payload)
        }
        default:
            return state
    }
}




