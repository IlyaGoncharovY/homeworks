type initStateType = typeof initState

type changeThemeACType = ReturnType<typeof changeThemeAC>

type themeReducerType = changeThemeACType

const initState = {
    theme: "dark" as themeType
};

export type themeType = "dark" | "red" | "some"

export const themeReducer = (state:initStateType = initState, action: themeReducerType): initStateType => { // fix any
    switch (action.type) {
        case "THEME-TYPE": {
            return {...state, theme: action.theme};
        }
        default: return state;
    }
};

export const changeThemeAC = (theme:themeType) => {
    return {
        type: "THEME-TYPE",
        theme
    } as const
}; // fix any